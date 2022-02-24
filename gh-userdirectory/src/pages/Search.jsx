import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Results from "../components/Results";

function Search() {
  const [searchString, setSearchString] = useState("");
  const [results, setResults] = useState(
    JSON.parse(localStorage.getItem("_GHUSERSSEARCH")) || []
  );

  const handleChange = (event) => {
    setSearchString(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("_GHUSERSSEARCH", JSON.stringify(results));
  }, [results]);

  async function handleClick() {
    const authToken = "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"; //import.meta.env.VITE_GHAUTHTOKEN;
    const query = `${searchString}+in:user&per_page=100`;

    try {
      const response = await axios(
        `https://api.github.com/search/users?q=${query}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      setResults(response.data.items);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <SearchWrapper>
        <h2>Search</h2>
        <input
          type="text"
          placeholder="First 3 letters of username start search"
          value={searchString}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
        <Results results={results} />
      </SearchWrapper>
    </>
  );
}
export default Search;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
