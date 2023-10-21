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

const ListEvent = () => {
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
              <Th>Category</Th>
              <Th>Location</Th>
              <Th>Duration (days)</Th>
              <Th>Start Date</Th>
              <Th>Last Date</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Checkbox size="md" colorScheme="green"/>
              </Td>
              <Td>Ambyar Concert Yogyakarta 2023</Td>
              <Td>Music</Td>
              <Td>Yogyakarta, Indonesia</Td>
              <Td>4</Td>
              <Td>1 Oct 2023</Td>
              <Td>4 Oct 2023</Td>
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
              <Td>Music</Td>
              <Td>Yogyakarta, Indonesia</Td>
              <Td>4</Td>
              <Td>1 Oct 2023</Td>
              <Td>4 Oct 2023</Td>
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
                <Checkbox size="md" colorScheme="green" defaultChecked />
              </Td>
              <Td>Ambyar Concert Yogyakarta 2023</Td>
              <Td>Music</Td>
              <Td>Yogyakarta, Indonesia</Td>
              <Td>4</Td>
              <Td>1 Oct 2023</Td>
              <Td>4 Oct 2023</Td>
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
  );
};

export default ListEvent;
