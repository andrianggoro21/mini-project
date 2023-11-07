import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import WidgetTransaction from "../../components/pagesTransaction/widgetTransaction";
import DetailTransaction from "../../components/pagesTransaction/detailTransaction";
import NavbarIsLogin from "../../components/isLoginNavbar";
import Footer from "../../components/footer";
import { nanoid } from "nanoid";

const Transaction = () => {
  const [event, setEvent] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [details, setDetails] = useState([]);

  // const [codeReg, setCodeReg] = useState([]);
  // const [codeVvip, setCodeVvip] = useState([]);
  // const [jmlRegular, setJmlReguler] = useState();
  // const [jmlVvip, setJmlVvip] = useState();

  const getEvent = async () => {
    const eventId = localStorage.getItem("eventId");
    try {
      const response = await axios.get(`http://localhost:8080/event/${eventId}`);
      // console.log(response.data.data.tickets);
      setEvent(response?.data?.data);
      setTicket(response?.data?.data?.tickets);
    } catch (err) {
      console.log(err);
    }
  };
  const getAttendance = async () => {
    const attendanceId =  localStorage.getItem("attendance");
    try {
      const response = await axios.get(`http://localhost:8080/attendance/${attendanceId}`);
      console.log(response?.data?.data);
      setAttendance(response?.data?.data);
      // setDetails(response?.data?.data?.attendanceDetails)
      // setJmlReguler(response?.data?.data?.attendanceDetails[0]?.ticketTotal);
      // setJmlVvip(response?.data?.data?.attendanceDetails[1]?.ticketTotal);
    } catch (err) {
      console.log(err);
    }
  };

  const getAttendanceDetail = async () => {
    const attendanceId =  localStorage.getItem("attendance");
    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/detail/${attendanceId}`
      );
      console.log(response?.data?.data.length);
      setDetails(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
    getAttendance();
    getAttendanceDetail();
  }, []);

  // const regularTicket = () => {
  //   for (let index = 1; index <= jmlRegular; index++) {
  //     const resCode = nanoid(10).toUpperCase();
  //     setCodeReg(resCode);
  //     // setReg();
  //   }
  //   console.log(codeReg);
  // };

  // const vvipTicket = () => {
  //   for (let index = 1; index <= jmlVvip; index++) {
  //     const resCode = nanoid(10).toUpperCase();
  //     setCodeVvip(resCode);
  //   }
  // };
  return (
    <Box>
      <NavbarIsLogin/>
      <Box
        maxW="100vw"
        minH="100vh"
        bgColor="#121212"
        padding="100px 24px 100px 24px"
        display="flex"
        justifyContent="center"
        gap={{ base: "24px", xl: "48px" }}
        flexDirection={{ base: "column", xl: "row" }}
      >
        <WidgetTransaction event={event} attendance={attendance} detail={details}/>
        {/* <Box w="200px" h='200px' bgColor='#ffffff'></Box> */}
        <Box>
          <DetailTransaction detail={details} attendance={attendance}/>
          <Box w="350px" display={{ base: "none", xl: "block" }} />
        </Box>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Transaction;
