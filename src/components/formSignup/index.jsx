import { useState } from "react";
import {
  Text,
  Box,
  Heading,
  Button,
  Stack,
  Input,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Image,
  FormErrorMessage,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import * as Yup from "yup";
import { FaEye, FaEyeSlash, FaUserSecret, FaUser } from "react-icons/fa";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import Regis from "../../assets/images/Registration.png";
import Logo from "../../assets/images/logo.png";
import Event from "../../assets/images/EVENT.IN.png";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, "Name must be 4 characters minimum")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()

    .matches(
      "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$",
      `Password must be 6 characters minimum, at least contain one lowercase,
           one uppercase, one number, and one symbol`
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const BoxRegister = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);
  const [isUsers, setIsUsers] = useState(true);
  const onClose = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  const handleRegister = (role) => {
    if (role === "admin") {
      setIsAdmin(true);
      setIsUsers(false);
    } else if (role === "users") {
      setIsAdmin(false);
      setIsUsers(true);
    }

    openModal();
  };

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const register = async (name, email, password) => {
    try {
      await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      alert("Register Success");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },

    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      register(values.name, values.email, values.password);
      navigate("/login");
    },
  });

  return (
    <Box
      bgImg={Regis}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
      gap={{ base: "0.5em", lg: "20em" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Box
        gap="1em"
        w="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image w="7em" src={Logo} />
        <Image display={{ base: "none", md: "block" }} src={Event} />
      </Box>
      <Box
        bg="transparent"
        p={8}
        borderRadius="md"
        boxShadow="md"
        w="auto"
        maxW="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        // flexDirection='column'

        // width="534px"
        // height="773px"
        // left="169px"
        // top="121px"
        // display='flex'
        // justifyContent='center'
        // flexDirection='column'
      >
        <Box
          className="form"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          w="400px"
        >
          <Stack w="full">
            <Heading
              display="flex"
              textColor="#7ED957"
              alignItems="center"
              justifyContent="center"
              mb={4}
              size="3xl"
              fontWeight="bold"
            >
              Sign up
            </Heading>
            <form onSubmit={formik.handleSubmit}>
              <FormControl>
                <FormLabel textColor="#696666">Email :</FormLabel>
                <Input
                  bgColor="#262626"
                  id="email"
                  placeholder="Enter your email"
                  type="text"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  border="none"
                  textColor="whatsapp.400"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel textColor="#696666">Password :</FormLabel>
                <InputGroup>
                  <Input
                    bgColor="#262626"
                    id="password"
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    border="none"
                    textColor="whatsapp.400"
                  />

                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel textColor="#696666">Confirm Password :</FormLabel>
                <InputGroup>
                  <Input
                    bgColor="#262626"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    border="none"
                    textColor="whatsapp.400"
                  />

                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                onClick={() => handleRegister("Sign up")}
                type="submit"
                colorScheme="#7ED957"
                bg="#7ED957"
                mt={4}
                size="lg"
                w="100%"
              >
                Sign up
              </Button>
            </form>
          </Stack>
          <Box marginTop="20px" display="flex" gap=".4em">
            <Text textColor="white">You already have an account? </Text>
            <Link to="/login">
              <Text color="#7ED957">Login here</Text>{" "}
            </Link>
          </Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent bgColor="#060E03">
              <ModalHeader fontSize="md" textColor="white" textAlign="center">
                You want to Register as ?
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody colorScheme="white" textAlign="center">
                <Box display="flex" flexDirection="row" justifyContent="center">
                  <Box w="40em" m={2}>
                    <Button h="5em" background="#374431" variant="solid">
                      <FaUserSecret size="50px" />
                    </Button>
                    <Box m={2} color="white">
                      {isAdmin && <p>Anda adalah E.O</p>}
                    </Box>
                  </Box>
                  <Box w="40em" m={2}>
                    <Button h="5em" background="#374431">
                      <FaUser size={50} />
                    </Button>
                    <Box m={2} color="white">
                      {isUsers && <p>Anda adalah User.</p>}
                    </Box>
                  </Box>
                </Box>
              </ModalBody>
              {/* <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter> */}
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxRegister;
