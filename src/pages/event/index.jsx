import { Box } from "@chakra-ui/react";
import axios from "axios";
import Navbar from "../../components/navbar";
import BannerEvent from "../../components/pagesEvent/bannerEvent";
import VoucherEvent from "../../components/pagesEvent/voucherEvent";
import Overview from "../../components/pagesEvent/overview";
import Description from "../../components/pagesEvent/description";
import Highlight from "../../components/pagesEvent/highlight";
import Packages from "../../components/pagesEvent/packages";
import Included from "../../components/pagesEvent/included";
import BottomNav from "../../components/pagesEvent/bottomNav";
import { useState, useEffect } from "react";
import Footer from "../../components/footer";

const Event = () => {
  const [data, setData] = useState([]);
  const [ticket, setTicket] = useState([])

  const id = localStorage.getItem("cardId");

  const getEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/event/1`);
      console.log(response.data.data);
      setData(response?.data?.data);
      setTicket(response?.data?.data?.tickets)
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);
  return (
    <Box maxW="100vw" minH="100vh">
      <Navbar />
      <Box
        className="event"
        bgColor="#121212"
        padding={{ base: "100px 24px  24px  24px", lg: "100px 80px 24px 80px" }}
      >
        <BannerEvent banner={data.image} />
        {/* <VoucherEvent /> */}
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box display={{ base: "none", md: "block" }}>
          <Box
            color="#838383"
            fontWeight="700"
            fontSize="14px"
            display="flex"
            alignItems="center"
            gap="12px"
          >
            <a href="#overview">
              <Box
                padding="8px"
                borderBottom="2px solid #121212"
                _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
              >
                Overview
              </Box>
            </a>
            <a href="#description">
              <Box
                padding="8px"
                borderBottom="2px solid #121212"
                _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
              >
                Description
              </Box>
            </a>
            <a href="#highlight">
              <Box
                padding="8px"
                borderBottom="2px solid #121212"
                _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
              >
                Highlight
              </Box>
            </a>
            <a href="#packages">
              <Box
                padding="8px"
                borderBottom="2px solid #121212"
                _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
              >
                Packages
              </Box>
            </a>
            <a href="#included">
              <Box
                padding="8px"
                borderBottom="2px solid #121212"
                _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
              >
                Included
              </Box>
            </a>
          </Box>
        </Box>
        <Box id="overview">
          <Overview
            title={data.eventName}
            location={data?.eventlocation?.locationName}
            date={data.startDate}
            eoUser={data.eo_user}
          />
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box id="description">
          <Description description={data.description} />
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box id="highlight">
          <Highlight highlight={data.highlight} />
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box id="packages">
          <Packages ticket={ticket}/>
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box id="included">
          <Included include={data.include} />
        </Box>
      </Box>
      <BottomNav />
      <Box display={{ base: "none", lg: "block" }}>
        <Footer />
      </Box>
    </Box>
  );
};
export default Event;
