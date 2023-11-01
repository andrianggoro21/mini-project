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
  select_event: Yup.string().required("Select event name is required"),
  // type_ticket: Yup.string().required("Type of Ticket is required"),
  // free_price_ticket: Yup.string(),
  // reguler_price: Yup.string().required(
  //   "Price Reguler Ticket is required"
  //   ),
  //   reguler_capacity: Yup.string().required("Capacity Event is required"),
  // vip_price_ticket: Yup.string().required("Price VIP Ticket is required"),
  // discount: Yup.string().required("Discount is required"),
  // max_refferal: Yup.string().required("Max Refferal is required"),
  // event_capacity: Yup.string().required("Capacity Event is required"),
});

const FormTicket = () => {
  const [event, setEvent] = useState([]);
  const [ticketType, setTicketType] = useState([]);

  const getEvent = async () => {
    try {
      const response = await axios.get("http://localhost:8080/ticket/get-event");
      setEvent(response.data.data);
      // console.log(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const getTicketType = async () => {
    try {
      const response = await axios.get("http://localhost:8080/ticket/get-ticket-type");
      setTicketType(response.data.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getEvent();
    getTicketType();
  }, []);

  const formTicket = async (
    select_event,
    type_ticket,
    free_price_ticket,
    reguler_price,
    reguler_capacity,
    vip_price_ticket,
    discount,
    max_refferal,
    event_capacity
  ) => {
    try {
      // await axios.post("http://localhost:8000/ticket", {
      await axios.post("http://localhost:8000/ticket", {
        select_event,
        type_ticket,
        free_price_ticket,
        reguler_price,
        reguler_capacity,
        vip_price_ticket,
        discount,
        max_refferal,
        event_capacity,
      });
      alert("Create Ticket Success");
    } catch (err) {
      console.log(err);
    }
  };

  const formik = useFormik({
    initialValues: {
      select_event: "",
      type_ticket: "",
      free_price_ticket: "",
      reguler_price: "",
      reguler_capacity: "",
      vip_price_ticket: "",
      discount: "",
      max_refferal: "",
      event_capacity: "",
    },
    
    validationSchema: TicketSchema,
    onSubmit: (values) => {
      console.log(values.select_event);
      formTicket(
        values.select_event,
        values.type_ticket,
        values.free_price_ticket,
        values.reguler_price,
        values.reguler_capacity,
        values.vip_price_ticket,
        values.discount,
        values.max_refferal,
        values.event_capacity,
        );
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

  const type_ticket = [
    {
      label: "Free",
      value: "free",
    },
    {
      label: "Paid",
      value: "paid",
    },
  ];

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
            formik.values.type_ticket ? { base: "column", lg: "row" } : "column"
          }
          justifyContent="space-between"
        >
          <Stack
            spacing={5}
            w={formik.values.type_ticket ? { base: "full", lg: "50%" } : "full"}
          >
            <FormControl
              isInvalid={
                formik.touched.select_event && formik.errors.select_event
              }
            >
              <FormLabel>Event</FormLabel>
              <Select
                name="select_event"
                background="#262626"
                color="#585454"
                border="0"
                placeholder="Select the event name"
                value={formik.values.select_event}
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
              {formik.touched.select_event && formik.errors.select_event && (
                <FormErrorMessage>
                  {formik.errors.select_event}
                </FormErrorMessage>
              )}
            </FormControl>
            <FormControl
              isInvalid={
                formik.touched.type_ticket && formik.errors.type_ticket
              }
            >
              <FormLabel>Type of Ticket</FormLabel>
              <Select
                disabled={
                  event.find(
                    (item) => item.id == formik.values.select_event
                  )
                    ? false
                    : true
                }
                name="type_ticket"
                background="#262626"
                color="#585454"
                border="0"
                placeholder="Select option"
                value={formik.values.type_ticket}
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
              {formik.touched.type_ticket && formik.errors.type_ticket && (
                <FormErrorMessage>{formik.errors.type_ticket}</FormErrorMessage>
              )}
            </FormControl>
            <Text fontWeight="medium" color="#DB6969">
              if Free ticket the price auto 0 and couldn't changes anymore
            </Text>
          </Stack>
          <Stack spacing={5} w={{ base: "full", lg: "50%" }}>
            {formik.values.type_ticket == 1 ? ( // id dengan value 1 yaitu tipe tiket "free"
              <>
                <FormControl
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
                </FormControl>
                <FormControl
                  h="auto"
                  isInvalid={formik.touched.event_capacity && formik.errors.event_capacity}
                >
                  <FormLabel textAlign="justify">Capacity</FormLabel>

                  <Input
                    background="#262626"
                    border="0"
                    type="number"
                    placeholder="Input capacity here"
                    name="event_capacity"
                    value={formik.values.event_capacity}
                    onChange={formik.handleChange}
                  />

                  {formik.touched.event_capacity &&
                    formik.errors.event_capacity && (
                      <FormErrorMessage>
                        {formik.errors.event_capacity}
                      </FormErrorMessage>
                    )}
                </FormControl>
              </>
            ) : formik.values.type_ticket == 2 ? ( // id dengan value 2 yaitu tipe tiket "paid"
              <>
                <Box display="flex"flexDirection={{base: "column", lg:"row"}} position="relative" gap="1em">
                <FormControl
                  h="auto"
                  isInvalid={
                    formik.touched.reguler_price &&
                    formik.errors.reguler_price
                  }
                >
                  <FormLabel textAlign="justify">
                    Price of &nbsp;
                    <Text as="span" color="#DB6969">
                      Reguler Ticket
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
                      placeholder="Input price of reguler ticket here"
                      name="reguler_price"
                      value={formik.values.reguler_price}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                  {formik.touched.reguler_price &&
                    formik.errors.reguler_price && (
                      <FormErrorMessage>
                        {formik.errors.reguler_price}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  h="auto"
                  isInvalid={
                    formik.touched.reguler_capacity &&
                    formik.errors.reguler_capacity
                  }
                >
                  <FormLabel>
                    Capacity
                  </FormLabel>
                    <Input
                      background="#262626"
                      border="0"
                      type="number"
                      placeholder="Input price of reguler ticket here"
                      name="reguler_capacity"
                      value={formik.values.reguler_capacity}
                      onChange={formik.handleChange}
                    />
                  {formik.touched.reguler_capacity &&
                    formik.errors.reguler_capacity && (
                      <FormErrorMessage>
                        {formik.errors.reguler_capacity}
                      </FormErrorMessage>
                    )}
                </FormControl>

                </Box>
                <Box display="flex"flexDirection={{base: "column", lg:"row"}} position="relative" gap="1em">

                <FormControl
                  h="auto"
                  isInvalid={
                    formik.touched.vip_price_ticket &&
                    formik.errors.vip_price_ticket
                  }
                >
                  <FormLabel textAlign="justify">
                    Price of &nbsp;
                    <Text as="span" color="#DB6969">
                      VIP Ticket
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
                      placeholder="Input price of VIP ticket here"
                      name="vip_price_ticket"
                      value={formik.values.vip_price_ticket}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl
                  h="auto"
                  isInvalid={
                    formik.touched.vip_price_ticket &&
                    formik.errors.vip_price_ticket
                  }
                >
                  <FormLabel>
                    Capacity
                  </FormLabel>
                  <InputGroup>
                    <InputLeftElement>
                      <Text>IDR</Text>
                    </InputLeftElement>
                    <Input
                      background="#262626"
                      border="0"
                      type="number"
                      placeholder="Input price of VIP ticket here"
                      name="vip_price_ticket"
                      value={formik.values.vip_price_ticket}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                </FormControl>
                </Box>
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
                    formik.touched.max_refferal && formik.errors.max_refferal
                  }
                >
                  <FormLabel textAlign="justify">Max Refferal</FormLabel>

                  <Input
                    background="#262626"
                    border="0"
                    type="number"
                    placeholder="Input maximal refferal here"
                    name="max_refferal"
                    value={formik.values.max_refferal}
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
