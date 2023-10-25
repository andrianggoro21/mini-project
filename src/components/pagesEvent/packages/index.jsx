import { Box, Text, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NotRefund from "../../../assets/images/not-refund.png";
import Instant from "../../../assets/images/instant.png";
import ValidDate from "../../../assets/images/valid-date.png";

const Packages = ({date, regular, premium}) => {
  console.log(regular);
  return (
    <Box>
      <Text
        fontSize="18px"
        fontWeight="700"
        color="#ffffff"
        marginBottom="16px"
      >
        Packages
      </Text>
      <Text
        fontSize="16px"
        fontWeight="600"
        color="#D9D9D9"
        marginBottom="16px"
      >
        Select the event date
      </Text>
      <Box display="flex" alignItems="center" gap="18px">
        <Box
          color="#7ED957"
          w="76px"
          h="72px"
          border="1px solid #7ED957"
          borderRadius="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          margin="16px 0 16px 0"
        >
          <Text>Thu</Text>
          <Text>{date}</Text>
        </Box>
      </Box>
      <Box
        bgColor="#1E1E1E"
        margin="25px 0 25px 0"
        borderRadius="10px"
        padding="24px"
      >
        <Box display="flex" alignItems="center" gap="14px">
          <Text fontSize="18px" fontWeight="700" color="#ffffff">
            Regular
          </Text>
          <Box bgColor="#0F2903" padding="6px" borderRadius="10px">
            <Text fontSize="14px" fontWeight="600" color="#63C539">
              Balcony Seat
            </Text>
          </Box>
        </Box>
        <Box color="#838383" margin="18px 0 18px 0">
          <Box display="flex" alignItems="center" gap="10px">
            <Image src={ValidDate} />
            <Text fontSize="14px" fontWeight="400" color="#838383">
              Valid on the selected date
            </Text>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Image src={Instant} />
            <Text
              margin="16px 0 16px 0"
              fontSize="14px"
              fontWeight="400"
              color="#838383"
            >
              Instant Confirmation
            </Text>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Image src={NotRefund} />
            <Text fontSize="14px" fontWeight="400" color="#838383">
              Refund not allowed
            </Text>
          </Box>
        </Box>
        <Box bgColor="#2C2C2C" h="2px" w="full" margin="28px 0 28px 0" />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Text color="#DB6969" textDecoration="line-through">
              IDR 300.000
            </Text>
            <Text color="#ffffff" fontSize="18px" fontWeight="600">
              IDR {regular}
            </Text>
          </Box>
          <Box>
            <Link to="/attendance">
              <Button bgColor="#3C891C" color="#ffffff" padding="10px">
                Select Tickect
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
      <Box
        bgColor="#1E1E1E"
        margin="25px 0 25px 0"
        borderRadius="10px"
        padding="24px"
      >
        <Box display="flex" alignItems="center" gap="14px">
          <Text fontSize="18px" fontWeight="700" color="#ffffff">
            Premium
          </Text>
          <Box bgColor="#0F2903" padding="6px" borderRadius="10px">
            <Text fontSize="14px" fontWeight="600" color="#63C539">
              Numbered Seat
            </Text>
          </Box>
        </Box>
        <Box color="#838383" margin="18px 0 18px 0">
          <Box display="flex" alignItems="center" gap="10px">
            <Image src={ValidDate} />
            <Text fontSize="14px" fontWeight="400" color="#838383">
              Valid on the selected date
            </Text>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Image src={Instant} />
            <Text
              margin="16px 0 16px 0"
              fontSize="14px"
              fontWeight="400"
              color="#838383"
            >
              Instant Confirmation
            </Text>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Image src={NotRefund} />
            <Text fontSize="14px" fontWeight="400" color="#838383">
              Refund not allowed
            </Text>
          </Box>
        </Box>
        <Box bgColor="#2C2C2C" h="2px" w="full" margin="28px 0 28px 0" />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box>
            <Text color="#DB6969" textDecoration="line-through">
              IDR 500.000
            </Text>
            <Text color="#ffffff" fontSize="18px" fontWeight="600">
              IDR {premium}
            </Text>
          </Box>
          <Box>
            <Link to="/attendance">
              <Button bgColor="#3C891C" color="#ffffff" padding="10px">
                Select Tickect
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Packages;
