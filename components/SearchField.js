import styled from "styled-components";
import Image from "next/image";
// import Fuse from "fuse.js";
// import { useState } from "react";

export default function SearchField({
  onSortComplexityStartHigh,
  onSortComplexityStartLow,
  onSortDuration,
  query,
  handleSearch,
}) {
  function handleChange(event) {
    event.preventDefault();
    const searchOption = event.target.value;
    if (searchOption === "duration-short") {
      onSortDuration("short");
    } else if (searchOption === "duration-long") {
      onSortDuration("long");
    } else if (searchOption === "complexity-low") {
      onSortComplexityStartLow();
    } else if (searchOption === "complexity-high") {
      onSortComplexityStartHigh();
    }
  }
  return (
    <>
      <StyledSearchField>
        <label htmlFor="sort">
          <Image
            src={"/icons/sort.svg"}
            width={20}
            height={20}
            alt={"Sort projects"}
          />
        </label>
        <select name="sort" id="sort" onChange={handleChange}>
          <option value="">-- choose sort option --</option>
          <option value="duration-short">Duration: short to long</option>
          <option value="duration-long">Duration: long to short</option>
          <option value="complexity-low">
            Complexity: Beginner to Advanced
          </option>
          <option value="complexity-high">
            Complexity: Adcanced to Beginner
          </option>
        </select>

        <label htmlFor="search">
          <Image
            src={"/icons/search.png"}
            width={20}
            height={20}
            alt={"Search projects"}
          />
        </label>
        <input
          type="search"
          id="search"
          name="search"
          // size={30}
          placeholder="... for title, material etc."
          value={query}
          onChange={handleSearch}
        />
      </StyledSearchField>
    </>
  );
}

const StyledSearchField = styled.article`
  // width: 100%;
  display: flex;
  /* gap: 1rem;
  justify-content: center;
  align-items: center; */
`;
