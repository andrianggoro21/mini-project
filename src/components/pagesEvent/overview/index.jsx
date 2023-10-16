import { Box, Text, Image, Button } from "@chakra-ui/react";
import Loc from "../../../assets/images/location.png";
import Point from "../../../assets/images/point.png";
import Cal from "../../../assets/images/calendar.png";
import Eo1 from "../../../assets/images/eo1.png";

const Overview = () => {
  return (
    <Box margin="24px 0 26px 0" display='flex' alignItems='center' justifyContent='space-between'>
      <Box>
        <Box display="flex" alignItems="center" gap="18px" marginBottom="24px">
          <Text color="#ffffff" fontWeight="700" fontSize="18px">
            Ambyar Concert Yogyakarta 2023
          </Text>
          <Box bgColor="#0F2903" padding="2px 6px 2px 6px" borderRadius="8px">
            <Text color="#63C539" fontSize="14px">
              Music
            </Text>
          </Box>
        </Box>
        <Box display="flex" gap="10px" marginBottom="24px">
          <Box display="flex" alignItems="center" gap="10px">
            <Image src={Loc} />
            <Text color="#838383" fontSize="14px">
              Yogyakarta, Indonesia
            </Text>
          </Box>
          <Box display="flex" alignItems="center" gap="10px">
            <Image src={Point} />
            <Image src={Cal} />
            <Text color="#838383" fontSize="14px">
              1 - 4 October 2023
            </Text>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap="10px">
          <Image src={Eo1} />
          <Text color="#838383" fontSize="14px">
            Rockers Indonesia
          </Text>
        </Box>
      </Box>
      <Box display={{base:"none", lg: "block"}}>
        <Box w="220px" h="150px" bgColor="#1E1E1E" borderRadius="16px" display='flex' alignItems='center' justifyContent='center' flexDirection='column' gap='12px'>
          <Box display='flex' alignItems='center' gap='10px'>
            <Text fontSize="16px" fontWeight="400" color="#838383">
              Star from
            </Text>
            <Text
              fontSize="16px"
              fontWeight="400"
              color="#DB6969"
              textDecoration="line-through"
            >
              IDR 300.000
            </Text>
          </Box>
          <Text fontSize="22px" fontWeight="600" color="#ffffff">IDR 200.000</Text>
          <Button bgColor='#3C891C' color='#ffffff'>See Packages</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Overview;
