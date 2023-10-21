import Navbar from "../../components/navbar";
import Carousel from "../../components/carousel";
import CardCategory from "../../components/cardCategory";
import FilterLocation from "../../components/filterLocation";
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

const Home = () => {
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
    >
      {/* <Navbar /> */}
      <Box as="main" pl="2em" pr="2em">
        <Carousel />
        <Heading as="h4" mt="1em" size="md" color="white">
          Category Events
        </Heading>
        <CardCategory />
        <Heading as="h4" mt="1em" size="md" color="white">
          Popular Events
        </Heading>
        <FilterLocation />
        <VStack gap="2em">
          <CardEvent />
          <Button
            variant={"unstyled"}
            border="1px solid #3C891C"
            size={"sm"}
            w={{base: "220px", md:"330px"}}
            h="60px"
            mr={4}
            fontSize="16px"
            color="#7ED957"
          >
            Explore more events
          </Button>
        </VStack>
        <Heading as="h4" mt="1em" mb="1em" size="md" color="white">Card Destionation</Heading>
        <CardDestination/>
      </Box>
    </Box>
  );
};

export default Home;
