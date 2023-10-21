import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import CardTransaction from "../../components/pagesTransaction/cardTransaction";


const Waiting = () => {
  return (
    <Box maxW="100vw" minH="100vh">
      <Navbar />
      <Box
        className="transaction"
        bgColor="#121212"
        padding={{ base: "24px", lg: "24px 80px 24px 80px" }}
      >
        <Box margin="24px 0 24px 0">
          <Box>
            <Text
              fontSize="18px"
              fontWeight="700"
              color="#ffffff"
              marginBottom="24px"
            >
              Transactions
            </Text>
            <Box
              color="#838383"
              fontSize="14px"
              fontWeight="700"
              display="flex"
              alignItems="center"
              gap="24px"
            >
              <Link to="/transaction/waiting">
                <Box
                  padding="8px"
                  borderBottom="2px solid #121212"
                  _hover={{
                    color: "#7ED957",
                    borderBottom: "2px solid #7ED957",
                  }}
                >
                  Waiting Payment
                </Box>
              </Link>
              <Link to="/transaction/success">
                <Box
                  padding="8px"
                  borderBottom="2px solid #121212"
                  _hover={{
                    color: "#7ED957",
                    borderBottom: "2px solid #7ED957",
                  }}
                >
                  Payment Success
                </Box>
              </Link>
            </Box>
          </Box>
        </Box>
        {/* <TabHeader /> */}
        {/* <Box bgColor="#353535" w="full" h="2px" margin="32px 0 32px 0" /> */}
        <Box id="waiting">
          <CardTransaction />
        </Box>
      </Box>
    </Box>
  );
};
export default Waiting;
