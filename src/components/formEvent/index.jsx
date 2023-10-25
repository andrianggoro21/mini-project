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
import { useState } from "react";
import * as Yup from "yup";

const EventSchema = Yup.object().shape({
  event_name: Yup.string().required("Event name is required"),
  category_event: Yup.string().required("Category event is required"),
  location_event: Yup.string().required("Location is required"),
  time_event: Yup.string().required("Duration is required"),
  start_date_event: Yup.string().required("Start date is required"),
  last_date_event: Yup.string().required("Last date required"),
  description_event: Yup.string().required("Description is required"),
  highlight_event: Yup.string().required("Highlight is required"),
  included_event: Yup.string().required("Included is required"),
});

const FormEvent = () => {
  const formEvent = async (
    event_name,
    category_event,
    location_event,
    time_event,
    start_date_event,
    last_date_event,
    description_event,
    highlight_event,
    included_event
  ) => {
    try {
      await axios.post("http://localhost:3000/event", {
        event_name,
        category_event,
        location_event,
        time_event,
        start_date_event,
        last_date_event,
        description_event,
        highlight_event,
        included_event,
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
      category_event: "",
      location_event: "",
      time_event: "",
      start_date_event: "",
      last_date_event: "",
      description_event: "",
      highlight_event: "",
      included_event: "",
    },

    validationSchema: EventSchema,
    onSubmit: (values) => {
      formEvent(
        values.event_name,
        values.category_event,
        values.location_event,
        values.time_event,
        values.start_date_event,
        values.last_date_event,
        values.description_event,
        values.highlight_event,
        values.included_event
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
            //   formik.touched.category_event && formik.errors.category_event
            // }
            >
              <FormLabel>Category Event</FormLabel>
              <InputGroup>
                <Select
                  name="category_event"
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Select category event"
                  value={formik.values.category_event}
                  onChange={formik.handleChange}
                >
                  {list_category.map((item, index) => (
                    <option
                      key={index}
                      value={item.value}
                      style={{ color: "black" }}
                    >
                      {item.label}
                    </option>
                  ))}
                </Select>
              </InputGroup>
              {/* {formik.touched.category_event &&
                formik.errors.category_event && (
                  <FormErrorMessage>
                    {formik.errors.category_event}
                  </FormErrorMessage>
                )} */}
            </FormControl>

            <FormControl
              isInvalid={
                formik.touched.location_event && formik.errors.location_event
              }
            >
              <FormLabel>Location</FormLabel>
              <InputGroup>
                <Input
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Select the location of event"
                  type="text"
                  name="location_event"
                  value={formik.values.location_event}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.location_event &&
                formik.errors.location_event && (
                  <FormErrorMessage>
                    {formik.errors.location_event}
                  </FormErrorMessage>
                )}
            </FormControl>
            <FormControl
              isInvalid={formik.touched.time_event && formik.errors.time_event}
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
                  name="time_event"
                  value={formik.values.time_event}
                  onChange={formik.handleChange}
                ></Input>
              </InputGroup>
              {formik.touched.time_event && formik.errors.time_event && (
                <FormErrorMessage>{formik.errors.time_event}</FormErrorMessage>
              )}
            </FormControl>
            <Flex gap="1em">
              <FormControl
                isInvalid={
                  formik.touched.start_date_event &&
                  formik.errors.start_date_event
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
                    name="start_date_event"
                    value={formik.values.start_date_event}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.start_date_event &&
                  formik.errors.start_date_event && (
                    <FormErrorMessage>
                      {formik.errors.start_date_event}
                    </FormErrorMessage>
                  )}
              </FormControl>

              <FormControl
                isInvalid={
                  formik.touched.last_date_event &&
                  formik.errors.last_date_event
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
                    name="last_date_event"
                    value={formik.values.last_date_event}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.last_date_event &&
                  formik.errors.last_date_event && (
                    <FormErrorMessage>
                      {formik.errors.last_date_event}
                    </FormErrorMessage>
                  )}
              </FormControl>
            </Flex>
          </Stack>
          <Stack w={{ base: "full", lg: "50%" }} justifyContent="space-between">
            <FormControl
              isInvalid={
                formik.touched.description_event &&
                formik.errors.description_event
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
                  name="description_event"
                  value={formik.values.description_event}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.description_event &&
                formik.errors.description_event && (
                  <FormErrorMessage>
                    {formik.errors.description_event}
                  </FormErrorMessage>
                )}
            </FormControl>

            <FormControl
              isInvalid={
                formik.touched.highlight_event && formik.errors.highlight_event
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
                  name="highlight_event"
                  value={formik.values.highlight_event}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.highlight_event &&
                formik.errors.highlight_event && (
                  <FormErrorMessage>
                    {formik.errors.highlight_event}
                  </FormErrorMessage>
                )}
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.included_event && formik.errors.included_event
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
                  name="included_event"
                  value={formik.values.included_event}
                  onChange={formik.handleChange}
                />
              </InputGroup>
              {formik.touched.included_event &&
                formik.errors.included_event && (
                  <FormErrorMessage>
                    {formik.errors.included_event}
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
