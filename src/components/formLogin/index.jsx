import { useState, useEffect } from "react";
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
  Image
} from "@chakra-ui/react";
import * as Yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useFormik } from "formik";
import Regis from "../../assets/images/Registration.png";
import Logo from '../../assets/images/logo.png';
import Event from '../../assets/images/EVENT.IN.png'
import { loginSuccess, setUser } from "../../redux/reducer/authReducer";
import { useDispatch } from "react-redux";
import { useToast } from '@chakra-ui/react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { async } from "q";

// Login Schema Yup
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
  .required("Password is required"),
});

const BoxLogin = () => {
  // const [users, setUsers] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const toast = useToast()

  const login = async (email, password) => {
      try {
        const res = await axios.post("http://localhost:8080/user/login", {
          email,
          password,
        });
        // console.log(res);
        localStorage.setItem("token", res?.data?.data?.token);
        dispatch(setUser(res?.data?.data?.user));
        dispatch(loginSuccess());
        alert(res?.data?.message);
        Navigate("/")
      } catch (err) {
        console.log(err);
        alert(err?.response?.data);
        // throw err
      }
  };

  // // ambil data
  // const fatchDataLogin = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8080/users");
  //     setUsers(response.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fatchDataLogin();
  // }, []);

  // const allEmail = users.map((item) => item.email);

  // // pengecekan data login dengan data json server
  // const check = (email, password) => {
  //   if (allEmail.includes(email)) {
  //     const newEmail = users[allEmail.indexOf(email)];
  //     if (newEmail.password.includes(password)) {
  //       localStorage.setItem("account", allEmail.indexOf(email));
  //       alert("succes");
  //       Navigate("/");
  //     } else {
  //       alert("Password salah");
  //     }
  //   } else {
  //     alert("Email Belum Terdaftar");
  //     Navigate("/register");
  //   }
  // };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      dispatch(login(values.email, values.password));
      
      // check(values.email, values.password);
      // email(values.email);
    },
  });

  const email = (email) => {
    localStorage.setItem("token", email);
  };

  return (
    <Box
      bgImg={Regis}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minH="100vh"
      gap={{base:"0.5em", lg:"20em"}}
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection={{base:"column", md:"row"}}
    >
      <Box gap="1em" w="auto" display='flex' alignItems='center' justifyContent='center'>
        <Image w="7em" src={Logo} />
        <Image display={{base:"none", md:"block" }} src={Event} />
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
          w="900px"
          maxW="400px"

        >
          <Stack w="full">
            <Heading
              display="flex"
              textColor="#7ED957"
              alignItems="center"
              justifyContent="center"
              mb={4}
              size='3xl'
              fontWeight="bold"
            >
              Login
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
              <Button
                type="submit"
                colorScheme="#7ED957"
                bg="#7ED957"
                mt={4}
                size="lg"
                w="100%"
                // onClick={() =>
                //   toast({
                //     title: 'Account created.',
                //     description: "We've created your account for you.",
                //     status: 'success',
                //     duration: 5000,
                //     isClosable: false,
                //     position: 'top',
                //   })
                // }
              >
                Log in
              </Button>
              <ToastContainer />
            </form>
          </Stack>
          <Box marginTop="20px" display="flex" gap=".4em">
            <Text textColor="white">Don't have an account yet? </Text>
            <Link to="/register">
              <Text color="#7ED957">Sign Up..</Text>{" "}
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BoxLogin;
