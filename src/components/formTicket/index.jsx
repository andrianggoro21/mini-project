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
  type_ticket: Yup.string().required("Type of Ticket is required"),
  price_free_ticket: Yup.string(),
  price_reguler_ticket: Yup.string().required(
    "Price Reguler Ticket is required"
  ),
  price_vip_ticket: Yup.string().required("Price VIP Ticket is required"),
  discount: Yup.string().required("Discount is required"),
  max_refferal: Yup.string().required("Max Refferal is required"),
  capacity_event: Yup.string().required("Capacity Event is required"),
});

const FormTicket = () => {
  const formTicket = async (
    select_event,
    type_ticket,
    price_free_ticket,
    price_reguler_ticket,
    price_vip_ticket,
    discount,
    max_refferal,
    capacity_event
  ) => {
    try {
      await axios.post("http://localhost:3000/ticket", {
        select_event,
        type_ticket,
        price_free_ticket,
        price_reguler_ticket,
        price_vip_ticket,
        discount,
        max_refferal,
        capacity_event,
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
      price_free_ticket: "-",
      price_reguler_ticket: "-",
      price_vip_ticket: "-",
      discount: "-",
      max_refferal: "-",
      capacity_event: "",
    },

    validationSchema: TicketSchema,
    onSubmit: (values) => {
      formTicket(
        values.select_event,
        values.type_ticket,
        values.price_free_ticket,
        values.price_reguler_ticket,
        values.price_vip_ticket,
        values.discount,
        values.max_refferal,
        values.capacity_event
      );
    },
  });

  const [selected_event, setSelectedEvent] = useState("");
  const [selected_ticket, setSelectedTicket] = useState("");
  const [price, setPrice] = useState("");

  const handleSelectEvent = (event) => {
    setSelectedEvent(event.target.value);
  };

  const handleSelectTicket = (event) => {
    setSelectedTicket(event.target.value);
    setPrice("");
  };

  const handlePriceTicket = (event) => {
    setPrice(event.target.value);
  };

  const [data, setEventData] = useState([]);
  const getEventData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/event");
      setEventData(response.data);
      console.log(response.data);
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
              <InputGroup>
                <Select
                  name="select_event"
                  background="#262626"
                  color="#585454"
                  border="0"
                  placeholder="Select the event name"
                  value={formik.values.select_event}
                  onChange={formik.handleChange}
                >
                  {data.length > 0 &&
                    data.map((item, index) => (
                      <option
                        key={index}
                        value={item.event_name}
                        style={{ color: "black" }}
                      >
                        {item.event_name}
                      </option>
                    ))}
                </Select>
              </InputGroup>
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
              <InputGroup>
                <Select
                  disabled={
                    data.find(
                      (item) => item.event_name === formik.values.select_event
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
                  {type_ticket.map((item, index) => (
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
              {formik.touched.type_ticket && formik.errors.type_ticket && (
                <FormErrorMessage>{formik.errors.type_ticket}</FormErrorMessage>
              )}
            </FormControl>
            <Text fontWeight="medium" color="#DB6969">
              if Free ticket the price auto 0 and couldn't changes anymore
            </Text>
          </Stack>
          <Stack spacing={5} w={{ base: "full", lg: "50%" }}>
            {formik.values.type_ticket === "free" ? (
              <>
                <FormControl
                  h="auto"
                  isInvalid={
                    formik.touched.price_free_ticket &&
                    formik.errors.price_free_ticket
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
                      name="price_free_ticket"
                      value="0"
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                  {formik.touched.price_free_ticket &&
                    formik.errors.price_free_ticket && (
                      <FormErrorMessage>
                        {formik.errors.price_free_ticket}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  h="auto"
                  isInvalid={formik.touched.capacity && formik.errors.capacity}
                >
                  <FormLabel textAlign="justify">Capacity</FormLabel>
                  <InputGroup>
                    <Input
                      background="#262626"
                      border="0"
                      type="number"
                      placeholder="Input capacity here"
                      name="capacity_event"
                      value={formik.values.capacity_event}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                  {formik.touched.capacity_event &&
                    formik.errors.capacity_event && (
                      <FormErrorMessage>
                        {formik.errors.capacity_event}
                      </FormErrorMessage>
                    )}
                </FormControl>
              </>
            ) : formik.values.type_ticket === "paid" ? (
              <>
                <FormControl
                  h="auto"
                  isInvalid={
                    formik.touched.price_reguler_ticket &&
                    formik.errors.price_reguler_ticket
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
                      name="price_reguler_ticket"
                      value={formik.values.price_reguler_ticket}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                  {formik.touched.price_reguler_ticket &&
                    formik.errors.price_reguler_ticket && (
                      <FormErrorMessage>
                        {formik.errors.price_reguler_ticket}
                      </FormErrorMessage>
                    )}
                </FormControl>
                <FormControl
                  h="auto"
                  isInvalid={
                    formik.touched.price_vip_ticket &&
                    formik.errors.price_vip_ticket
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
                      name="price_vip_ticket"
                      value={formik.values.price_vip_ticket}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
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
                  <InputGroup>
                    <Input
                      background="#262626"
                      border="0"
                      type="number"
                      placeholder="Input maximal refferal here"
                      name="max_refferal"
                      value={formik.values.max_refferal}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
                </FormControl>
                <FormControl
                  h="auto"
                  isInvalid={formik.touched.capacity && formik.errors.capacity}
                >
                  <FormLabel textAlign="justify">Capacity</FormLabel>
                  <InputGroup>
                    <Input
                      background="#262626"
                      border="0"
                      type="number"
                      placeholder="Input capacity here"
                      name="capacity_event"
                      value={formik.values.capacity}
                      onChange={formik.handleChange}
                    />
                  </InputGroup>
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
