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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { cards } from "../../database/cards";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { add } from "../../redux/reducers/cardEvents";
import { Navigate } from "react-router-dom";


const CardEvent = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  const getEvent = async () => {
    try {
      const response = await axios.get("http://localhost:8888/event");
      setData(response.data);
      // console.log(response.data);
      // console.log(response.data.include);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);
  return (
    <>
      <Box
        w="full"
        display="grid"
        gridTemplateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap="1em"
      >
        {data.map((item, index) => (
          <Link to="/event" onClick={() => localStorage.setItem("cardId", item.id)}>
            <Stack
              maxW="sm"
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
              >
                {/* <Image
                position="relative"
                src={item.path}
                alt="Green double couch with wooden legs"
              /> */}
              </Box>
              <Flex flexDirection="column" p="1em" gap="1em">
                <Stack spacing="3">
                  <Heading size="sm">{item.title}</Heading>
                  <HStack>
                    <Icon as={GrLocation} />
                    <Text>{item.location}</Text>
                  </HStack>
                  <Text color="" fontSize="xl">
                    {item.price}
                  </Text>
                </Stack>
                <Divider />
                <Flex gap="0.5em">
                  <Avatar
                    size="xs"
                    name="Dan Abrahmov"
                    src="https://bit.ly/dan-abramov"
                  />
                  <Text>{item.eo_user}</Text>
                </Flex>
              </Flex>
            </Stack>
          </Link>
        ))}
      </Box>
    </>
  );
};

export default CardEvent;
