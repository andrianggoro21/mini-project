import {
  Flex,
  Box,
  Button,
  HStack,
  Link,
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
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "react-icons";
import { ReactChildren, ReactChild } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { BiChevronDownCircle } from "react-icons/bi";
import { RiSearchLine } from "react-icons/ri";
import React, { useState } from "react";
import ModalLogin from "../modalLogin";
import ModalRegister from "../modalSignup";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../../redux/reducer/authReducer";
import UserProfile from "../profilePicture/updateProfile";
import ProfileModal from "../../pages/profile";
import { AiOutlineClose } from "react-icons/ai";


const Links = ["Home", "Find Events", "Transaction"];

const NavLink = (props) => {
  // const { props.children }
  
  return (
    <Box
      as="a"
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

const NavbarUser = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useSelector((state) => state.AuthReducer);
  const [show, setShow] = useState(false);

  // const { user, isLogin } = useSelector((state) => state.AuthReducer);
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    setIsModalOpen(true);
  };

  const updateState = () => {
	  setShow(!show);
	};
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        position="fixed"
        top="0"
        px={4}
        background="#000"
        zIndex="1000"
        w="100%"
        height="76px"
        mb="20em"
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
          <Flex w="auto" gap="2em" display={{ base: "none", lg: "flex" }}>
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
          </Flex>
          <Box>
            <Flex alignItems="center">
              <ProfileModal />
            </Flex>
          </Box>
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
          mt="4.5em"
          zIndex="10"
          display={{ md: "none" }}
        >
          <VStack as={"nav"} spacing={4} color="white">
            <InputGroup color="white" rounded="1px" w="312px">
              <InputLeftElement
                children={<RiSearchLine />}
                pointerEvents="none"
                top="50%"
                transform="translateY(-50%)"
              />
              <Input type="text" placeholder="Find your events here" />
            </InputGroup>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
            <Divider background="white" orientation="horizontal" />
            <Flex alignItems={"center"} justifyContent="center" gap="1.5em">
              <Box>
                <ModalRegister
                  onClick={handleLoginClick}
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(true)}
                />
              </Box>
              <Box>
                <ModalLogin
                  onClick={handleLoginClick}
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(true)}
                />
              </Box>
            </Flex>
          </VStack>
        </Flex>
      ) : null}
    </>
  );
};

export default NavbarUser;
