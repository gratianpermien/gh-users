import React from "react";
import styled from "styled-components";

function Result({ item }) {
  const resultSchema = {
    name: item.login,
    id: item.id,
    link: item.html_url,
  };
  return (
    <ResultWrapper>
      <Title>{resultSchema.name}</Title>
      <Subtitle>{resultSchema.id}</Subtitle>
      <AddtlInfo visible={true}>{resultSchema.link}</AddtlInfo>
    </ResultWrapper>
  );
}

export default Result;

const Title = styled.h2``;
const Subtitle = styled.h3``;

const AddtlInfo = styled.div`
  background: var(--secondary-bg);
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  display: flex;
  flex-direction: column;
  gap: 0.2em;
  height: ${(props) => (props.visible ? "1" : "0")};
  opacity: ${(props) => (props.visible ? "1" : "0")};
  padding-bottom: ${(props) => (props.visible ? "1em" : "0")};
  padding-left: 1em;
  padding-right: 1em;
  padding-top: ${(props) => (props.visible ? "1em" : "0")};
  transition: padding-bottom 600ms, padding-top 600ms, height 600ms,
    opacity 600ms;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
`;

const ResultWrapper = styled.div`
  background: var(--primary-bg);
  display: flex;
  flex-direction: column;
  margin: 2em;
`;
