import { Box, Text, Button } from "@chakra-ui/react";

const BottomNav = () => {
  return (
    <Box display={{base: "block", lg: "none"}}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        bgColor="#1E1E1E"
        w="full"
        h="100px"
        position="fixed"
        bottom="0"
        padding="20px"
        borderTop="2px solid #3C891C"
      >
        <Box display="flex" flexDirection="column">
          <Box display="flex" alignItems="center" gap="10px">
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
          <Text fontSize="22px" fontWeight="600" color="#ffffff">
            IDR 200.000
          </Text>
        </Box>
        <Button bgColor="#3C891C" color="#ffffff">
          See Packages
        </Button>
      </Box>
    </Box>
  );
};
export default BottomNav;
