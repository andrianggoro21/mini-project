import SearchResults from "../../components/search/searchResult";

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const history = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3000/event', {
        params: {
          query: searchQuery
        }
      });

      // Process the response data here

      // Open a new page with the search results
      history('/search-results');
    } catch (error) {
      console.error('Error occurred during search:', error);
    }
  };
    return (
        <>
        {/* <SearchResults/>
         */}
             <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
        </>
    )
}

export default SearchPage;