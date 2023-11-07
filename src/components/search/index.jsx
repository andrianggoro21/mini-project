import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Avatar, Box, Divider, Flex, HStack, Heading, Icon, Image, Stack, Text, VStack } from "@chakra-ui/react";
import FilterEvent from "../filter";
import { GrLocation } from "react-icons/gr";

const SearchResult = (props) => {
  const [findEvent, setFindEvent] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const eventName = searchParams.get("eventName");
  const fetchFindEvent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/filter`, {
        params: {
          eventName: eventName,
          location: props.filterByLocation,
        }
      });
      setFindEvent(response.data.data);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchFindEvent();
  }, [eventName, props.filterByLocation]);
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
        Find Events
      </Heading>
            <VStack>
            <Box
              w="full"
              display="grid"
              gridTemplateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
              gap="1em"
            >
              {findEvent?.map((item, index) => (
                <Stack
                  // maxW="sm"
                  rounded="lg"
                  background="#49494926"
                  color="white"
                  overflow="hidden"
                  key={index}
                >
                  <Box
                    w="full"
                    h="10em"
                    position="relative"
                    overflow="hidden"
                    background-size="contain"
                    background-repeat="no-repeat"
                    // backgroundImage="url(`${process.env.REACT_APP_IMAGE_URL})"
                    // backgroundImage="url(./images/banner.jpg)"
                  >
                    <Image
                    // height="120px"
                    width="full"
                    src={`${process.env.REACT_APP_IMAGE_URL}/events/${item?.image}`}
                    alt="event pict"
                  />
                  </Box>
                  <Flex flexDirection="column" p="1em" gap="1em">
                    <Stack spacing="3">
                      <Heading size="sm">{item.eventName}</Heading>
                      <HStack>
                        <Icon as={GrLocation} />
                        <Text>{item.eventlocation?.locationName}</Text>
                      </HStack>
                      <Stack>
                      <Text color="" fontSize="xl">
                        {item.tickets?.[0]?.ticketName}
                        {/* {item.tickets?.[0]?.price>item.tickets?.[1]?.price?item.tickets?.[0]?.price:item.tickets?.[1]?.price} */}
                        {/* Rp. 100.000 */}
                      </Text>
                      <Text>
                        {item.tickets?.[0]?.price}
                      </Text>
                      </Stack>
                    </Stack>
                    <Divider />
                    <Flex gap="0.5em">
                      <Avatar
                        size="xs"
                        name="Dan Abrahmov"
                        src="https://bit.ly/dan-abramov"
                      />
                      <Text>
                        Bambang
                        {/* {item.eo_user} */}
                      </Text>
                    </Flex>
                  </Flex>
                </Stack>
              ))}
            </Box>
          
          </VStack>
    </Stack>
  );
};

export default SearchResult;
