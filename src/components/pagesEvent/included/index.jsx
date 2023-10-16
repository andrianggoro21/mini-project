import {
  Box,
  Text,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const Included = () => {
  return (
    <Box marginBottom='100px'>  
      <Text
        color="#ffffff"
        fontSize='18px'
        fontWeight="700"
        margin="18px 0 18px 0"
      >
        Includes
      </Text>
      <UnorderedList color="#ffffff" spacing={3} letterSpacing=".6px">
        <ListItem>Entrance Ticket</ListItem>
        <ListItem>Mineral Water</ListItem>
        <ListItem>Wristband</ListItem>
      </UnorderedList>
    </Box>
  );
};
export default Included;
