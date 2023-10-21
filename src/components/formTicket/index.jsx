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
    InputLeftElement,
  } from "@chakra-ui/react";
  import { useFormik } from "formik";
  const FormTicket = () => {
    const formik = useFormik({
      initialValues: {
        event_name: "",
        category_event: "",
        location: "",
        description: "",
        highlight: "",
        included: "",
      },
    })
    return (
        <>
        <form onSubmit={formik.handleSubmit}>
      <Flex
        w="full"
        background="#1E1D1D"
        mt="1em"
        rounded=".5em"
        gap={{base: "2em" ,lg: "5em"}}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
      >
            <Stack spacing={5} w={{base: "full", lg:"50%"}}>              
              <FormControl
                variant="floating"
                isInvalid={formik.touched.name && formik.errors.name}
              >
                <FormLabel>Event</FormLabel>
                <InputGroup>
                <Select placeholder='Select the event name'>
                    <option color="black">United Arab Emirates</option>
                    <option color="black">Nigeria</option>
                </Select>
                </InputGroup>
                {formik.touched.name && formik.errors.name && (
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                  )}
              </FormControl>
            </Stack>
            <Stack w={{base: "full", lg:"50%"}} justifyContent="space-between" gap="2em">
              <FormControl
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel>Type of Ticket</FormLabel>
                <InputGroup >
                <Select placeholder='Select type of ticket'>
                    <option color="black">United Arab Emirates</option>
                    <option color="black">Nigeria</option>
                </Select>
                </InputGroup>
                {formik.touched.email && formik.errors.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                h="7em"
                isInvalid={formik.touched.email && formik.errors.email}
              >
                <FormLabel textAlign="justify">Price <Text as="span" color="#DB6969">if Free ticket the price auto 0 and couldn't changes anymore</Text></FormLabel>
                <InputGroup>
                <InputLeftElement>
                    <Text>IDR</Text>
                </InputLeftElement>
                  <Input
                    placeholder="Input the type price here"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    />
                </InputGroup>
                {formik.touched.email && formik.errors.email && (
                  <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                  )}
              </FormControl>
            </Stack>
      </Flex>
        </form>    
                  </>
    )
}

export default FormTicket;