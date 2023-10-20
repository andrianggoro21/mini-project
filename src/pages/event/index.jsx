import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import BannerEvent from "../../components/pagesEvent/bannerEvent";
import VoucherEvent from "../../components/pagesEvent/voucherEvent";
// import NavEvent from "../../components/pagesEvent/navEvent";
import Overview from "../../components/pagesEvent/overview";
import Description from "../../components/pagesEvent/description";
import Highlight from "../../components/pagesEvent/highlight";
import Packages from "../../components/pagesEvent/packages";
import Included from "../../components/pagesEvent/included";
import BottomNav from "../../components/pagesEvent/bottomNav";

const Event = () => {
  return (
    <Box maxW="100vw" minH="100vh">
      <Navbar />
      <Box
        className="event"
        bgColor="#121212"
        padding={{ base: "24px", lg: "24px 80px 24px 80px" }}
      >
        <BannerEvent />
        <VoucherEvent />
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box>
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
          <Overview/>
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box id="description">
          <Description/>
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box id="highlight">
          <Highlight/>
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box id="packages">
          <Packages/>
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="24px 0 24px 0" />
        <Box id="included"><Included/></Box>
      </Box>
      <BottomNav />
    </Box>
  );
};
export default Event;
