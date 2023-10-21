import {
  Box,
  Flex,
  HStack,
  Stack,
  Image,
  Text,
  InputGroup,
  Input,
  Button,
  IconButton,
  Icon,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <VStack
      
      minH="424px"
      w="full"
      p="2em"
      bottom="0"
      background="#000"
      justifyContent="space-between"

    >
        <Flex alignItems="center" justifyContent="space-between" w="full" gap="5em" flexDirection={{base: "column", lg: "row"}}>
          <Stack maxW="20em" w="auto" alignItems={{base:"center", lg:"flex-start"}}>
            <Flex marginBottom="1.5em" flexDirection="row" alignItems="center" gap="5px">
              <Image w={{base:"32px", md:"64px"}} src="./images/logo.png" />
              <Text fontWeight="medium" fontSize="18px" color="#7ED957">
                EVENT.IN
              </Text>
            </Flex>
            <Text color="#838383" fontSize="20px" textAlign={{base: "center", lg:"justify"}}>
              Easy way and best experience in attend an event
            </Text>
          </Stack>
          <VStack gap="1.3em" w="15em" textColor="grey" fontSize="20px">
            <Text textColor="white">Home</Text>
            <Text>Find Events</Text>
            <Text>Transaction</Text>
          </VStack>
          <Stack
            justifyContent="space-between"
            fontSize="20px"
            marginBottom="0.7em"
          >
            <Flex flexDirection="column" maxW="25em" gap=".8em" alignItems={{base:"center", lg:"flex-start"}}>
              <Text color="white">Join our newsletter</Text>
              <Text color="#8A8282" maxWidth="20em" display={{base: "none", lg:"block"}}>
                We'll send you our update event and more information about
                event.
              </Text>
              <Text color="#8A8282" textAlign="center" maxWidth="17em" display={{base: "block", lg:"none"}}>
              Stay up to date with the latest news, announcements and articles.
              </Text>
              <Flex gap="0.7em" alignItems="center">
                <Input
                  type="text"
                  variant="solid"
                  // minW="20px"
                  // minW="184px"
                  maxW="428px"
                  rounded=".7em"
                  placeholder="Type your email here"
                />
                <Button
                  background="#3C891C"
                  color="white"
                  rounded=".7em"
                  w="120px"
                  maxW="156px"
                >
                  Subscribe
                </Button>
              </Flex>
            </Flex>
          </Stack>
        </Flex>

        <Flex alignItems={{base:"center", lg:"flex-end"}} justifyContent="space-between" w="full" gap="2.5em" flexDirection={{base:"column-reverse", lg:"row"}}>
          <Flex w={{base:"full", lg:"45em"}} h="full">
          <Flex alignItems="center" justifyContent="center">
            <Icon as={MdCopyright} color="white" />
            <Text color="white" fontSize="14px">
              2023 Event.in. All rights reserved.
            </Text>
          </Flex>
          </Flex>
          <Divider display={{base:"block", lg:"none"}}/>
          <Stack gap=".8em" w={{base:"auto", lg:"45em"}} alignItems="center">
            <Text color="white">Social Media</Text>
            <Flex gap="0.7em">
              <IconButton
                background="#3C891C"
                color="white"
                rounded="0.7em"
                icon={<FaInstagram />}
              />
              <IconButton
                background="#3C891C"
                color="white"
                rounded="0.7em"
                icon={<FiTwitter />}
              />
              <IconButton
                background="#3C891C"
                color="white"
                rounded="0.7em"
                icon={<FaTiktok />}
              />
              <IconButton
                background="#3C891C"
                color="white"
                rounded="0.7em"
                icon={<AiOutlineMail />}
              />
            </Flex>
          </Stack>
        </Flex>
    </VStack>
  );
};

export default Footer;
