import {
  Stack,
  Flex,
  Button,
  Heading,
  Box,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Checkbox,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

const ListEvent = () => {
  const [event, setEvent] = useState([]);
  const fetchEvent = async () => {
    try {
      const response = await axios.get("http://localhost:8080/event/list-event");
      setEvent(response.data.data);
      console.log(response.data.data);
      console.log(response.data.data[0].eventcategory.categoryName);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <Stack gap="1em" align="center" justify="center">
      <TableContainer>
        <Table>
          <Thead background="#081901" color="white">
            <Tr>
              <Th>
                <Checkbox size="md" colorScheme="green"/>
              </Th>
              <Th>Event Name</Th>
              <Th>Category</Th>
              <Th>Location</Th>
              <Th>Duration (days)</Th>
              <Th>Start Date</Th>
              <Th>Last Date</Th>
              <Th>Description</Th>
              <Th>Highlight</Th>
              <Th>Included</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {event.map((item, index) => (
            <Tr key={index}>
              <Td>
                <Checkbox size="md" colorScheme="green"/>
              </Td>
              <Td>{item.eventName}</Td>
              <Td>{item.eventcategory?.categoryName}</Td>
              <Td>{item.eventlocation?.locationName}</Td>
              <Td>4</Td>
              <Td>{item.startDate}</Td>
              <Td>{item.endDate}</Td>
              <Td>{item.description}</Td>
              <Td>{item.highlight}</Td>
              <Td>{item.include}</Td>
              <Td>
                <Flex alignItems={"center"} justifyContent="center" gap=".5em">
                  <Button
                    variant={"unstyled"}
                    border="1px solid #3C891C"
                    size={"sm"}
                    w="64px"
                    h="23px"
                  >
                    Edit
                  </Button>
                  <Button
                    variant={"solid"}
                    backgroundColor="#3C891C"
                    size={"sm"}
                    w="64px"
                    h="23px"
                  >
                    Delete
                  </Button>
                </Flex>
              </Td>
            </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default ListEvent;
