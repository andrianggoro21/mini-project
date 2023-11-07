import React from "react";
import { PiWarningCircleFill } from "react-icons/pi";
import { Box, Text } from "@chakra-ui/react";

const Unauthorized = () => {
  return (
    <Box>
      <Box>
        <Text fontsize="2xl" mb="4">
          <PiWarningCircleFill width={8} height={8} color="yello.500" mx='auto' />
          Unauthorized Access
          <PiWarningCircleFill width={8} height={8} color="yello.500" mx='auto' />
        </Text>
        <Text mb='4'>
          You don't not have permission to access this page.
        </Text>
      </Box>
    </Box>
  );
};

export default Unauthorized;
