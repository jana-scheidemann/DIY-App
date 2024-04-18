import styled from "styled-components";
import Image from "next/image";

export default function SearchField({
  onSortComplexityStartHigh,
  onSortComplexityStartLow,
  onSortDuration,
  query,
  handleSearch,
  onFilterProjects,
  onResetFilters,
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

  function handleFilterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filterData = Object.fromEntries(formData);
    onFilterProjects(filterData);
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

        {/* <label htmlFor="filter">
          <Image
            src={"/icons/filter.svg"}
            width={20}
            height={20}
            alt={"Filter projects"}
          />
        </label>
        <select name="filter" id="filter" multiple={true}>
          <option value="nofilter">-- no filter --</option>
          <optgroup label="duration">
            <option value="duration-short">2 hours or less</option>
            <option value="duration-medium">2 - 23 hours</option>
            <option value="duration-long">more than 23 hours</option>
          </optgroup>
          <optgroup label="complexity">
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </optgroup>
        </select> */}

        <Image
          src={"/icons/filter.svg"}
          width={20}
          height={20}
          alt={"Filter projects"}
        />
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
          <input type="radio" id="duration-long" name="duration" value="long" />
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
  flex-wrap: wrap;
  /* gap: 1rem;
  justify-content: center;
  align-items: center; */
`;
