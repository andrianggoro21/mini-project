import { Box, Button, Flex, HStack, Heading, Image, Link, Stack, Text, VStack, useDisclosure } from "@chakra-ui/react";
import FormEvent from "../../components/formEvent";
import ListEvent from "../../components/listEvent";

const CreateEvent = () => {
  return (
    <Stack position="relative" w="full" h="auto" mt="4em" p="2em" background="#121212" color="white" gap="1em">
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
        <Button
          variant="solid"
          background="#3C891C"
          color="white"
        >
          <Text>Create Events</Text>
        </Button>
      </HStack>
        <FormEvent/>
      <Box w="full" h="564px" background="#1E1E1E" rounded=".5em">
        <VStack justifyContent="center" mt="3em">
            <Image w={{base:"200px", lg: "289px"}} src="./images/null-event.png" />
            <Text fontWeight="medium">You didn't have event</Text>
        </VStack>
      </Box>
      <ListEvent/>
    </Stack>
  );
};

export default CreateEvent;
