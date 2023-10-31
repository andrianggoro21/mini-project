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
} from "@chakra-ui/react";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import Regis from "../../assets/images/Registration.png";
import Logo from "../../assets/images/logo.png";
import Event from "../../assets/images/EVENT.IN.png";

//resgiter schema yup
const RegisterSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(4, "Name must be 4 characters minimum")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/,
      `Password must be 6 characters minimum, at least contain one lowercase, one uppercase, one number, and one symbol`
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);

  const roleId = localStorage.getItem("roleId");

  // input data
  const register = async (fullname, email, password) => {
    console.log(email);
      console.log(fullname);
      console.log(password);
      console.log(roleId);
    try {
     const { data } =  await axios.post("http://localhost:8080/user/register", {
        fullname,
        email,
        password,
        roleId
      });
      alert(data?.message);
      setRegistrationSuccess(true);
      setRegistrationError(false);
      Navigate("/login");
    } catch (err) {
      console.error("Registration Error:", err);
      setRegistrationSuccess(false);
      setRegistrationError(true);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => {
      
      if (formik.isValid) {
        register(values.fullname, values.email, values.password);
      }
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
              <FormControl isInvalid={formik.errors.fullname}>
                <FormLabel textColor="#696666">Name:</FormLabel>
                <Input
                  bgColor="#262626"
                  id="fullname"
                  placeholder="Enter your name"
                  type="text"
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                  border="none"
                  textColor="whatsapp.400"
                />
                <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.email} mt={4}>
                <FormLabel textColor="#696666">Email:</FormLabel>
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
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.password} mt={4}>
                <FormLabel textColor="#696666">Password:</FormLabel>
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
                <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.errors.confirmPassword} mt={4}>
                <FormLabel textColor="#696666">Confirm Password:</FormLabel>
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
                <FormErrorMessage>
                  {formik.errors.confirmPassword}
                </FormErrorMessage>
              </FormControl>

              <Button
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
          {registrationSuccess && (
            <Text mt={4} textColor="green.400">
              Registration successful!
            </Text>
          )}
          {registrationError && (
            <Text mt={4} textColor="red.400">
              Registration failed. Please check your data.
            </Text>
          )}
          <Box marginTop="20px" display="flex" gap=".4em">
            <Text textColor="white">You already have an account? </Text>
            <Link to="/login">
            <Text color="#7ED957">Login here</Text>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FormRegister;
