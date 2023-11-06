import {
	Box,
	Divider,
	IconButton,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	VStack,
	useDisclosure,
	MenuItem,
	Flex,
	Button,
  } from "@chakra-ui/react";
  import { BsPersonCircle } from "react-icons/bs";
  import { Link, useNavigate } from "react-router-dom";
  import { useState } from "react";
  import { AiOutlineClose } from "react-icons/ai";
  import { useSelector, useDispatch } from "react-redux";
  import { logoutSuccess } from "../../redux/reducer/authReducer";	
  import UserProfile from "../../components/profilePicture/updateProfile";
  import {BiLogOut} from "react-icons/bi"
  
  const ProfileModal = () => {
	const { user } = useSelector((state) => state.AuthReducer);
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const navigate = useNavigate();
	const updateState = () => {
	  setShow(!show);
	};
	return (
	  <Box>
		<Box position={"relative"}>
		  <IconButton
			size={"3em"}
			bgColor={"transparent"}
			_hover={"none"}
			icon={
			  <BsPersonCircle
				size={"3em"}
				color={"white"}
				onClick={updateState}
			  />
			}
			_active={"none"}
		  />
		  <Box
			bgColor={"rgba(0, 0, 0, 0.5)"}
			onClick={updateState}
			opacity={"1"}
			w={"100vw"}
			h={"100vh"}
			position={"fixed"}
			top={"0"}
			left={"0"}
			p={"1em 5em "}
			display={show ? "block" : "none"}
			zIndex={"10"}
		  >
			<Box
			  w={"20em"}
			  p={"1em 1em"}
			  top={"1.5em"}
			  mr={"3em"}
			  right={"0"}
			  position={"absolute"}
			  bgColor={"#060E03"}
			  borderRadius={"1em"}
			  color={"black"}
			  zIndex={"3"}
			>
			  <VStack>
				<IconButton
				as={UserProfile}
				  size={"3em"}
				  bgColor={"transparent"}
				  _hover={"none"}
				  icon={<AiOutlineClose size={"1em"} color={"black"} />}
				  _active={"none"}
				  onClick={updateState}
				  alignSelf={"flex-end"}
				/>
  
				{/* <IconButton
				  size={"3em"}
				  bgColor={"transparent"}
				  _hover={"none"}
				  icon={<BsPersonCircle size={"3em"} color={"black"} />}
				  _active={"none"}
				/> */}
				<VStack spacing={"0"}>
				  <Text textColor={"white"} fontWeight="bold">Halo saya {user.fullname} 👋</Text>
				  <Text textColor={"white"} fontWeight="bold" fontSize={".75em"}>{user.email}</Text>
				</VStack>
				<Divider borderColor={"#192655"} borderWidth={"2px"} />
				<VStack>
				  <Link to={"/dashboard"}>
					<Text textColor={"whatsapp.400"} variant={"link"}>Dashboard</Text>
				  </Link>
				  <Button color="red.400" variant={"link"} alignItems={"center"} onClick={() => dispatch(logoutSuccess())}>
					<Text fontWeight='bold' mr={2}>Log Out</Text>
					<BiLogOut ml={2} />
				  </Button>
				</VStack>
			  </VStack>
			</Box>
		  </Box>
		</Box>
	  </Box>
	);
  };
  
  export default ProfileModal;