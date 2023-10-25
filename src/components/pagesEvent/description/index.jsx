import { Box, Text } from "@chakra-ui/react";

const Description = ({description}) => {
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
        {description}
      </Text>
    </Box>
  );
};
export default Description;
