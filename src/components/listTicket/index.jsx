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

const ListTicket = () => {
    const [ticket, setTicket] = useState([]);
    const getTicket = async () => {
      try {
        const response = await axios.get("http://localhost:3000/ticket");
        setTicket(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    
    useEffect(() => {
      getTicket();
    }, []);
    return (
        
    <Stack gap="1em" minH="100vh" align="center" justify="center">
    <TableContainer>
      <Table>
        <Thead background="#081901" color="white">
          <Tr>
            <Th>
              <Checkbox size="md" colorScheme="green"/>
            </Th>
            <Th>Event Name</Th>
            <Th>Type of Ticket</Th>
            <Th>Price of Free Ticket</Th>
            <Th>Price of Reguler Ticket</Th>
            <Th>Price of VIP Ticket</Th>
            <Th>Discount</Th>
            <Th>Max Refferal</Th>
            <Th>Capacity</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ticket.map((item, index) => (
          <Tr key={index}>
            <Td>
              <Checkbox size="md" colorScheme="green"/>
            </Td>
            <Td>{item.select_event}</Td>
            <Td>{item.type_ticket}</Td>
            <Td>IDR {item.price_free_ticket}</Td>
            <Td>IDR {item.price_reguler_ticket}</Td>
            <Td>IDR {item.price_vip_ticket}</Td>
            <Td>IDR {item.discount}</Td>
            <Td>{item.max_refferal}</Td>
            <Td>{item.capacity_event}</Td>
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
    )
}

export default ListTicket;