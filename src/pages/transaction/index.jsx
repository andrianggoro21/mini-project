import axios from "axios";
import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import WidgetTransaction from "../../components/pagesTransaction/widgetTransaction";
import DetailTransaction from "../../components/pagesTransaction/detailTransaction";

const Transaction = () => {
  const [event, setEvent] = useState([]);
  const [ticket, setTicket] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [details, setDetails] = useState([]);

  const getEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/event/1`);
      // console.log(response.data.data.tickets);
      setEvent(response?.data?.data);
      setTicket(response?.data?.data?.tickets);
    } catch (err) {
      console.log(err);
    }
  };
  const getAttendance = async () => {
    try {
      const response = await axios.get("http://localhost:8080/attendance/1");
      console.log(response?.data?.data);
      setAttendance(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getAttendanceDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/attendance/detail/1`);
      // console.log(response?.data?.data);
      setDetails(response?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
    getAttendance()
    getAttendanceDetail()
  }, []);
  return (
    <Box
      maxW="100vw"
      minH="100vh"
      bgColor="#121212"
      padding="50px 24px 100px 24px"
      display="flex"
      justifyContent="center"
      gap={{ base: "24px", xl: "48px" }}
      flexDirection={{ base: "column", xl: "row" }}
    >
      <WidgetTransaction event={event} attendance={attendance} />
      {/* <Box w="200px" h='200px' bgColor='#ffffff'></Box> */}
      <Box>
        <DetailTransaction detail={details} />
        <Box w="350px" display={{ base: "none", xl: "block" }} />
      </Box>
    </Box>
  );
};

export default Transaction;
