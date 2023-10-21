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
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { cards } from "../../database/cards";

const CardEvent = () => {
  return (
    <>
      <Box w="full" display="grid" gridTemplateColumns={{base:"repeat(2, 1fr)", lg:"repeat(4, 1fr)"}} gap="1em">
        {cards.map((item, index) => (
          <Stack
            maxW="sm"
            rounded="lg"
            background="#49494926"
            color="white"
            key={index}
          >
            <Box w="full"
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
        ))}
      </Box>
    </>
  );
};

export default CardEvent;
