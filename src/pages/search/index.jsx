import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import SearchResult from "../../components/search";
import { Box } from "@chakra-ui/react";
import FilterEvent from "../../components/filter";

const SearchPage = () => {
  const [filterByLocation, setFilterByLocation] = useState();
  console.log(filterByLocation)
  return (
    <Box
      m="0"
      p="0"
      w="full"
      h="auto"
      minH="100vh"
      maxW="100vw"
      background="#121212"
      color="#FFF"
      boxSizing="inherit"
      scrollBehavior="smooth"
    >
      <FilterEvent filterByLocation={filterByLocation} setFilterByLocation={setFilterByLocation}/>    
      <SearchResult filterByLocation={filterByLocation}/>
    </Box>
  );
};

export default SearchPage;
