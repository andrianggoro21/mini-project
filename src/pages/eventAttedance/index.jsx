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
import FormAttendance from "../../components/pagesAttendance/formAttendance";
import DetailAttendance from "../../components/pagesAttendance/detailAttendance";
import Footer from "../../components/footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";

import { Link, Navigate } from "react-router-dom";
import { Card, CardBody, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import banner from "../../assets/images/banner1.png";
import Cal from "../../assets/images/calendar.png";
import Loc from "../../assets/images/location.png";
import Time from "../../assets/images/time.png";
import Plus from "../../assets/images/plus.png";
import Minus from "../../assets/images/minus.png";
import { increment, decrement } from "../../redux/reducers/attendance";
import { nanoid } from "nanoid";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";
import AttendanceSchema from "../../schema";

const Attedance = () => {
  const [total, setTotal] = useState();
  const [data, setData] = useState([]);
  const Navigate = useNavigate();
  const toast = useToast();

  const [referralCode, setReferralCode] = useState("");
  const generateReferralCode = () => {
    const code = nanoid(6);
    setReferralCode(code);
  };

  const id = localStorage.getItem("cardId");

  const getEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:8888/event/${id}`);
      setData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const quantity = useSelector((state) => state.quantity.value);
 
  const dispatch = useDispatch();

  const priceTotalTicket = () => {
    setTotal(200000 * quantity);
  };

  useEffect(() => {
    priceTotalTicket();
  }, [quantity]);

  const inputAttendance = async (fullName, email, phoneNumber) => {
    try {
      const res = await axios.post("http://localhost:8080/attendance", {
        ticketId: 1,
        userId: 1,
        fullName,
        email,
        phoneNumber,
        referralCode,
        ticketTotal: quantity,
        priceTotal: total,
      });
      localStorage.setItem("attendance", res?.data?.data?.id);
      // alert("Input Success");
      toast({
        position: "top-right",
        title: "Input Success",
        description: "Personal details have been received",
        status: "success",
        duration: 5000,
        isClosable: false,
      });
      Navigate("/transaction/waiting");
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
      // formik.values.posting = "";
    },
  });
  return (
    <Box>
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
              {/* <Widget /> */}

              <Box>
                <Text color="#ffffff" fontSize="18px" fontWeight="700">
                  Event Attendance
                </Text>
                <Card w="full" margin="20px 0 20px 0" bgColor="#1E1E1E">
                  <CardBody>
                    <Box display="flex" gap="16px">
                      <Box display={{ base: "none", md: "block" }}>
                        <Image
                          w="300px"
                          h="120px"
                          borderRadius="10px"
                          src={data.image}
                        />
                      </Box>
                      <Box display="flex" flexDirection="column" gap="10px">
                        <Text color="#ffffff" fontSize="16px" fontWeight="700">
                          {data.title}
                        </Text>
                        <Box display="flex" flexDirection="column" gap="6px">
                          <Box display="flex" alignItems="center" gap="10px">
                            <Image src={Cal} />
                            <Text color="#bcbcbc" fontSize="14px">
                              {data.date}
                            </Text>
                          </Box>
                          <Box display="flex" alignItems="center" gap="10px">
                            <Image src={Time} />
                            <Text color="#bcbcbc" fontSize="14px">
                              {data.hours}
                            </Text>
                          </Box>
                          <Box display="flex" alignItems="center" gap="10px">
                            <Image src={Loc} />
                            <Text color="#bcbcbc" fontSize="14px">
                              {data.location}
                            </Text>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      bgColor="#353535"
                      w="full"
                      h="2px"
                      margin="32px 0 14px 0"
                    />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box w="100px">
                        <Text
                          color="#bcbcbc"
                          fontSize="16px"
                          fontWeight="600"
                          overflow="hidden"
                          textOverflow="ellipsis"
                        >
                          Ticket Type
                        </Text>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={{ base: "30px", sm: "70px" }}
                      >
                        <Box w="120px" textAlign="right">
                          <Text
                            color="#bcbcbc"
                            fontSize="16px"
                            fontWeight="600"
                          >
                            Price
                          </Text>
                        </Box>
                        <Box w="100px" textAlign="right">
                          <Text
                            color="#bcbcbc"
                            fontSize="16px"
                            fontWeight="600"
                          >
                            Quantity
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      bgColor="#353535"
                      w="full"
                      h="2px"
                      margin="14px 0 14px 0"
                    />
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box w="100px">
                        <Text color="#bcbcbc" fontSize="16px">
                          Regular
                        </Text>
                      </Box>
                      <Box
                        display="flex"
                        alignItems="center"
                        gap={{ base: "30px", sm: "70px" }}
                      >
                        <Box w="120px" textAlign="right">
                          <Text color="#bcbcbc" fontSize="16px">
                            200.000
                          </Text>
                        </Box>
                        <Box
                          w="100px"
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                        >
                          <Button
                            size="xs"
                            variant="ghost"
                            padding="0"
                            _hover={{ bgColor: "none" }}
                            _active={{ bgColor: "none" }}
                            onClick={() => dispatch(decrement())}
                          >
                            <Image src={Minus} />
                          </Button>
                          <Box>
                            <Text color="#bcbcbc" fontSize="16px">
                              {quantity}
                            </Text>
                          </Box>
                          <Button
                            size="xs"
                            variant="ghost"
                            padding="0"
                            _hover={{ bgColor: "none" }}
                            onClick={() => dispatch(increment())}
                          >
                            <Image src={Plus} />
                          </Button>
                        </Box>
                      </Box>
                    </Box>
                  </CardBody>
                </Card>
              </Box>
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
                    {/* <Box color="#ffffff" fontSize="16px" fontWeight="500" margin>
                      <Text >
                        Data 1
                      </Text>
                    </Box> */}
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
                          {formik.touched.fullName &&
                            formik.errors.fullName && (
                              <FormErrorMessage>
                                {formik.errors.fullName}
                              </FormErrorMessage>
                            )}
                        </FormControl>
                      </Box>
                      <Box>
                        <FormControl
                          isRequired
                          isInvalid={
                            formik.touched.email && formik.errors.email
                          }
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
                      {/* <Button
                        bgColor="#3C891C"
                        color="#ffffff"
                        fontSize="14px"
                        type="submit"
                      >
                        submit
                      </Button> */}
                    </Box>
                  </Box>
                {/* {form.map((item, index) => (
                  
                ))} */}
              </Box>
            </Box>
            <Box>
              {/* <DetailAttendance /> */}
              <Box
                w={{ base: "full", xl: "350px" }}
                h="300px"
                position={{ base: "static", xl: "fixed" }}
              >
                <Box
                  padding="24px"
                  borderRadius="10px"
                  display="flex"
                  flexDirection="column"
                  gap="12px"
                  bgColor="#1E1E1E"
                >
                  <Box>
                    {/* <form> */}
                    <FormControl>
                      <Box display="flex" alignItems="center" gap="14px">
                        <Input
                          placeholder="Enter referral code"
                          color="#ffffff"
                          bgColor="#262626"
                          border="none"
                          _placeholder={{ color: "#585454" }}
                          focusBorderColor="#262626"
                        />
                        <Button
                          bgColor="#3C891C"
                          color="#ffffff"
                          fontSize="14px"
                        >
                          Apply
                        </Button>
                      </Box>
                    </FormControl>
                    {/* </form> */}
                  </Box>
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
                      <Text>Service Fee</Text>
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
                  {/* <Link to="#">
                    <Box
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Button
                        type="submit"
                        w="full"
                        bgColor="#3C891C"
                        color="#ffffff"
                      >
                        Bayar Tiket
                      </Button>
                    </Box>
                  </Link> */}
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
