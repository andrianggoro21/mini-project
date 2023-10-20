import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  Checkbox,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DetailAttendance = () => {
  return (
    <Box
      w={{ base: "full", xl: "350px" }}
      h="300px"
      position={{ base: "static", xl: "fixed" }}
    >
      <Box
        padding="24px"
        borderRadius="10px"
        display="flex"
        flexDirection="column"
        gap="12px"
        bgColor="#1E1E1E"
      >
        <Box>
          <form>
            <FormControl>
              <Box display="flex" alignItems="center" gap="14px">
                <Input
                  placeholder="Enter referral code"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                />
                <Button bgColor="#3C891C" color="#ffffff" fontSize="14px">
                  Apply
                </Button>
              </Box>
            </FormControl>
          </form>
        </Box>
        <Text color="#ffffff" fontSize="18px" fontWeight="700">
          Price Details
        </Text>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            color="#bcbcbc"
            fontSize="16px"
          >
            <Text>Total Ticket Price</Text>
            <Text>200.000</Text>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            color="#bcbcbc"
            fontSize="16px"
          >
            <Text>Service Fee</Text>
            <Text>0</Text>
          </Box>
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="8px 0 8px 0" />
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          color="#ffffff"
          fontSize="16px"
          fontWeight="600"
        >
          <Text>Total Payment</Text>
          <Text>200.000</Text>
        </Box>
        <Box bgColor="#353535" w="full" h="2px" margin="8px 0 8px 0" />
        <Box display="flex" alignItems="center" gap="14px">
          <Checkbox defaultChecked colorScheme="green" />
          <Text color="#bcbcbc" fontSize="14px">
            I agree to the applicable Terms & Conditions
          </Text>
        </Box>
        <Link to="/transaction/waiting">
          <Box
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button w="full" bgColor="#3C891C" color="#ffffff">
              Bayar Tiket
            </Button>
          </Box>
        </Link>
      </Box>
    </Box>
  );
};
export default DetailAttendance;
