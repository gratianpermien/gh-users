import React from "react";
import styled from "styled-components";
import Result from "./Result";

function Results({ results }) {
  return (
    <ResultsWrapper>
      <h2>Results</h2>
      {results.map((item) => (
        <Result item={item} />
      ))}
    </ResultsWrapper>
  );
}

export default Results;

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
