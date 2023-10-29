// import { InputGroup, InputLeftElement, Input } from "@chakra-ui/input";
// import { RiSearchLine } from "react-icons/ri";

// const Search = () => {
//   return (
//     <InputGroup color="white" rounded="1px" w="312px">
//       <InputLeftElement
//         children={<RiSearchLine />}
//         pointerEvents="none"
//         top="50%"
//         transform="translateY(-50%)"
//       />
//       <Input type="text" placeholder="Find your events here"
//         // onChange={(e) => onSearch(e.target.value)}
//       />
//     </InputGroup>
//   );
// };

// export default Search;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const history = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const url = `/search?query=${searchQuery}`;
    history(url);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;