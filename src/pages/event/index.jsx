import { Box } from "@chakra-ui/react";
import Navbar from "../../components/navbar";
import BannerEvent from "../../components/pagesEvent/bannerEvent";
import VoucherEvent from "../../components/pagesEvent/voucherEvent";
import NavEvent from "../../components/pagesEvent/navEvent";
import Overview from "../../components/pagesEvent/overview";
import Description from "../../components/pagesEvent/description";
import Highlight from "../../components/pagesEvent/highlight";
import Packages from "../../components/pagesEvent/packages";
import Included from "../../components/pagesEvent/included";
import BottomNav from "../../components/pagesEvent/bottomNav";

const Event = () => {
  return (
    <Box maxW="100vw" minH="100vh">
      <Navbar/>
      <Box className="event" bgColor="#121212" padding={{base: "24px", lg: "48px"}}>
        <BannerEvent/>
        <VoucherEvent/>
        <Box bgColor="#353535" w="full" h="2px" margin="32px 0 32px 0" />
        <NavEvent/>
        <Overview/>
        <Box bgColor="#353535" w="full" h="2px" margin="32px 0 32px 0" />
        <Description />
        <Box bgColor="#353535" w="full" h="2px" margin="32px 0 32px 0" />
        <Highlight/>
        <Box bgColor="#353535" w="full" h="2px" margin="32px 0 32px 0" />
        <Packages/>
        <Box bgColor="#353535" w="full" h="2px" margin="32px 0 32px 0" />
        <Included/>
      </Box>
      <BottomNav/>
    </Box>
  );
};
export default Event;
