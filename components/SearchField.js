import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

export default function SearchField({
  onSortComplexityStartHigh,
  onSortComplexityStartLow,
  onSortDuration,
  query,
  handleSearch,
  onFilterProjects,
  onResetFilters,
}) {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

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

  function handleFilterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filterData = Object.fromEntries(formData);
    onFilterProjects(filterData);
  }

  function openSort() {
    setIsOpenSort(!isOpenSort);
  }
  function openFilter() {
    setIsOpenFilter(!isOpenFilter);
  }

  return (
    <>
      <StyledSearchField>
        <button type="button" onClick={openSort}>
          <Image
            src={"/icons/sort.svg"}
            width={20}
            height={20}
            alt={"Sort projects"}
          />
        </button>

        <button type="button" onClick={openFilter}>
          <Image
            src={"/icons/filter.svg"}
            width={20}
            height={20}
            alt={"Filter projects"}
          />
        </button>

        <label htmlFor="search"></label>
        <input
          type="search"
          id="search"
          name="search"
          size={30}
          placeholder="🔍 for title, material etc."
          value={query}
          onChange={handleSearch}
        />
        <br />
        {isOpenSort && (
          <>
            <label htmlFor="sort" />

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
          </>
        )}

        {isOpenFilter && (
          <form onSubmit={handleFilterSubmit}>
            <p>Filter projects by ...</p>

            <p>Duration:</p>
            <input
              type="radio"
              id="duration-short"
              name="duration"
              value="short"
            />
            <label htmlFor="duration-short">&lt; 2 hours</label>
            <input
              type="radio"
              id="duration-medium"
              name="duration"
              value="medium"
            />
            <label htmlFor="duration-medium">2 - 23 hours</label>
            <input
              type="radio"
              id="duration-long"
              name="duration"
              value="long"
            />
            <label htmlFor="duration-long">&gt; 23 hours</label>

            <p>Complexity:</p>
            <input
              type="radio"
              id="beginner"
              name="complexity"
              value="Beginner"
            />
            <label htmlFor="beginner">Beginner</label>
            <input
              type="radio"
              id="intermediate"
              name="complexity"
              value="Intermediate"
            />
            <label htmlFor="intermediate">Intermediate</label>
            <input
              type="radio"
              id="advanced"
              name="complexity"
              value="Advanced"
            />
            <label htmlFor="advanced">Advanced</label>
            <hr />
            <button type="submit">Apply filter</button>
            <input type="reset" value="Clear all filter" />
            <button type="button" onClick={onResetFilters}>
              reset filter
            </button>
          </form>
        )}
      </StyledSearchField>
    </>
  );
}

const StyledSearchField = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
