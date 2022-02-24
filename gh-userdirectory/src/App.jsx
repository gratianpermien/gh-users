import React from "react";
import Search from "./pages/Search";
import styled from "styled-components";

export default function App() {
  return (
    <AppWrapper>
      <h1>GitHub User Search</h1>
      <Search />
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
