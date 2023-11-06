import {
  Box,
  Text,
  Card,
  CardBody,
  Image,
  Button,
  Input,
} from "@chakra-ui/react";
import banner from "../../../assets/images/banner1.png";
import Cal from "../../../assets/images/calendar.png";
import Loc from "../../../assets/images/location.png";
import Time from "../../../assets/images/time.png";
import Plus from "../../../assets/images/plus.png";
import Minus from "../../../assets/images/minus.png";
import Upload from "../../../assets/images/upload.png";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import Bca from "../../../assets/images/bca.png";
import axios from "axios";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";

const WidgetTransaction = ({ event, attendance }) => {
  const [fieldImage, setFieldImage] = useState(null);
  const [statusId, setStatusId] = useState(2);
  const [image, setImage] = useState(null);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/*', // Accept only image files
    onDrop: acceptedFiles => {
      // Update the state with the first accepted image
      if (acceptedFiles.length > 0) {
        const imageURL = URL.createObjectURL(acceptedFiles[0]);
        setImage(imageURL);
      }
    }
  });

  const attendanceId = localStorage.getItem("attendance");

  const formTransaction = async (attendanceId, transactionStatusId) => {
    try {
      let formData = new FormData();
      formData.append("attendanceId", attendanceId);
      formData.append("transactionStatusId", transactionStatusId);
      // formData.append("image", image);
      acceptedFiles.forEach(file => {
        formData.append("image", file);
      });
      const res = await axios.post(
        "http://localhost:8080/transaction",
        formData
      );
      alert("Create Event Success");
      console.log(res);
    } catch (err) {
      // console.log(err);
      alert("Error");
    }
  };


  const formik = useFormik({
    initialValues: {
      image: null,
    },

    // validationSchema: EventSchema,
    onSubmit: (values) => {
      formTransaction(attendanceId, statusId);
    },
  });
  return (
    <Box>
      <Text color="#ffffff" fontSize="18px" fontWeight="700">
        Transaction Details
      </Text>
      <Card w="full" margin="20px 0 20px 0" bgColor="#1E1E1E">
        <CardBody>
          <Box display="flex" gap="16px">
            <Box display={{ base: "none", md: "block" }}>
              <Image
                w="300px"
                h="120px"
                borderRadius="10px"
                src={`${process.env.REACT_APP_IMAGE_URL}/events/${event?.image}`}
              />
            </Box>
            <Box display="flex" flexDirection="column" gap="10px">
              <Text color="#ffffff" fontSize="16px" fontWeight="700">
                {event?.eventName}
              </Text>
              <Box display="flex" flexDirection="column" gap="6px">
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src={Cal} />
                  <Text color="#bcbcbc" fontSize="14px">
                    {event?.startDate}
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src={Time} />
                  <Text color="#bcbcbc" fontSize="14px">
                    {event?.time}
                  </Text>
                </Box>
                <Box display="flex" alignItems="center" gap="10px">
                  <Image src={Loc} />
                  <Text color="#bcbcbc" fontSize="14px">
                    {event?.eventlocation?.locationName}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box bgColor="#353535" w="full" h="2px" margin="32px 0 14px 0" />
          <Box color="#ffffff">
            <Text>Personal Data</Text>
          </Box>
          <Box>
            <TableContainer>
              <Table variant="unstyled" color="#ffffff" fontSize="14px">
                <Tbody display="flex" gap="20px">
                  <Td display="flex" flexDirection="column" gap="10px">
                    <Tr>Full Name</Tr>
                    <Tr>Email</Tr>
                    <Tr>Phone Number</Tr>
                  </Td>
                  <Td display="flex" flexDirection="column" gap="10px">
                    <Tr>: {attendance?.fullName}</Tr>
                    <Tr>: {attendance?.email}</Tr>
                    <Tr>: {attendance?.phoneNumber}</Tr>
                  </Td>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
          <Box margin="20px 0 20px 0">
            <Text color="#ffffff" marginBottom="15px">
              Payment Method VA
            </Text>
            <Box color="#ffffff" display="flex" gap="24px">
              <Image w="80px" src={Bca} />
              <Text>1234081234567890</Text>
            </Box>
          </Box>
          <Box margin="20px 0 20px 0">
            <Text color="#ffffff" marginBottom="10px">
              Upload File Payment
            </Text>
            <form onSubmit={formik.handleSubmit}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="10px"
                border="1px dashed #ffffff"
                borderRadius="10px"
                padding="20px"
              >
                <FormControl>
                  <Box className="container">
                    <Box {...getRootProps()} className="dropzone" color="#ffffff" display='flex' alignItems='center' justifyContent='center'>
                      <Input {...getInputProps()} />
                      <Image hidden={image? true : false} src={Upload} />
                    </Box>
                    {image && (
                      <Image
                        src={image}
                        alt="Uploaded Image"
                        style={{ maxWidth: "100%" }}
                      />
                    )}
                  </Box>
                </FormControl>
                <Button size="md" type="submit">
                  Upload
                </Button>
              </Box>
              <Box
                margin="20px 0 0 0"
                w="full"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Button size="md" colorScheme="red">
                  Cancel
                </Button>
              </Box>
            </form>
          </Box>

          <Box bgColor="#353535" w="full" h="2px" margin="14px 0 14px 0" />
        </CardBody>
      </Card>
    </Box>
  );
};
export default WidgetTransaction;
