import {
  Button,
  CardBody,
  Box,
  Image,
  Stack,
  Divider,
  Avatar,
  Heading,
  Text,
  AvatarGroup,
  Flex,
  Icon,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { cards } from "../../database/cards";
import { useEffect, useState } from "react";
import axios from "axios";

const CardEvent = () => {
  const [event, setEvent] = useState([]);
  const [element, setElement] = useState(4);
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  const sliceCard = event.slice(0, element);

  const getEvent = async () => {
    try {
      const response = await axios.get("http://localhost:3000/event", {
        headers: { "Cache-Control": "no-cache" },
      });
      setEvent(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
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
        {sliceCard.map((item, index) => (
          <Stack
            // maxW="sm"
            rounded="lg"
            background="#49494926"
            color="white"
            key={index}
          >
            <Box
              w="full"
              h="10em"
              position="relative"
              overflow="hidden"
              background-size="contain"
              background-repeat="no-repeat"
              backgroundImage="url(./images/banner.jpg)"
            ></Box>
            <Flex flexDirection="column" p="1em" gap="1em">
              <Stack spacing="3">
                <Heading size="sm">{item.event_name}</Heading>
                <HStack>
                  <Icon as={GrLocation} />
                  <Text>{item.location_event}</Text>
                </HStack>
                <Text color="" fontSize="xl">
                  {/* {item.price} */}
                  Rp. 100.000
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
            </Stack>
          </Link>
        ))}
      </Box>
      {loadMoreVisible && (
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
