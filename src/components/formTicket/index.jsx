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
  Select,
  InputLeftElement,
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
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";

const TicketSchema = Yup.object().shape({
  selectEvent: Yup.string().required("Select event name is required"),
  ticketType: Yup.string().required("Type of Ticket is required"),
  ticketName: Yup.string().required("Name og Ticket is required"),
  price: Yup.string(),
  capacity: Yup.string().required("Capacity of Ticket is required"),
  discount: Yup.string(),
  maxReferral: Yup.string(),
});

const FormTicket = () => {
  const [event, setEvent] = useState([]);
  const [ticketType, setTicketType] = useState([]);

  const getEvent = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/ticket/get-event"
      );
      setEvent(response.data.data);
      // console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getTicketType = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/ticket/get-ticket-type"
      );
      setTicketType(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEvent();
    getTicketType();
  }, []);

  const formTicket = async (
    eventId,
    ticketTypeId,
    ticketName,
    price,
    capacity,
    discount,
    maxReferral,
  ) => {
    try {
      await axios.post("http://localhost:8080/ticket/add-ticket", {
      // await axios.post("http://localhost:8000/ticket", {
        eventId,
        ticketTypeId,
        ticketName,
        price,
        capacity,
        discount,
        maxReferral,
      });
      alert("Create Ticket Success");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      selectEvent: "",
      ticketType: "",
      ticketName: "",
      price: 0,
      capacity: "",
      discount: 0,
      maxReferral: 0,
    },

    validationSchema: TicketSchema,
    onSubmit: (values, {resetForm}) => {
      formTicket(
        values.selectEvent,
        values.ticketType,
        values.ticketName,
        values.price,
        values.capacity,
        values.discount,
        values.maxReferral,
      );
      resetForm({values: ""})
    },
  });

  const [data, setEventData] = useState([]);
  const getEventData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/event");
      setEventData(response.data);
      // console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEventData();
  }, []);

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex
          p="1em"
          w="full"
          background="#1E1D1D"
          mt="1em"
          rounded=".5em"
          gap={{ base: "2em", lg: "5em" }}
          flexDirection={
            formik.values.ticketType ? { base: "column", lg: "row" } : "column"
          }
          justifyContent="space-between"
        >
          <Stack
            spacing={5}
            w={formik.values.ticketType ? { base: "full", lg: "50%" } : "full"}
          >
            <FormControl
              isInvalid={
                formik.touched.selectEvent && formik.errors.selectEvent
              }
            >
              <FormLabel>Event</FormLabel>
              <Select
                name="selectEvent"
                background="#262626"
                color="#585454"
                border="0"
                placeholder="Select the event name"
                value={formik.values.selectEvent}
                onChange={formik.handleChange}
              >
                {event.length > 0 &&
                  event.map((item, index) => (
                    <option
                      key={index}
                      value={item.id}
                      style={{ color: "black" }}
                    >
                      {item.eventName}
                    </option>
                  ))}
              </Select>
              {formik.touched.selectEvent && formik.errors.selectEvent && (
                <FormErrorMessage>
                  {formik.errors.selectEvent}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.ticketType && formik.errors.ticketType
              }
            >
              <FormLabel>Type of Ticket</FormLabel>
              <Select
                disabled={
                  event.find((item) => item.id == formik.values.selectEvent)
                    ? false
                    : true
                }
                name="ticketType"
                background="#262626"
                color="#585454"
                border="0"
                placeholder="Select option"
                value={formik.values.ticketType}
                onChange={formik.handleChange}
              >
                {ticketType.map((item, index) => (
                  <option
                    key={index}
                    value={item.id}
                    style={{ color: "black" }}
                  >
                    {item.typeName}
                  </option>
                ))}
              </Select>
              {formik.touched.ticketType && formik.errors.ticketType && (
                <FormErrorMessage>{formik.errors.ticketType}</FormErrorMessage>
              )}
            </FormControl>
            <Text fontWeight="medium" color="#DB6969">
              if Free ticket the price auto 0 and couldn't changes anymore
            </Text>
          </Stack>
          <Stack spacing={5} w={{ base: "full", lg: "50%" }}>
            {formik.values.ticketType == 1 ? ( // id dengan value 1 yaitu tipe tiket "free"
              <>
                {/* <FormControl
                  h="auto"
                  isInvalid={
                    formik.touched.free_price_ticket &&
                    formik.errors.free_price_ticket
                  }
                >
                  <FormLabel textAlign="justify">
                    Price of &nbsp;
                    <Text as="span" color="#DB6969">
                      Free Ticket
                    </Text>
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <Text>IDR</Text>
                    </InputLeftElement>
                    <Input
                      background="#262626"
                      border="0"
                      disabled="true"
                      placeholder="0"
                      name="free_price_ticket"
                      value="0"
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                  {formik.touched.free_price_ticket &&
                    formik.errors.free_price_ticket && (
                      <FormErrorMessage>
                        {formik.errors.free_price_ticket}
                      </FormErrorMessage>
                    )}
                </FormControl> */}
                <Box
                  display="flex"
                  flexDirection={{ base: "column", lg: "row" }}
                  position="relative"
                  gap="1em"
                >
                  <FormControl
                    h="auto"
                    isInvalid={
                      formik.touched.ticketName &&
                      formik.errors.ticketName
                    }
                  >
                    <FormLabel>Ticket Name</FormLabel>
                    <Input
                      background="#262626"
                      border="0"
                      type="text"
                      placeholder="Input name of ticket here"
                      name="ticketName"
                      value={formik.values.ticketName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.ticketName &&
                      formik.errors.ticketName && (
                        <FormErrorMessage>
                          {formik.errors.ticketName}
                        </FormErrorMessage>
                      )}
                  </FormControl>
                  <FormControl
                    h="auto"
                    isInvalid={
                      formik.touched.price &&
                      formik.errors.price
                    }
                  >
                    <FormLabel textAlign="justify">
                      Price of&nbsp;
                      <Text as="span" color="#DB6969">
                        Ticket
                      </Text>
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <Text>IDR</Text>
                      </InputLeftElement>
                      <Input
                        disabled="true"
                        background="#262626"
                        border="0"
                        type="number"
                        placeholder="0"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    {formik.touched.price &&
                      formik.errors.price && (
                        <FormErrorMessage>
                          {formik.errors.price}
                        </FormErrorMessage>
                      )}
                  </FormControl>
                </Box>
                <FormControl
                  h="auto"
                  isInvalid={formik.touched.capacity && formik.errors.capacity}
                >
                  <FormLabel textAlign="justify">Capacity</FormLabel>

                  <Input
                    background="#262626"
                    border="0"
                    type="number"
                    placeholder="Input capacity here"
                    name="capacity"
                    value={formik.values.capacity}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.capacity &&
                    formik.errors.capacity && (
                      <FormErrorMessage>
                        {formik.errors.capacity}
                      </FormErrorMessage>
                    )}
                </FormControl>
              </>
            ) : formik.values.ticketType == 2 ? ( // id dengan value 2 yaitu tipe tiket "paid"
              <>
                 <Box
                  display="flex"
                  flexDirection={{ base: "column", lg: "row" }}
                  position="relative"
                  gap="1em"
                >
                  <FormControl
                    h="auto"
                    isInvalid={
                      formik.touched.ticketName &&
                      formik.errors.ticketName
                    }
                  >
                    <FormLabel>Ticket Name</FormLabel>
                    <Input
                      background="#262626"
                      border="0"
                      type="text"
                      placeholder="Input name of ticket here"
                      name="ticketName"
                      value={formik.values.ticketName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.ticketName &&
                      formik.errors.ticketName && (
                        <FormErrorMessage>
                          {formik.errors.ticketName}
                        </FormErrorMessage>
                      )}
                  </FormControl>
                  <FormControl
                    h="auto"
                    isInvalid={
                      formik.touched.price &&
                      formik.errors.price
                    }
                  >
                    <FormLabel textAlign="justify">
                      Price of&nbsp;
                      <Text as="span" color="#DB6969">
                        Ticket
                      </Text>
                    </FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <Text>IDR</Text>
                      </InputLeftElement>
                      <Input
                        background="#262626"
                        border="0"
                        type="number"
                        placeholder="Type price of ticket here"
                        name="price"
                        value={formik.values.price}
                        onChange={formik.handleChange}
                      />
                    </InputGroup>
                    {formik.touched.price &&
                      formik.errors.price && (
                        <FormErrorMessage>
                          {formik.errors.price}
                        </FormErrorMessage>
                      )}
                  </FormControl>
                </Box>
                <FormControl
                  h="auto"
                  isInvalid={formik.touched.capacity && formik.errors.capacity}
                >
                  <FormLabel textAlign="justify">Capacity</FormLabel>

                  <Input
                    background="#262626"
                    border="0"
                    type="number"
                    placeholder="Input capacity here"
                    name="capacity"
                    value={formik.values.capacity}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.capacity &&
                    formik.errors.capacity && (
                      <FormErrorMessage>
                        {formik.errors.capacity}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  h="auto"
                  isInvalid={formik.touched.discount && formik.errors.discount}
                >
                  <FormLabel textAlign="justify">
                    Discount &nbsp;
                    <Text as="span" color="#DB6969">
                      (Input 0 if there's no discount)
                    </Text>
                  </FormLabel>
                  <InputGroup>
                  <InputLeftElement>
                        <Text>IDR</Text>
                      </InputLeftElement>
                    <Input
                      background="#262626"
                      border="0"
                      type="number"
                      placeholder="Input discount here"
                      name="discount"
                      value={formik.values.discount}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl
                  h="auto"
                  isInvalid={
                    formik.touched.maxReferral && formik.errors.maxReferral
                  }
                >
                  <FormLabel textAlign="justify">Max Referral</FormLabel>

                  <Input
                    background="#262626"
                    border="0"
                    type="number"
                    placeholder="Input maximal referral here"
                    name="maxReferral"
                    value={formik.values.maxReferral}
                    onChange={formik.handleChange}
                  />
                </FormControl>
              </>
            ) : null}
          </Stack>
        </Flex>
        <Button type="submit">Create Ticket</Button>
      </form>
    </>
  );
};

export default FormTicket;
