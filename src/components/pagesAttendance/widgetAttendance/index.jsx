import {
  Box,
  Text,
  Card,
  CardBody,
  Image,
} from "@chakra-ui/react";
import banner from "../../../assets/images/banner1.png";
import Cal from "../../../assets/images/calendar.png";
import Loc from "../../../assets/images/location.png";

const Widget = () => {
  return (
    <Box>
      <Text color="#ffffff" fontSize="18px" fontWeight="700">
        Event Attendance
      </Text>
      <Card w="full" margin="20px 0 20px 0" bgColor="#1E1E1E">
        <CardBody>
          <Box display="flex" gap="16px">
            <Box display={{base: "none", md: "block"}}>
              <Image w="300px" borderRadius="10px" src={banner} />
            </Box>
            <Box display="flex" flexDirection="column" gap="10px">
              <Text color="#ffffff" fontSize="16px" fontWeight="700">
                Ambyar Concert Yogyakarta 2023
              </Text>
              <Box display="flex" flexDirection="column" gap="6px">
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src={Cal} />
                  <Text color="#bcbcbc" fontSize="14px">
                    1 - 4 October 2023
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src={Cal} />
                  <Text color="#bcbcbc" fontSize="14px">
                    15:00 - 23:00 WIB
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src={Loc} />
                  <Text color="#bcbcbc" fontSize="14px">
                    Yogyakarta, Indonesia
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box bgColor="#353535" w="full" h="2px" margin="32px 0 14px 0" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box w="100px" >
              <Text color="#bcbcbc" fontSize="16px" fontWeight="600" overflow='hidden' textOverflow='ellipsis'>
                Ticket Type
              </Text>
            </Box>
            <Box display="flex" alignItems="center" gap={{base: "30px", sm:"70px"}}>
              <Box w="120px" textAlign="right">
                <Text color="#bcbcbc" fontSize="16px" fontWeight="600">
                  Price
                </Text>
              </Box>
              <Box w="80px" textAlign="right">
                <Text color="#bcbcbc" fontSize="16px" fontWeight="600">
                  Quantity
                </Text>
              </Box>
            </Box>
          </Box>
          <Box bgColor="#353535" w="full" h="2px" margin="14px 0 14px 0" />
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box w="100px">
              <Text color="#bcbcbc" fontSize="16px">
                Regular
              </Text>
            </Box>
            <Box display="flex" alignItems="center"  gap={{base: "30px", sm:"70px"}}>
              <Box w="120px" textAlign="right">
                <Text color="#bcbcbc" fontSize="16px">
                  200.000
                </Text>
              </Box>
              <Box w="80px" textAlign="right">
                <Text color="#bcbcbc" fontSize="16px">
                  x1
                </Text>
              </Box>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </Box>
  );
};
export default Widget;
