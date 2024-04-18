import styled from "styled-components";
// import Fuse from "fuse.js";
// import { useState } from "react";

export default function SearchField({ query, handleSearch }) {
  return (
    <>
      <StyledSearchField>
        <label htmlFor="search">Search</label>
        <input
          type="search"
          id="search"
          name="search"
          size={30}
          placeholder="... for title, material etc."
          value={query}
          onChange={handleSearch}
        />
      </StyledSearchField>
    </>
  );
}

const StyledSearchField = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
