import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Checkbox,
} from "@chakra-ui/react";
import Widget from "../../components/pagesAttendance/widgetAttendance";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import AttendanceSchema from "../../schema";
import FormReferral from "../../components/pagesAttendance/fromReferral";
import NavbarIsLogin from "../../components/isLoginNavbar";

const Attedance = () => {
  const [total, setTotal] = useState();
  const [jmlReguler, setJmlReguler] = useState();
  const [jmlVvip, setJmlVvip] = useState();
  const [event, setEvent] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [priceReg, setPriceReg] = useState([]);
  const [priceV, setPriceVvip] = useState([]);
  console.log(priceReg);
  const [referralCode, setReferralCode] = useState("");

  const Navigate = useNavigate();
  const toast = useToast();

  const generateReferralCode = () => {
    const code = nanoid(6);
    setReferralCode(code);
  };

  const getEvent = async () => {
    const eventId = localStorage.getItem("eventId");
    try {
      const response = await axios.get(
        `http://localhost:8080/event/${eventId}`
      );
      // console.log(response?.data?.data?.tickets?.price);
      setEvent(response?.data?.data);
      setTicket(response?.data?.data?.tickets);
      setPriceReg(response?.data?.data?.tickets[0]?.price);
      setPriceVvip(response?.data?.data?.tickets[1]?.price);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const quantity1 = useSelector((state) => state.quantity.value);
  const quantity2 = useSelector((state) => state.quantity.valueV);

  const dispatch = useDispatch();

  const priceTotalTicket = () => {
    let priceRegular = 0
    let priceVvip = 0
    if (ticket.length == 2) {
      priceRegular = priceReg;
      priceVvip = priceV;
    } else if (ticket.length == 1) {
      priceRegular = priceReg;
    }
    const regular = priceRegular * quantity1;
    const vvip = priceVvip * quantity2;
    setJmlReguler(regular);
    setJmlVvip(vvip);
    setTotal(regular + vvip);
    // setTotal(0)
  };

  useEffect(() => {
    priceTotalTicket();
  }, [quantity1, quantity2]);

  const inputAttendance = async (fullName, email, phoneNumber) => {
    try {
      const resAttendance = await axios.post(
        "http://localhost:8080/attendance",
        {
          userId: 2,
          fullName,
          email,
          phoneNumber,
          referralCode,
        }
      );

      if (quantity1 !== 0 && quantity2 !== 0) {
        const resAttendanceDetailRegular = await axios.post(
          "http://localhost:8080/attendance/detail",
          {
            attendanceId: resAttendance?.data?.data?.id,
            ticketId: ticket[0]?.id,
            ticketTotal: quantity1,
            priceTotal: jmlReguler,
          }
        );
        const resAttendanceDetailVvip = await axios.post(
          "http://localhost:8080/attendance/detail",
          {
            attendanceId: resAttendance?.data?.data?.id,
            ticketId: ticket[1]?.id,
            ticketTotal: quantity2,
            priceTotal: jmlVvip,
          }
        );
      } else if (quantity1 !== 0 && quantity2 === 0) {
        const resAttendanceDetailRegular = await axios.post(
          "http://localhost:8080/attendance/detail",
          {
            attendanceId: resAttendance?.data?.data?.id,
            ticketId: ticket[0]?.id,
            ticketTotal: quantity1,
            priceTotal: jmlReguler,
          }
        );
      } else if (quantity1 === 0 && quantity2 !== 0) {
        const resAttendanceDetailVvip = await axios.post(
          "http://localhost:8080/attendance/detail",
          {
            attendanceId: resAttendance?.data?.data?.id,
            ticketId: ticket[1]?.id,
            ticketTotal: quantity2,
            priceTotal: jmlVvip,
          }
        );
      }

      localStorage.setItem("attendance", resAttendance?.data?.data?.id);
      // alert("Input Success");
      toast({
        position: "top-right",
        title: "Input Success",
        description: "Personal details have been received",
        status: "success",
        duration: 5000,
        isClosable: false,
      });
      Navigate("/transaction");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
    },

    validationSchema: AttendanceSchema,
    onSubmit: (values) => {
      console.log(values.fullName);
      inputAttendance(values.fullName, values.email, values.phoneNumber);
    },
  });
  return (
    <Box>
      <NavbarIsLogin />
      <Box
        maxW="100vw"
        minH="100vh"
        padding="100px 24px 100px 24px"
        bgColor="#121212"
      >
        <form onSubmit={formik.handleSubmit}>
          <Box
            display="flex"
            justifyContent="center"
            gap={{ base: "24px", xl: "48px" }}
            flexDirection={{ base: "column", xl: "row" }}
          >
            <Box display="flex" flexDirection="column" gap="24px">
              <Widget
                event={event}
                ticket={ticket}
                quantity1={quantity1}
                quantity2={quantity2}
              />

              {/* <FormAttendance/> */}
              <Box>
                <Text color="#ffffff" fontSize="18px" fontWeight="700">
                  Personal Details
                </Text>
                <Box
                  padding="24px"
                  borderRadius="10px"
                  margin="20px 0 40px 0"
                  bgColor="#1E1E1E"
                >
                  <Box display="flex" flexDirection="column" gap="32px">
                    <Box>
                      <FormControl
                        isRequired
                        isInvalid={
                          formik.touched.fullName && formik.errors.fullName
                        }
                      >
                        <FormLabel color="#bcbcbc">Full Name</FormLabel>
                        <Input
                          placeholder="Full Name"
                          color="#ffffff"
                          bgColor="#262626"
                          border="none"
                          _placeholder={{ color: "#585454" }}
                          focusBorderColor="#262626"
                          name="fullName"
                          value={formik.values.fullName}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.fullName && formik.errors.fullName && (
                          <FormErrorMessage>
                            {formik.errors.fullName}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        isRequired
                        isInvalid={formik.touched.email && formik.errors.email}
                      >
                        <FormLabel color="#bcbcbc">Email</FormLabel>
                        <Input
                          placeholder="Email"
                          color="#ffffff"
                          bgColor="#262626"
                          border="none"
                          _placeholder={{ color: "#585454" }}
                          focusBorderColor="#262626"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.email && formik.errors.email && (
                          <FormErrorMessage>
                            {formik.errors.email}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl
                        isRequired
                        isInvalid={
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                        }
                      >
                        <FormLabel color="#bcbcbc">Phone Number</FormLabel>
                        <Input
                          placeholder="Phone Number"
                          color="#ffffff"
                          bgColor="#262626"
                          border="none"
                          _placeholder={{ color: "#585454" }}
                          focusBorderColor="#262626"
                          name="phoneNumber"
                          value={formik.values.phoneNumber}
                          onChange={formik.handleChange}
                        />
                        {formik.touched.phoneNumber &&
                          formik.errors.phoneNumber && (
                            <FormErrorMessage>
                              {formik.errors.phoneNumber}
                            </FormErrorMessage>
                          )}
                      </FormControl>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              {/* <DetailAttendance /> */}
              <Box
                w={{ base: "full", xl: "350px" }}
                h="300px"
                // position={{ base: "static", xl: "fixed" }}
              >
                <Box
                  padding="24px"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="column"
                  gap="12px"
                  bgColor="#1E1E1E"
                >
                  <FormReferral />

                  <Text color="#ffffff" fontSize="18px" fontWeight="700">
                    Price Details
                  </Text>
                  <Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      color="#bcbcbc"
                      fontSize="16px"
                    >
                      <Text>Total Ticket Price</Text>
                      <Text>{total}</Text>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      color="#bcbcbc"
                      fontSize="16px"
                    >
                      <Text>Discount</Text>
                      <Text>0</Text>
                    </Box>
                  </Box>
                  <Box
                    bgColor="#353535"
                    w="full"
                    h="2px"
                    margin="8px 0 8px 0"
                  />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    color="#ffffff"
                    fontSize="16px"
                    fontWeight="600"
                  >
                    <Text>Total Payment</Text>
                    <Text>{total}</Text>
                  </Box>
                  <Box
                    bgColor="#353535"
                    w="full"
                    h="2px"
                    margin="8px 0 8px 0"
                  />
                  <Box display="flex" alignItems="center" gap="14px">
                    <Checkbox defaultChecked colorScheme="green" />
                    <Text color="#bcbcbc" fontSize="14px">
                      I agree to the applicable Terms & Conditions
                    </Text>
                  </Box>

                  <Button
                    type="submit"
                    w="full"
                    bgColor="#3C891C"
                    color="#ffffff"
                    onClick={generateReferralCode}
                  >
                    Bayar Tiket
                  </Button>
                </Box>
              </Box>

              <Box w="350px" display={{ base: "none", xl: "block" }} />
            </Box>
          </Box>
        </form>
      </Box>
      <Footer />
    </Box>
  );
};
export default Attedance;
