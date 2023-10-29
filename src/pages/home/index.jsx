import Navbar from "../../components/navbar";
import Carousel from "../../components/carousel";
import CardCategory from "../../components/cardCategory";
import FilterLocation from "../../components/filter";
import CardEvent from "../../components/cardEvent";
import CardDestination from "../../components/cardDestination";
import Footer from "../../components/footer";
import SearchBar from "../../components/search";

import {
  Box,
  Text,
  Flex,
  Heading,
  Link,
  HStack,
  VStack,
  Button,
} from "@chakra-ui/react";

const Home = (isOpen) => {
  return (
    <Box
      m="0"
      p="0"
      w="full"
      h="auto"
      minH="100vh"
      maxW="100vw"
      background="#121212"
      boxSizing="inherit"
      // pt="72px"
      scrollBehavior="smooth"
    >
      {/* <Navbar /> */}
        <Carousel />
        <SearchBar/>
      <Box as="main" pl="2em" pr="2em">
        <Heading as="h4" mt="1em" size="md" color="white">
          Category Events
        </Heading>
        <CardCategory />
        <Heading as="h4" mt="1em" size="md" color="white">
          Popular Events
        </Heading>
        <FilterLocation />
        {/* <VStack gap="2em"> */}
          <CardEvent />
        {/* </VStack> */}
        <Heading as="h4" mt="1em" mb="1em" size="md" color="white">Card Destionation</Heading>
        <CardDestination/>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Home;
