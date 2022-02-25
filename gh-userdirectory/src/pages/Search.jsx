import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Results from "../components/Results";

function Search() {
  const [searchString, setSearchString] = useState("");
  const [results, setResults] = useState(
    JSON.parse(localStorage.getItem("_GHUSERSSEARCH")) || []
  );

  useEffect(() => {
    localStorage.setItem("_GHUSERSSEARCH", JSON.stringify(results));
  }, [results]);

  const handleChange = (event) => {
    setSearchString(event.target.value);
    event.target.value.length >= 3 && handleSearch();
  };

  async function handleSearch() {
    const authToken = import.meta.env.VITE_GHAUTHTOKEN;
    const query = `${searchString}+in:user&per_page=50`;
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
        <Searchbar
          type="text"
          placeholder="Feed me 3 letters"
          value={searchString}
          onChange={handleChange}
        />
        <Results results={results} />
      </SearchWrapper>
    </>
  );
}
export default Search;

const Searchbar = styled.input`
  max-width: 50vw;
  border-radius: 1em;
  border: 2px solid var(--primary-color);
  font-size: var(--basic-font-size);
  outline: none;
  padding: 0.4em 1em;
  width: 200px;
`;
const SearchWrapper = styled.div`
  margin: 1em 0;
`;
