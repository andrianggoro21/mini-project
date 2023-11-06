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
  const [code, setCode] = useState();
  localStorage.setItem("qrcode", code);
  const codeForQrCode = () => {
    const resCode = nanoid(10).toUpperCase();
    setCode(resCode);
  };

  const getAttendance = async () => {
    const attendanceId = localStorage.getItem("attendance");
    try {
      const response = await axios.get(
        `http://localhost:8080/attendance/${attendanceId}`
      );
      // console.log(response?.data?.data);
      setAttendance(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAttendance();
  }, []);
  return (
    <Box>
      <NavbarIsLogin />
      <Box
        maxW="100vw"
        minH="100vh"
        bgColor="#121212"
        padding="100px 24px 100px 24px"
      >
        <DisplayReferral attendance={attendance}/>
        <CardTicket />
        <Button onClick={codeForQrCode}>Generate</Button>
        <Text color="#ffffff">{code}</Text>
      </Box>
      <Footer />
    </Box>
  );
};

export default Success;
