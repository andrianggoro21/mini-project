import { Box, Text, Image, Button } from "@chakra-ui/react";

const TabHeader = () => {
  return (
    <Box margin='24px 0 24px 0'>
      <Text
        fontSize="18px"
        fontWeight="700"
        color="#ffffff"
        marginBottom="24px"
      >
        Transactions
      </Text>
      <Box color='#838383' fontSize='14px' fontWeight='700' display='flex' alignItems='center' gap='24px'>
        <Text>Waiting Payment</Text>
        <Text>Payment Success</Text>
      </Box>
    </Box>
  );
};
export default TabHeader;
