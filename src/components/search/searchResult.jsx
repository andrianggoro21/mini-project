import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const SearchResults = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/event?query=${searchQuery}`);
        setSearchResults(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <div>
      <h2>Search Results for: {searchQuery}</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name_event}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;