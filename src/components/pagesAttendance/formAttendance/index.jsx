import { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Text,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
} from "@chakra-ui/react";

const AttendanceSchema = Yup.object().shape({
  fullname: Yup.string().required("Fullname is required"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  noTelp: Yup.number().required("Password is required"),
});

const FormAttendance = () => {
  // const [input, setInput] = useState();

  const inputAttendance = async (fullname, email, noTelp) => {
    try {
      await axios.post("http://localhost:7777/attendance", {
        fullname,
        email,
        noTelp,
      });
      alert("Input Success");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      noTelp: "",
    },

    validationSchema: AttendanceSchema,
    onSubmit: (values) => {
      inputAttendance(values.fullname, values.email, values.noTelp);
      // formik.values.posting = "";
    },
  });

  return (
    <Box>
      <Text color="#ffffff" fontSize="18px" fontWeight="700">
        Personal Details
      </Text>
      <Box
        padding="24px"
        borderRadius="10px"
        margin="20px 0 20px 0"
        bgColor="#1E1E1E"
      >
        <form onSubmit={formik.handleSubmit}>
          <Box display="flex" flexDirection="column" gap="32px">
            <Box>
              <FormControl
                isRequired
                isInvalid={formik.touched.fullname && formik.errors.fullname}
              >
                <FormLabel color="#bcbcbc">Full Name</FormLabel>
                <Input
                  placeholder="Full Name"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                  name="fullname"
                  value={formik.values.fullname}
                  onChange={formik.handleChange}
                />
                {formik.touched.fullname && formik.errors.fullname && (
                  <FormErrorMessage>{formik.errors.fullname}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Box>
              <FormControl
                isRequired
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel color="#bcbcbc">Email</FormLabel>
                <Input
                  placeholder="Email"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Box>
              <FormControl
                isRequired
                isInvalid={formik.touched.noTelp && formik.errors.noTelp}
              >
                <FormLabel color="#bcbcbc">Phone Number</FormLabel>
                <Input
                  placeholder="Phone Number"
                  color="#ffffff"
                  bgColor="#262626"
                  border="none"
                  _placeholder={{ color: "#585454" }}
                  focusBorderColor="#262626"
                  name="noTelp"
                  value={formik.values.noTelp}
                  onChange={formik.handleChange}
                />
                {formik.touched.noTelp && formik.errors.noTelp && (
                  <FormErrorMessage>{formik.errors.noTelp}</FormErrorMessage>
                )}
              </FormControl>
            </Box>
            <Button
              bgColor="#3C891C"
              color="#ffffff"
              fontSize="14px"
              type="submit"
            >
              submit
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default FormAttendance;
