import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CardTicket from "../../components/pagesTransaction/cardTicket";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import NavbarIsLogin from "../../components/isLoginNavbar";
import Footer from "../../components/footer";
import axios from "axios";
import DisplayReferral from "../../components/pagesSuccess/displayReferral";

const Success = () => {
  const [attendance, setAttendance] = useState([]);
  const [jmlRegular, setJmlReguler] = useState();
  const [jmlVvip, setJmlVvip] = useState();
  const [codeReg, setCodeReg] = useState([]);
  const [codeVvip, setCodeVvip] = useState([]);

  const getAttendance = async () => {
    const attendanceId = localStorage.getItem("attendance");
    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/${attendanceId}`
      );
      console.log(response?.data?.data?.attendanceDetails[0]?.ticketTotal);
      setJmlReguler(response?.data?.data?.attendanceDetails[0]?.ticketTotal);
      setJmlVvip(response?.data?.data?.attendanceDetails[1]?.ticketTotal);
      setAttendance(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const regularTicket = () => {
    for (let index = 1; index <= jmlRegular; index++) {
      const resCode = nanoid(10).toUpperCase();
      setCodeReg(resCode);
      // setReg();
    }
    // console.log(codeReg);
  };

  const vvipTicket = () => {
    for (let index = 1; index <= jmlVvip; index++) {
      const resCode = nanoid(10).toUpperCase();
      setCodeVvip(resCode);
    }
  };

  useEffect(() => {
    getAttendance();
    regularTicket();
    vvipTicket()
    // const timeOut = setTimeout(() => {regularTicket()}, 5000);
    // return clearTimeout(timeOut)
  }, []);
  // useEffect(() => {
  //   regularTicket();
  //   vvipTicket();
  // }, [attendance]);
  return (
    <Box>
      <NavbarIsLogin />
      <Box
        maxW="100vw"
        minH="100vh"
        bgColor="#121212"
        padding="100px 24px 100px 24px"
      >
        <DisplayReferral attendance={attendance} />
        <CardTicket jmlReg={codeReg} jmlVvip={codeVvip}/>
        {/* <Button onClick={codeForQrCode}>Generate</Button> */}
        {/* <Text color="#ffffff">{code}</Text> */}
      </Box>
      <Footer />
    </Box>
  );
};

export default Success;
