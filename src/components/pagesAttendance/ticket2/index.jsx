import { Box, Text, Button, Image } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { decrementVvip, incrementVvip } from "../../../redux/reducers/attendance";
import Plus from "../../../assets/images/plus.png";
import Minus from "../../../assets/images/minus.png";

const Ticket2 = ({ quantity, ticketName, price }) => {
  const dispatch = useDispatch();
  return (
    <Box>
      <Box bgColor="#353535" w="full" h="2px" margin="14px 0 14px 0" />

      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box w="100px">
          <Text color="#bcbcbc" fontSize="16px">
            {ticketName}
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={{ base: "30px", sm: "70px" }}
        >
          <Box w="120px" textAlign="right">
            <Text color="#bcbcbc" fontSize="16px">
              {price}
            </Text>
          </Box>
          <Box
            w="100px"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              size="xs"
              variant="ghost"
              padding="0"
              _hover={{ bgColor: "none" }}
              _active={{ bgColor: "none" }}
              onClick={() => dispatch(decrementVvip())}
            >
              <Image src={Minus} />
            </Button>
            <Box>
              <Text color="#bcbcbc" fontSize="16px">
                {quantity}
              </Text>
            </Box>
            <Button
              size="xs"
              variant="ghost"
              padding="0"
              _hover={{ bgColor: "none" }}
              onClick={() => dispatch(incrementVvip())}
            >
              <Image src={Plus} />
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Ticket2;
