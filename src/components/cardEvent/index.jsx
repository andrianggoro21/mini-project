import {
  Button,
  CardBody,
  Box,
  Image,
  Stack,
  Divider,
  Link,
  Avatar,
  Heading,
  Text,
  AvatarGroup,
  Flex,
  Icon,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { cards } from "../../database/cards";
import { useEffect, useState } from "react";
import axios from "axios";

const CardEvent = () => {
  const [event, setEvent] = useState([]);
  const [element, setElement] = useState(4);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  const sliceCard = event.slice(0, element);

  const fetchEvent = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/list-event", {
        // headers: { "Cache-Control": "no-cache" },
      });
      setEvent(response.data.data);
      console.log(process.env.REACT_APP_IMAGE_URL)
      console.log(event);

      // console.log(response.data.data[4].image);
      // console.log(response.data.data[0].tickets[0].price);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const loadMoreData = () => {
    const nextVisibleData = element + 4;
    setElement(nextVisibleData);

    if (nextVisibleData >= event.length) {
      setLoadMoreVisible(false); // Hide the "Load More" button if all data is visible
    }
  };

  return (
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
        {sliceCard?.map((item, index) => (
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
                <Text color="" fontSize="xl">
                  {item.tickets[index]?.price}
                  {/* Rp. 100.000 */}
                </Text>
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
      {event.length > 0 && loadMoreVisible && (
        <Button
          variant={"unstyled"}
          border="1px solid #3C891C"
          size={"sm"}
          w={{ base: "220px", md: "330px" }}
          h="60px"
          mr={4}
          fontSize="16px"
          color="#7ED957"
          onClick={loadMoreData}
        >
          Explore more events
        </Button>
      )}
    </VStack>
  );
};

export default CardEvent;
