import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import FormTicket from "../../components/formTicket";

const CreateTicket = () => {
  return (
    <Stack
      position="relative"
      w="full"
      h="auto"
      p="2em"
      background="#121212"
      color="white"
      gap="1em"
    >
      <Heading as="h4" size="md">
        Manage Events
      </Heading>

      <HStack mb=".8em" fontWeight="medium" justifyContent="space-between">
        <Flex gap="1.3em">
          <Link
            borderBottom="2px solid #121212"
            _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
          >
            <Text>Events</Text>
          </Link>
          <Link
            borderBottom="2px solid #121212"
            _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
          >
            <Text>Ticket</Text>
          </Link>
        </Flex>
        <Button variant="solid" background="#3C891C" color="white">
          <Text>Create Events</Text>
        </Button>
      </HStack>
      <FormTicket />
    </Stack>
  );
};

export default CreateTicket;
