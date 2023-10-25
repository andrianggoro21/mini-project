import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  useDisclosure,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import FormEvent from "../../components/formEvent";
import ListEvent from "../../components/listEvent";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import ListTicket from "../../components/listTicket";

const NavDashboard = () => {
  const [event, setEvent] = useState([]);
  const getEvent = async () => {
    try {
      const response = await axios.get("http://localhost:3000/event");
      setEvent(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const [ticket, setTicket] = useState([]);
  const getTicket = async () => {
    try {
      const response = await axios.get("http://localhost:3000/ticket");
      setTicket(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
    getTicket();
  }, []);
  return (
    <>
      <Tabs position="relative" variant="unstyled">
        <TabList>
          <Tab value="event">Event</Tab>
          <Tab value="ticket">Ticket</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="3px"
          bg="#7ED957"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <Flex justifyContent="flex-end">
              <Link to="/dashboard/event-form">
                <Button variant="solid" background="#3C891C" color="white">
                  <Text>Create Events</Text>
                </Button>
              </Link>
            </Flex>
            {event.length > 0 ? (
              <ListEvent />
            ) : (
              <Box w="full" h="564px" background="#1E1E1E" rounded=".5em">
                <VStack justifyContent="center" mt="3em">
                  <Image
                    w={{ base: "200px", lg: "289px" }}
                    src="./images/null-event.png"
                  />
                  <Text fontWeight="medium">You didn't have event</Text>
                </VStack>
              </Box>
            )}
          </TabPanel>
          <TabPanel>
            <Flex justifyContent="flex-end">
              <Link to="/dashboard/ticket-form">
                <Button variant="solid" background="#3C891C" color="white">
                  <Text>Create Ticket</Text>
                </Button>
              </Link>
            </Flex>
            {ticket.length > 0 ? (
              <ListTicket />
            ) : (
              <Box w="full" h="564px" background="#1E1E1E" rounded=".5em">
                <VStack justifyContent="center" mt="3em">
                  <Image
                    w={{ base: "200px", lg: "289px" }}
                    src="./images/null-event.png"
                  />
                  <Text fontWeight="medium">You didn't have event</Text>
                </VStack>
              </Box>
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

export default NavDashboard;
