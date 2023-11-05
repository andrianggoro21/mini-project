import {
  Box,
  Text,
  Input,
  Button,
  FormControl,
  Checkbox,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Ticket from "../../../assets/images/ticket.png";

const DetailTransaction = ({ detail }) => {
  return (
    <Box
      w={{ base: "full", xl: "350px" }}
      h="300px"
      // position={{ base: "static", xl: "fixed" }}
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
          {detail.map((item, index) => (
            <Box>
              <Box display="flex" alignItems="center" gap="20px">
            <Image src={Ticket} />
            <Box color="#ffffff">
              <Text>{item?.ticket?.ticketName}</Text>
              <Box display="flex" gap="10px">
                <Text>{item?.ticketTotal} Ticket x</Text>
                <Text>{item?.ticket?.price}</Text>
              </Box>
            </Box>
          </Box>
          <Box bgColor="#353535" w="full" h="2px" margin="14px 0 14px 0" />
            </Box>
          ))}
          
          {/* <Box display="flex" alignItems="center" gap="20px">
            <Image src={Ticket} />
            <Box color="#ffffff">
              <Text>VVIP</Text>
              <Box display="flex" gap="10px">
                <Text>2 Tiket x</Text>
                <Text>600000</Text>
              </Box>
            </Box>
          </Box> */}
        </Box>

        {/* <Box bgColor="#353535" w="full" h="2px" margin="14px 0 14px 0" /> */}

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
            <Text>Discount</Text>
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

        {/* <Box display="flex" alignItems="center" gap="14px">
          <Checkbox defaultChecked colorScheme="green" />
          <Text color="#bcbcbc" fontSize="14px">
            I agree to the applicable Terms & Conditions
          </Text>
        </Box>
        <Link to="#">
          <Box
            w="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Button type="submit" w="full" bgColor="#3C891C" color="#ffffff">
              Bayar Tiket
            </Button>
          </Box>
        </Link> */}
      </Box>
    </Box>
  );
};
export default DetailTransaction;
