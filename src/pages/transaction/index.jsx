import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import WidgetTransaction from "../../components/pagesTransaction/widgetTransaction";
import DetailTransaction from "../../components/pagesTransaction/detailTransaction";

const Transaction = () => {
  return (
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
      <WidgetTransaction />
      {/* <Box w="200px" h='200px' bgColor='#ffffff'></Box> */}
      <Box>
        <DetailTransaction />
        <Box w="350px" display={{ base: "none", xl: "block" }} />
      </Box>
    </Box>
  );
};

export default Transaction;
