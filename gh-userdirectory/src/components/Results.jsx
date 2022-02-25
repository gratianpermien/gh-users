import React from "react";
import styled from "styled-components";
import Result from "./Result";

function Results({ results }) {
  return (
    <ResultsWrapper>
      <h2>Results</h2>
      {results.map((item, index) => (
        <Result item={item} key={index} />
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
