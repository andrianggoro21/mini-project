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
} from "@chakra-ui/react";
import { useFormik } from "formik";
const FormEvent = () => {
  const formik = useFormik({
    initialValues: {
      event_name: "",
      category_event: "",
      location: "",
      description: "",
      highlight: "",
      included: "",
    },

    // validationSchema: EventSchema,
    // onSubmit: (values) => {

    // }
  });

  // const { isOpen, onOpen, onClose } = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
        <form onSubmit={formik.handleSubmit}>
      <Flex
        w="full"
        background="#1E1D1D"
        p="1em"
        rounded=".5em"
        gap={{base: "1.2em", lg:"5em"}}
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
      >
            <Stack spacing={5} w={{base: "full", lg:"50%"}} h="full">
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

              <FormControl
                variant="floating"
                isInvalid={formik.touched.name_event && formik.errors.name_event}
              >
                <FormLabel>Event Name</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Type event's here name here"
                    type="text"
                    name="name_event"
                    value={formik.values.name_event}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.name_event && formik.errors.name_event && (
                  <FormErrorMessage>{formik.errors.name_event}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.category_event && formik.category_event}
              >
                <FormLabel>Category Event</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Select the category your event"
                    type="text"
                    name="category_event"
                    value={formik.values.category_event}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.category_event && formik.errors.category_event && (
                  <FormErrorMessage>{formik.errors.category_event}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.location_event && formik.errors.location_event}
              >
                <FormLabel>Location</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Select the location of event"
                    type="text"
                    name="location_event"
                    value={formik.values.location_event}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.location_event && formik.errors.location_event && (
                  <FormErrorMessage>{formik.errors.location_event}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.duration_event && formik.errors.duration_event}
              >
                <FormLabel>Duration (days)</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Type the duration of event"
                    type="text"
                    name="duration_event"
                    value={formik.values.duration_event}
                    onChange={formik.handleChange}
                  ></Input>
                </InputGroup>
                {formik.touched.duration_event && formik.errors.duration_event && (
                  <FormErrorMessage>{formik.errors.duration_event}</FormErrorMessage>
                )}
              </FormControl>
              <Flex gap="1em">
                <FormControl
                  isInvalid={formik.touched.start_date_event && formik.errors.start_date_event}
                >
                  <FormLabel>Start Date</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Select the start date"
                      type="text"
                      name="start_date_event"
                      value={formik.values.start_date_event}
                      onChange={formik.handleChange}
                    ></Input>
                  </InputGroup>
                  {formik.touched.start_date_event && formik.errors.start_date_event && (
                    <FormErrorMessage>{formik.errors.start_date_event}</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  isInvalid={formik.touched.last_date_event && formik.errors.last_date_event}
                >
                  <FormLabel>Last Date</FormLabel>
                  <InputGroup>
                    <Input
                      placeholder="Select the last date"
                      type="text"
                      name="last_date_event"
                      value={formik.values.last_date_event}
                      onChange={formik.handleChange}
                    ></Input>
                  </InputGroup>
                  {formik.touched.last_date_event && formik.errors.last_date_event && (
                    <FormErrorMessage>{formik.errors.last_date_event}</FormErrorMessage>
                  )}
                </FormControl>
              </Flex>
            </Stack>
            <Stack w={{base: "full", lg:"50%"}} justifyContent="space-between">
              <FormControl
                isInvalid={formik.touched.description_event && formik.errors.description_event}
              >
                <FormLabel>Description</FormLabel>
                <InputGroup >
                  <Textarea
                    h="20.5em"
                    placeholder="Type description here"
                    name="description_event"
                    value={formik.values.description_event}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
                {formik.touched.description_event && formik.errors.description_event && (
                  <FormErrorMessage>{formik.errors.description_event}</FormErrorMessage>
                )}
              </FormControl>

              <FormControl
                isInvalid={formik.touched.highlight_event && formik.errors.highlight_event}
              >
                <FormLabel>Highlight</FormLabel>
                <InputGroup>
                  <Textarea
                    h="7em"
                    placeholder="Type highlight here"
                    name="highlight_event"
                    value={formik.values.highlight_event}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
                {formik.touched.highlight_event && formik.errors.highlight_event && (
                  <FormErrorMessage>{formik.errors.highlight_event}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                isInvalid={formik.touched.included_event && formik.errors.included_event}
              >
                <FormLabel>What's Included</FormLabel>
                <InputGroup>
                  <Textarea
                    h="7em"
                    placeholder="Type what's included here"
                    name="included_event"
                    value={formik.values.included_event}
                    onChange={formik.handleChange}
                  />
                </InputGroup>
                {formik.touched.included_event && formik.errors.included_event && (
                  <FormErrorMessage>{formik.errors.included_event}</FormErrorMessage>
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
