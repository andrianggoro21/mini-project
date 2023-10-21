import { Box, Text } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box>
      <Text
        fontSize="18px"
        fontWeight="700"
        color="#ffffff"
        marginBottom="16px"
      >
        Description
      </Text>
      <Text
        fontSize="14px"
        color="#ffffff"
        fontWeight="400"
        textAlign="justify"
      >
        Take advantage of the Ambyar Concert Yogyakarta 2023 featuring today's
        popular music and an exceptional performance by Denny Caknan, Guyon
        Waton, Gilga Sahid, NDX A.K.A, Happy Asmara, Yenni Inka, Aftershine and
        more. It's on October 1 - 4, 2023, at Prambanan Temple, Yogyakarta,
        Indonesia. Make sure to secure your tickets before they sell out. This
        is an event you will want to attend!
      </Text>
    </Box>
  );
};
export default Description;
