import Navbar from "../../components/navbar";
import Carousel from "../../components/carousel";
import CardCategory from "../../components/cardCategory";
import FilterEvent from "../../components/filter";
import CardEvent from "../../components/cardEvent";
import CardDestination from "../../components/cardDestination";
import Footer from "../../components/footer";


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
import { useState } from "react";

const Home = () => {
  const [filterByLocation, setFilterByLocation] = useState();

  return (
    <Box
      m="0"D
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
      <Box as="main" pl="2em" pr="2em">
        <Heading as="h4" mt="1em" size="md" color="white">
          Category Events
        </Heading>
        <CardCategory />
        <Heading as="h4" mt="1em" size="md" color="white">
          Popular Events
        </Heading>
        <FilterEvent filterByLocation={filterByLocation} setFilterByLocation={setFilterByLocation}/>    
        {/* <VStack gap="2em"> */}
          <CardEvent filterByLocation={filterByLocation} />
        {/* </VStack> */}
        <Heading as="h4" mt="1em" mb="1em" size="md" color="white">Card Destionation</Heading>
        <CardDestination/>
      </Box>
      <Footer/>
    </Box>
  );
};

export default Home;
