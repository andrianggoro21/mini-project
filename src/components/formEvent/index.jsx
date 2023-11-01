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
import { useEffect, useState } from "react";
import * as Yup from "yup";

const EventSchema = Yup.object().shape({
  event_name: Yup.string().required("Event name is required"),
  event_category: Yup.string().required("Category event is required"),
  event_location: Yup.string().required("Location is required"),
  event_time: Yup.string().required("Duration is required"),
  event_start_date: Yup.string().required("Start date is required"),
  event_last_date: Yup.string().required("Last date required"),
  event_description: Yup.string().required("Description is required"),
  event_highlight: Yup.string().required("Highlight is required"),
  event_include: Yup.string().required("Included is required"),
});

const FormEvent = () => {
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);
  
  const fetchCategory = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/list-category");
      setCategory(response.data.data);
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const fetchLocation = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/list-location");
      setLocation(response.data.data);
      console.log(response.data.data);
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
    include
  ) => {
    try {
      await axios.post("http://localhost:8080/event/add-event", {
      // await axios.post("http://localhost:8000/event", {
        eventName,
        categoryId,
        locationId,
        time,
        startDate,
        endDate,
        description,
        highlight,
        include,
      });
      alert("Create Event Success");
    } catch (err) {
      // console.log(err);
      alert("Error");
    }
  };

  const formik = useFormik({
    initialValues: {
      event_name: "",
      event_category: "",
      event_location: "",
      event_time: "",
      event_start_date: "",
      event_last_date: "",
      event_description: "",
      event_highlight: "",
      event_include: "",
    },

    validationSchema: EventSchema,
    onSubmit: (values) => {
      formEvent(
        values.event_name,
        values.event_category,
        values.event_location,
        values.event_time,
        values.event_start_date,
        values.event_last_date,
        values.event_description,
        values.event_highlight,
        values.event_include
      );
    },
  });

  const list_category = [
    {
      label: "Music",
      value: "music",
    },
    {
      label: "Food and Drink",
      value: "food_and_drink",
    },
    {
      label: "Culture",
      value: "culture",
    },
    {
      label: "Art",
      value: "art",
    },
    {
      label: "Holiday",
      value: "holiday",
    },
    {
      label: "Sport",
      value: "sport",
    },
    {
      label: "Horror",
      value: "horror",
    },
  ];

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
            <Text>Upload Image</Text>
            <Flex gap="1em">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                background="#262626"
                h="224px"
                w="424px"
              >
                <Image src="./images/no-image.png" />
              </Box>
              <Flex
                flexDirection="column"
                justifyContent="flex-end"
                alignItems="center"
                gap=".7em"
              >
                <Button
                  variant={"solid"}
                  backgroundColor="#3C891C"
                  size={"sm"}
                  w="120px"
                  h="40px"
                  mr={4}
                >
                  Upload Image
                </Button>
                <Button
                  variant={"unstyled"}
                  border="1px solid #3C891C"
                  size={"sm"}
                  w="120px"
                  h="40px"
                  mr={4}
                >
                  Remove
                </Button>
              </Flex>
            </Flex>
            {/* <FormControl>
              <InputGroup>
              <Input
                // background="#262626"
                // color="#585454"
                border="0"
              id="image" type="file" name="image" />
              </InputGroup>
            </FormControl> */}
            <FormControl
              isInvalid={formik.touched.event_name && formik.errors.event_name}
            >
              <FormLabel>Event Name</FormLabel>
              <InputGroup>
                <Input
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Type event's here name here"
                  type="text"
                  name="event_name"
                  value={formik.values.event_name}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.event_name && formik.errors.event_name && (
                <FormErrorMessage>{formik.errors.event_name}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl
            // isInvalid={
            //   formik.touched.event_category && formik.errors.event_category
            // }
            >
              <FormLabel>Category Event</FormLabel>
              <InputGroup>
                <Select
                  name="event_category"
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Select category event"
                  value={formik.values.event_category}
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
              {/* {formik.touched.event_category &&
                formik.errors.event_category && (
                  <FormErrorMessage>
                    {formik.errors.event_category}
                  </FormErrorMessage>
                )} */}
            </FormControl>

            <FormControl
              isInvalid={
                formik.touched.event_location && formik.errors.event_location
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
                  name="event_location"
                  value={formik.values.event_location}
                  onChange={formik.handleChange}
                ></Input> */}
                <Select
                  name="event_location"
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Select category event"
                  value={formik.values.event_location}
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
              {formik.touched.event_location &&
                formik.errors.event_location && (
                  <FormErrorMessage>
                    {formik.errors.event_location}
                  </FormErrorMessage>
                )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.event_time && formik.errors.event_time}
            >
              <FormLabel>Time</FormLabel>
              <InputGroup>
                <Input
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Type time of event"
                  type="time"
                  step={1}
                  name="event_time"
                  value={formik.values.event_time}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.event_time && formik.errors.event_time && (
                <FormErrorMessage>{formik.errors.event_time}</FormErrorMessage>
              )}
            </FormControl>
            <Flex gap="1em">
              <FormControl
                isInvalid={
                  formik.touched.event_start_date &&
                  formik.errors.event_start_date
                }
              >
                <FormLabel>Start Date</FormLabel>
                <InputGroup>
                  <Input
                    background="#262626"
                    color="#585454"
                    border="0"
                    placeholder="Select the start date"
                    type="date"
                    name="event_start_date"
                    value={formik.values.event_start_date}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.event_start_date &&
                  formik.errors.event_start_date && (
                    <FormErrorMessage>
                      {formik.errors.event_start_date}
                    </FormErrorMessage>
                  )}
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.event_last_date &&
                  formik.errors.event_last_date
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
                    name="event_last_date"
                    value={formik.values.event_last_date}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.event_last_date &&
                  formik.errors.event_last_date && (
                    <FormErrorMessage>
                      {formik.errors.event_last_date}
                    </FormErrorMessage>
                  )}
              </FormControl>
            </Flex>
          </Stack>
          <Stack w={{ base: "full", lg: "50%" }} justifyContent="space-between">
            <FormControl
              isInvalid={
                formik.touched.event_description &&
                formik.errors.event_description
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
                  name="event_description"
                  value={formik.values.event_description}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.event_description &&
                formik.errors.event_description && (
                  <FormErrorMessage>
                    {formik.errors.event_description}
                  </FormErrorMessage>
                )}
            </FormControl>

            <FormControl
              isInvalid={
                formik.touched.event_highlight && formik.errors.event_highlight
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
                  name="event_highlight"
                  value={formik.values.event_highlight}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.event_highlight &&
                formik.errors.event_highlight && (
                  <FormErrorMessage>
                    {formik.errors.event_highlight}
                  </FormErrorMessage>
                )}
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.event_include && formik.errors.event_include
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
                  name="event_include"
                  value={formik.values.event_include}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.event_include &&
                formik.errors.event_include && (
                  <FormErrorMessage>
                    {formik.errors.event_include}
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
