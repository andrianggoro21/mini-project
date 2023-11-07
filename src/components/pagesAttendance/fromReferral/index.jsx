import { Box, FormControl, Input, Button } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate, Link } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

const FromReferral = ({newDiscount}) => {
  const [referral, setReferral] = useState([]);
  const [discountTot, setDiscountTot] = useState(0)
  const toast = useToast();
  const Navigate = useNavigate();
  const [total, setTotal] = useState();
  const [jmlReguler, setJmlReguler] = useState();
  const [jmlVvip, setJmlVvip] = useState();
  const [event, setEvent] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [priceReg, setPriceReg] = useState([]);
  const [priceV, setPriceVvip] = useState([]);
  // console.log(ticket);
  const [referralCode, setReferralCode] = useState("");
  const [discountReg, setDiscountReg] = useState();
  const [discountV, setDiscountV] = useState();
  // console.log(discountV);

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
      setDiscountReg(response?.data?.data?.tickets[0]?.discount);
      // console.log(response?.data?.data?.tickets[1]?.discount);
      setDiscountV(response?.data?.data?.tickets[1]?.discount);
    } catch (err) {
      console.log(err);
    }
  };

  

  const getReferralCode = async (referralCode) => {
    // console.log(referralCode);
    try {
      const res = await axios.get(
        `http://localhost:8080/attendance/code/referral/${referralCode}`
      );
      console.log(res.data.data.referralCode);
      // localStorage.setItem("token", res?.data?.data?.token);
      setReferral(res?.data?.data);
      // dispatch(loginSuccess());
      // alert(res?.data?.message);
      if (res?.data?.data?.referralCode === referralCode) {
        newDiscount(ticket.length === 2? +discountReg + +discountV : +discountReg)
        // const resAttendanceDetailRegular = await axios.patch(
        //   "http://localhost:8080/attendance/detail",
        //   {
        //     attendanceId: resAttendance?.data?.data?.id,
        //     ticketId: ticket[0]?.id,
        //     ticketTotal: quantity1,
        //     priceTotal: jmlReguler,
        //   }
        // );
      }
      toast({
        title: "referral code success 😊 👋",
        description: res?.data?.message,
        status: "success",
        duration: 4000,
        isClosable: false,
        position: "top",
      });
      // Navigate("/")
    } catch (err) {
      console.log(err);
      // alert(err?.response?.data);
      toast({
        title: "The email you entered is not registered 🤭",
        description: err?.response?.data,
        status: "error",
        duration: 6000,
        isClosable: false,
        position: "top",
      });
      // Navigate("/register")
      // throw err
    }
  };

  useEffect(() => {
    getEvent();
    
  }, []);

  const formik = useFormik({
    initialValues: {
      referralCode: "",
    },

    onSubmit: (values) => {
      getReferralCode(values.referralCode);
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <FormControl>
          <Box display="flex" alignItems="center" gap="14px">
            <Input
              placeholder="Enter referral code"
              color="#ffffff"
              bgColor="#262626"
              border="none"
              _placeholder={{ color: "#585454" }}
              focusBorderColor="#262626"
              name="referralCode"
              value={formik.values.referralCode}
              onChange={formik.handleChange}
            />
            <Button
              bgColor="#3C891C"
              color="#ffffff"
              fontSize="14px"
              type="submit"
              // onClick={discount}
            >
              Apply
            </Button>
          </Box>
        </FormControl>
      </form>
    </Box>
  );
};

export default FromReferral;
