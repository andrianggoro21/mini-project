import {
  Box,
  Text,
  Flex,
  Heading,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Icon,
  Button,
  Stack,
  HStack,
  IconButton,
  Wrap,
  WrapItem,
  Select
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoFilter } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

const FilterLocation = () => {
  const [event, setEvent] = useState([]);
  const fetchEvent = async () => {
    try {
      const response = await axios.get("http://localhost:3000/event");
      setEvent(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const Location = [
    {
      id_location: 1,
      name_location: "Jogja",
    },
    {
      id_location: 2,
      name_location: "Semarang",
    },
    {
      id_location: 3,
      name_location: "Bandung",
    },
    {
      id_location: 4,
      name_location: "Jakarta",
    },
  ]

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      gap="1em"
      mt="1em"
      mb="1em"
    >
      <HStack color="#838383" gap={{base:".7em", lg:"1.5em"}}>
            <Link
              borderBottom="2px solid #121212"
              _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
            >
              <Text fontSize="16px" fontWeight="medium">All</Text>
            </Link>
            <Link
              borderBottom="2px solid #121212"
              _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
            >
              <Text fontSize="16px" fontWeight="medium">For You</Text>
            </Link>
            <Link
              borderBottom="2px solid #121212"
              _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
            >
              <Text fontSize="16px" fontWeight="medium">Online</Text>
            </Link>
      </HStack>
      <Flex gap=".8em">
          <>
          <Select
          name="filter_location"
          placeholder="Select location"
          >
            {Location.map((item, index) => (
              <option key={index} value={item.name_location}>{item.name_location}</option>
            ))}
          </Select>
        <Menu>
          <MenuButton as={Button} variant="outline" color="#838383">
          <Flex
              justifyContent="center"
              alignItems="center"
              w={{base: "4px", lg:"auto"}}
              gap=".5em"
              >
              <Icon as={AiOutlineCalendar} />
              <Text display={{ base: "none", lg: "block" }}>
                Select the date
              </Text>
              <Icon
                as={FaChevronDown}
                display={{ base: "none", lg: "block" }}
                />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton as={Button} variant="outline" color="#838383">
            <Flex
              justifyContent="center"
              alignItems="center"
              w={{base: "4px", lg:"auto"}}
              gap="0.5em"
              >
              <Icon as={IoFilter} display={{ base: "block", lg: "none" }} />
              <Text display={{ base: "none", lg: "block" }}>Sort by</Text>
              <Icon
                as={FaChevronDown}
                display={{ base: "none", lg: "block" }}
                />
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        </>
      </Flex>
    </Box>
    );
  };
  
  export default FilterLocation;
  