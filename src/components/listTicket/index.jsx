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

const ListTicket = () => {
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
            <Th>Price</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>
              <Checkbox size="md" colorScheme="green"/>
            </Td>
            <Td>Ambyar Concert Yogyakarta 2023</Td>
            <Td>Free</Td>
            <Td>IDR 0</Td>
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
          
          <Tr>
            <Td>
              <Checkbox size="md" colorScheme="green"/>
            </Td>
            <Td>Ambyar Concert Yogyakarta 2023</Td>
            <Td>VIP</Td>
            <Td>IDR 200.000</Td>
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
        </Tbody>
      </Table>
    </TableContainer>
  </Stack>
    )
}

export default ListTicket;