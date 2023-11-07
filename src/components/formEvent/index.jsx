import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Heading,
  Button,
  HStack,
  Flex,
  Link,
  Text,
  useDisclosure,
  Stack,
  VStack,
  Box,
  Image,
  Divider,
  FormControl,
  InputGroup,
  Input,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Select,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState, useRef } from "react";
import * as Yup from "yup";
import {useDropzone} from 'react-dropzone';
import Upload from "../../assets/images/upload.png";

const EventSchema = Yup.object().shape({
  eventName: Yup.string().required("Event name is required"),
  eventCategory: Yup.string().required("Category event is required"),
  eventLocation: Yup.string().required("Location is required"),
  eventTime: Yup.string().required("Duration is required"),
  eventStartDate: Yup.string().required("Start date is required"),
  eventLastDate: Yup.string().required("Last date required"),
  eventDescription: Yup.string().required("Description is required"),
  eventHighlight: Yup.string().required("Highlight is required"),
  eventInclude: Yup.string().required("Included is required"),
  // eventImage: Yup.string(),
});

const FormEvent = () => {
  const [image, setImage] = useState(null);
  const inputImage = useRef(null);

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
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  
  const fetchCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/list-category");
      setCategory(response.data.data);
      // console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const fetchLocation = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/list-location");
      setLocation(response.data.data);
      // console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchCategory();
    fetchLocation();
  }, []);

  const formEvent = async (
    eventName,
    categoryId,
    locationId,
    time,
    startDate,
    endDate,
    description,
    highlight,
    include,
  ) => {
    try {
      let formData = new FormData();
      formData.append("eventName", eventName);
      formData.append("categoryId", categoryId);
      formData.append("locationId", locationId);
      formData.append("time", time);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate);
      formData.append("description", description);
      formData.append("highlight", highlight);
      formData.append("include", include);
      // formData.append("image", fieldImage);
      acceptedFiles.forEach(file => {
        formData.append("image", file);
      });
      await axios.post("http://localhost:8080/event/add-event", 
      // await axios.post("http://localhost:8000/event", {
        // eventName,
        // categoryId,
        // locationId,
        // time,
        // startDate,
        // endDate,
        // description,
        // highlight,
        // include,
        formData
      );
      alert("Create Event Success");
      console.log(res);
    } catch (err) {
      // console.log(err);
      alert("Error");
    }
  };

  const handleReset = () => { 
    if (inputImage.current) { 
        inputImage.current.value = null;
    } 
  }; 

  const formik = useFormik({
    initialValues: {
      eventName: "",
      eventCategory: "",
      eventLocation: "",
      eventTime: "",
      eventStartDate: "",
      eventLastDate: "",
      eventDescription: "",
      eventHighlight: "",
      eventInclude: "",
      eventImage: null,
    },

    validationSchema: EventSchema,
    onSubmit: (values) => {
      formEvent(
        values.eventName,
        values.eventCategory,
        values.eventLocation,
        values.eventTime,
        values.eventStartDate,
        values.eventLastDate,
        values.eventDescription,
        values.eventHighlight,
        values.eventInclude,
      );
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex
          w="full"
          background="#1E1D1D"
          p="1em"
          rounded=".5em"
          gap={{ base: "1.2em", lg: "5em" }}
          flexDirection={{ base: "column", lg: "row" }}
          justifyContent="space-between"
        >
          <Stack spacing={5} w={{ base: "full", lg: "50%" }} h="full">
            
            <FormControl
              isInvalid={formik.touched.eventImage && formik.errors.eventImage}
            >
              <FormLabel>Upload Image</FormLabel>
              {/* <InputGroup>
                <Input
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Upload Image"
                  type="file"
                  name="image"
                  value={formik.values.eventImage}
                  onChange={(event) => {
                    setFieldImage(event.currentTarget.files[0]);}}
                  // onChange={formik.handleChange}
                ></Input>
              </InputGroup> */}
              <InputGroup>
              <Stack w="full" border="1px solid white" justifyContent="center" gap={0} rounded=".5em" overflow="hidden">
                    <VStack h="13em"  hidden={image? true : false}  {...getRootProps()} className="dropzone" color="#ffffff" alignItems='center' justifyContent='center'>
                      <Input {...getInputProps()} 
                          ref={inputImage}/>
                      <Image src={Upload} />
                      <Text>Drag 'n' drop some files here, or click to select files</Text>
                    </VStack>
                    {image && (
                      <Stack className="dropzone">
                        <Image
                        
                          ref={inputImage}
                          src={image}
                          alt="Uploaded Image"
                          style={{ maxWidth: "100%" }}
                          />
                          <Button overflow="hidden" onClick={handleReset}>
                    {/* <Input display="none" {...getInputProps()}  */}
                          {/* ref={inputImage}/> */}
                          <Text>Reset</Text>
                          </Button>
                          </Stack>
                    )}
              </Stack>
              </InputGroup>
              {formik.touched.eventImage && formik.errors.eventImage && (
                <FormErrorMessage>{formik.errors.eventImage}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.eventName && formik.errors.eventName}
            >
              <FormLabel>Event Name</FormLabel>
              <InputGroup>
                <Input
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Type event's here name here"
                  type="text"
                  name="eventName"
                  value={formik.values.eventName}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.eventName && formik.errors.eventName && (
                <FormErrorMessage>{formik.errors.eventName}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
            // isInvalid={
            //   formik.touched.eventCategory && formik.errors.eventCategory
            // }
            >
              <FormLabel>Category Event</FormLabel>
              <InputGroup>
                <Select
                  name="eventCategory"
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Select category event"
                  value={formik.values.eventCategory}
                  onChange={formik.handleChange}
                >
                  {category.map((item, index) => (
                    <option
                      key={index}
                      value={item.id}
                      style={{ color: "black" }}
                    >
                      {item.categoryName}
                    </option>
                  ))}
                </Select>
              </InputGroup>
              {/* {formik.touched.eventCategory &&
                formik.errors.eventCategory && (
                  <FormErrorMessage>
                    {formik.errors.eventCategory}
                  </FormErrorMessage>
                )} */}
            </FormControl>

            <FormControl
              isInvalid={
                formik.touched.eventLocation && formik.errors.eventLocation
              }
            >
              <FormLabel>Location</FormLabel>
              <InputGroup>
                {/* <Input
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Select the location of event"
                  type="text"
                  name="eventLocation"
                  value={formik.values.eventLocation}
                  onChange={formik.handleChange}
                ></Input> */}
                <Select
                  name="eventLocation"
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Select category event"
                  value={formik.values.eventLocation}
                  onChange={formik.handleChange}
                >
                  {location.map((item, index) => (
                    <option key={index} value={item.id} 
                    style={{ color: "black" }}
                    >
                      {item.locationName}
                    </option>
                  ))}
                </Select>
              </InputGroup>
              {formik.touched.eventLocation &&
                formik.errors.eventLocation && (
                  <FormErrorMessage>
                    {formik.errors.eventLocation}
                  </FormErrorMessage>
                )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.eventTime && formik.errors.eventTime}
            >
              <FormLabel>Time</FormLabel>
              <InputGroup>
                <Input
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Type time of event"
                  type="time"
                  // step={1}
                  name="eventTime"
                  value={formik.values.eventTime}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.eventTime && formik.errors.eventTime && (
                <FormErrorMessage>{formik.errors.eventTime}</FormErrorMessage>
              )}
            </FormControl>
            <Flex gap="1em">
              <FormControl
                isInvalid={
                  formik.touched.eventStartDate &&
                  formik.errors.eventStartDate
                }
              >
                <FormLabel>Start Date</FormLabel>
                <InputGroup>
                  <Input
                    background="#262626"
                    color="#585454"
                    border="0"
                    placeholder="Select the last date"
                    type="date"
                    name="eventStartDate"
                    value={formik.values.eventStartDate}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.eventStartDate &&
                  formik.errors.eventStartDate && (
                    <FormErrorMessage>
                      {formik.errors.eventStartDate}
                    </FormErrorMessage>
                  )}
              </FormControl>
              <FormControl
                isInvalid={
                  formik.touched.eventLastDate &&
                  formik.errors.eventLastDate
                }
              >
                <FormLabel>Last Date</FormLabel>
                <InputGroup>
                  <Input
                    background="#262626"
                    color="#585454"
                    border="0"
                    placeholder="Select the last date"
                    type="date"
                    name="eventLastDate"
                    value={formik.values.eventLastDate}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.eventLastDate &&
                  formik.errors.eventLastDate && (
                    <FormErrorMessage>
                      {formik.errors.eventLastDate}
                    </FormErrorMessage>
                  )}
              </FormControl>
            </Flex>
          </Stack>
          <Stack w={{ base: "full", lg: "50%" }} justifyContent="space-between">
            <FormControl
              isInvalid={
                formik.touched.eventDescription &&
                formik.errors.eventDescription
              }
            >
              <FormLabel>Description</FormLabel>
              <InputGroup>
                <Textarea
                  background="#262626"
                  color="#585454"
                  border="0"
                  h="20.5em"
                  placeholder="Type description here"
                  name="eventDescription"
                  value={formik.values.eventDescription}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.eventDescription &&
                formik.errors.eventDescription && (
                  <FormErrorMessage>
                    {formik.errors.eventDescription}
                  </FormErrorMessage>
                )}
            </FormControl>

            <FormControl
              isInvalid={
                formik.touched.eventHighlight && formik.errors.eventHighlight
              }
            >
              <FormLabel>Highlight</FormLabel>
              <InputGroup>
                <Textarea
                  background="#262626"
                  color="#585454"
                  border="0"
                  h="7em"
                  placeholder="Type highlight here"
                  name="eventHighlight"
                  value={formik.values.eventHighlight}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.eventHighlight &&
                formik.errors.eventHighlight && (
                  <FormErrorMessage>
                    {formik.errors.eventHighlight}
                  </FormErrorMessage>
                )}
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.eventInclude && formik.errors.eventInclude
              }
            >
              <FormLabel>What's Included</FormLabel>
              <InputGroup>
                <Textarea
                  background="#262626"
                  color="#585454"
                  border="0"
                  h="7em"
                  placeholder="Type what's included here"
                  name="eventInclude"
                  value={formik.values.eventInclude}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.eventInclude &&
                formik.errors.eventInclude && (
                  <FormErrorMessage>
                    {formik.errors.eventInclude}
                  </FormErrorMessage>
                )}
            </FormControl>
          </Stack>
        </Flex>
        <Button type="submit">Create</Button>
      </form>
    </>
  );
};

export default FormEvent;
