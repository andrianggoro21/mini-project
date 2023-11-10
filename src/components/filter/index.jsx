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
  Select,
  Input,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import { AiOutlineCalendar } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoFilter } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";

const FilterEvent = (props) => {
  const [category, setCategory] = useState([]);
  const [location, setLocation] = useState([]);

  const filterCategory = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/event/list-category"
      );
      setCategory(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const filterLocation = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/event/list-location"
      );
      setLocation(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    filterCategory();
    filterLocation();
  }, []);

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="1em"
        mt="1em"
        mb="1em"
      >
        <HStack color="#838383" gap={{ base: ".7em", lg: "1.5em" }}>
          <Link
            borderBottom="2px solid #121212"
            _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
          >
            <Text fontSize="16px" fontWeight="medium">
              All
            </Text>
          </Link>
          <Link
            borderBottom="2px solid #121212"
            _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
          >
            <Text fontSize="16px" fontWeight="medium">
              For You
            </Text>
          </Link>
          <Link
            borderBottom="2px solid #121212"
            _hover={{ color: "#7ED957", borderBottom: "2px solid #7ED957" }}
          >
            <Text fontSize="16px" fontWeight="medium">
              Online
            </Text>
          </Link>
        </HStack>
        <Flex gap=".8em">
          <>
          
          <Select
              color="#FFF"
              w="13em"
              name="filterCategory"
              placeholder="Select Category"
              value={props.filterByCategory}
              onChange={(e) => props.setFilterByCategory(e.target.value)}
            >
              {category.map((item, index) => (
                <option style={{ color: "black" }} key={index} value={item.id}>
                  {item.categoryName}
                </option>
              ))}
            </Select>
            <Select
              color="#FFF"
              w="13em"
              name="filterLocation"
              placeholder="Select location"
              value={props.filterByLocation}
              onChange={(e) => props.setFilterByLocation(e.target.value)}
            >
              {location.map((item, index) => (
                <option style={{ color: "black" }} key={index} value={item.id}>
                  {item.locationName}
                </option>
              ))}
            </Select>
            <Menu>
              <MenuButton as={Button} variant="outline" color="#838383">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w={{ base: "4px", lg: "auto" }}
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
                <Input type="date"></Input>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton as={Button} variant="outline" color="#838383">
                <Flex
                  justifyContent="center"
                  alignItems="center"
                  w={{ base: "4px", lg: "auto" }}
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
                <MenuItem>Newest</MenuItem>
                <MenuItem>Free</MenuItem>
                <MenuItem>Lowest Price</MenuItem>
                <MenuItem>Highest Price</MenuItem>
              </MenuList>
            </Menu>
          </>
        </Flex>
      </Box>
    </>
  );
};

export default FilterEvent;
