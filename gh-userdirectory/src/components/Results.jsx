import React, { useState } from "react";
import styled from "styled-components";
import Result from "./Result";
import { isBookmarked, removeBookmark } from "../lib/Bookmarking";

function Results({ results }) {
  //handling of bookmarking, result mapping
  const [bookmarkedItems, setBookmarkedItems] = useState([]);
  function addBookmark(item) {
    if (isBookmarked(bookmarkedItems, item)) {
      const newBookmarks = removeBookmark(bookmarkedItems, item);
      setBookmarkedItems(newBookmarks);
    } else {
      setBookmarkedItems([...bookmarkedItems, item]);
    }
  }
  return (
    <ResultsWrapper>
      <h2>Results</h2>
      {results.map((item, index) => (
        <Result
          item={item}
          key={index}
          addBookmark={addBookmark}
          hasBookmark={isBookmarked(bookmarkedItems, item)}
        />
      ))}
    </ResultsWrapper>
  );
}

export default Results;

const ResultsWrapper = styled.div`
  margin: 1em 0;
  display: flex;
  flex-direction: column;
`;
