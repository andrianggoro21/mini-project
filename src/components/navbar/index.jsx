import {
  Flex,
  Box,
  Button,
  HStack,
  Avatar,
  Menu,
  MenuButton,
  Text,
  Image,
  useDisclosure,
  Stack,
  useColorModeValue,
  IconButton,
  InputGroup,
  InputLeftElement,
  Input,
  Divider,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "react-icons";
import { ReactChildren, ReactChild, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { RiSearchLine } from "react-icons/ri";
import ModalLogin from "../modalLogin";
import ModalRegister from "../modalSignup";
import { Link, Navigate } from "react-router-dom";

const Links = ["Home", "Find Events", "Transaction"];

const NavLink = (props) => {
  return (
    <Box
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={"#"}
    >
      {props.children}
    </Box>
  );
};

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [height, setHeight] = useState("");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setHeight("60px") : setHeight("72px");
  };

  const handleRegisterClick = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
  });
  return (
    <>
      <Box
        transition="all 0.3s ease-out"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        position="sticky"
        top="0"
        px={8}
        background="#000"
        zIndex="99"
        w="100%"
        height={height}
        overflow="hidden"
        backdropFilter={8}
      >
        <Flex
          w="full"
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          color="white"
        >
          <HStack spacing={5} alignItems={"center"}>
            <Image w="40px" src="./images/logo.png"></Image>

            <HStack
              as={"nav"}
              spacing={3}
              display={{ base: "none", lg: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <HStack w="auto" gap="2em" display={{ base: "none", lg: "flex" }}>
            {/* <Divider background="white" orientation="vertical" /> */}

            <InputGroup
              color="white"
              rounded="1px"
              w="241px"
              // display="flex"
              // flexDirection="row"
            >
              <InputLeftElement
                children={<RiSearchLine />}
                pointerEvents="none"
                top="50%"
                transform="translateY(-50%)"
              />
              <Input type="text" placeholder="Find your events here" />
            </InputGroup>
            <Box>
              <ModalRegister
                onClick={handleRegisterClick}
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(true)}
              />
            </Box>
            <Box>
              <Link to="/login">
              <Button
                size={"sm"}
                fontWeight="bold"
                h="40px"
                w="120px"
                variant="solid"
                bgColor="#3C891C"
              >
                Log in
              </Button>
              </Link>
            </Box>
          </HStack>
          <IconButton
            variant="unstyled"
            size={"md"}
            icon={isOpen ? <CgClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Box>
      {isOpen ? (
        <Flex
          background="#0D0D0D"
          p={8}
          w="full"
          h="full"
          // mt="4.5em"
          // pb="10em"
          zIndex="10"
          display={{ md: "none" }}
        >
          <VStack as={"nav"} spacing={4} color="white">
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Divider background="white" orientation="horizontal" />
            <Flex alignItems={"center"} justifyContent="center" gap="1.5em">
              <Box>
                <ModalRegister
                  onClick={handleRegisterClick}
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(true)}
                />
              </Box>
              <Box>
              <Link to="/login">
              <Button
                size={"sm"}
                fontWeight="bold"
                h="40px"
                w="120px"
                variant="solid"
                bgColor="#3C891C"
              >
                Log in
              </Button>
              </Link>
              </Box>
            </Flex>
          </VStack>
        </Flex>
      ) : null}
    </>
  );
};

export default Navbar;
