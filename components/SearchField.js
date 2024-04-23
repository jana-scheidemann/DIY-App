import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";
import {
  StyledInputSearch,
  StyledSearchIcon,
  StyledSearchItem,
  StyledInputSearchField,
  StyledInputSearchFieldContainer,
  StyledRadioButtonLabel,
  StyledRadioButton,
} from "./StyledComponents/StyledInput";
import {
  StyledButton,
  StyledButtonContainer,
  StyledButtonReset,
  StyledButtonFilter,
  StyledButtonSort,
} from "./StyledComponents/StyledButton";
import {
  StyledHeadlineH4,
  StyledHeadlineH5,
} from "./StyledComponents/StyledHeadline";
import { StyledDropdown } from "./StyledComponents/StyledDropdown";

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

  function handleSort(event) {
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
      <StyledInputSearch>
        <label htmlFor="search"></label>
        <StyledInputSearchFieldContainer>
          <StyledInputSearchField
            type="search"
            id="search"
            name="search"
            placeholder="for title, material etc."
            value={query}
            onChange={handleSearch}
          />
          <StyledSearchIcon>
            <Image
              src={"/icons/icon-magnifier.svg"}
              width={20}
              height={20}
              alt={"search projects"}
            />
          </StyledSearchIcon>
        </StyledInputSearchFieldContainer>
        <StyledSearchItem>
          <StyledButtonFilter type="button" onClick={openFilter}>
            <Image
              src={"/icons/icon-filter.svg"}
              width={30}
              height={30}
              alt={"Filter projects"}
            />
          </StyledButtonFilter>
        </StyledSearchItem>

        <StyledSearchItem>
          <StyledButtonSort type="button" onClick={openSort}>
            <Image
              src={"/icons/icon-sort.svg"}
              width={30}
              height={30}
              alt={"Sort projects"}
            />
          </StyledButtonSort>
        </StyledSearchItem>
      </StyledInputSearch>

      {isOpenSort && (
        <>
          <label htmlFor="sort" />

          <StyledDropdown name="sort" id="sort" onChange={handleSort}>
            <option value="">-- choose sort option --</option>
            <option value="duration-short">Duration: short to long</option>
            <option value="duration-long">Duration: long to short</option>
            <option value="complexity-low">
              Complexity: Beginner to Advanced
            </option>
            <option value="complexity-high">
              Complexity: Adcanced to Beginner
            </option>
          </StyledDropdown>
        </>
      )}

      {isOpenFilter && (
        <form onSubmit={handleFilterSubmit}>
          <StyledFilterContainerHeader>
            <StyledHeadlineH4>Filter projects by ...</StyledHeadlineH4>
          </StyledFilterContainerHeader>

          <StyledFilterContainer>
            <StyledFilterContainerItem>
              <StyledHeadlineH5>Duration:</StyledHeadlineH5>
              <StyledRadioButtonLabel htmlFor="duration-short">
                <StyledRadioButton
                  type="radio"
                  id="duration-short"
                  name="duration"
                  value="short"
                />
                &lt; 2 hours
              </StyledRadioButtonLabel>
              <StyledRadioButtonLabel htmlFor="duration-medium">
                <StyledRadioButton
                  type="radio"
                  id="duration-medium"
                  name="duration"
                  value="medium"
                />
                2 - 23 hours
              </StyledRadioButtonLabel>
              <StyledRadioButtonLabel htmlFor="duration-long">
                <StyledRadioButton
                  type="radio"
                  id="duration-long"
                  name="duration"
                  value="long"
                />
                &gt; 23 hours
              </StyledRadioButtonLabel>
            </StyledFilterContainerItem>

            <StyledFilterContainerItem>
              <StyledHeadlineH5>Complexity:</StyledHeadlineH5>
              <StyledRadioButtonLabel htmlFor="beginner">
                <StyledRadioButton
                  type="radio"
                  id="beginner"
                  name="complexity"
                  value="Beginner"
                />
                Beginner
              </StyledRadioButtonLabel>
              <StyledRadioButtonLabel htmlFor="intermediate">
                <StyledRadioButton
                  type="radio"
                  id="intermediate"
                  name="complexity"
                  value="Intermediate"
                />
                Intermediate
              </StyledRadioButtonLabel>
              <StyledRadioButtonLabel htmlFor="advanced">
                <StyledRadioButton
                  type="radio"
                  id="advanced"
                  name="complexity"
                  value="Advanced"
                />
                Advanced
              </StyledRadioButtonLabel>
            </StyledFilterContainerItem>
          </StyledFilterContainer>
          <StyledButtonContainer>
            <StyledButton type="submit">Apply</StyledButton>
            <StyledButtonReset type="reset" value="Clear" />
            <StyledButton type="button" onClick={onResetFilters}>
              Reset
            </StyledButton>
          </StyledButtonContainer>
        </form>
      )}
    </>
  );
}

const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 0px 0px 0px 25px;
`;

const StyledFilterContainerItem = styled.div``;

const StyledFilterContainerHeader = styled.div`
  margin: 0px 0px 0px 25px;
`;
