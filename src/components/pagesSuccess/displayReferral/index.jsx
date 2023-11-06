import { Box, Text } from "@chakra-ui/react";

const DisplayReferral = ({ attendance }) => {
  return (
    <Box maxW='100vw' display='flex' alignItems='center' justifyContent='flex-end'>
      <Box color="#ffffff" fontSize='20px' fontWeight='500'>
        <Text>Referral Code: {attendance.referralCode}</Text>
      </Box>
    </Box>
  );
};

export default DisplayReferral;
