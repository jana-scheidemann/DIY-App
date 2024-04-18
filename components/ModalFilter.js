import styled from "styled-components";
import StyledModal from "./StyledComponents/StyledModal";
import { StyledButton } from "./StyledComponents/StyledButton";
import { StyledButtonReset } from "./StyledComponents/StyledButton";
import {
  StyledFormContainer,
  StyledFormContainerButtons,
  StyledRadioButton,
  StyledRadioButtonLabel,
} from "./StyledComponents/StyledInput";
import {
  StyledHeadlineH3,
  StyledHeadlineH4,
} from "./StyledComponents/StyledHeadline";
import StyledModal from "./StyledComponents/StyledModal";

export default function ModalFilter({
  toggleFilterModal,
  onFilterProjects,
  onResetFilters,
}) {
  function handleFilterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filterData = Object.fromEntries(formData);
    onFilterProjects(filterData);
    toggleFilterModal();
  }
  return (
    <StyledModal>
      <StyledFormContainer onSubmit={handleFilterSubmit}>
        <StyledHeadlineH3>Filter projects by ...</StyledHeadlineH3>

        <StyledHeadlineH4>Duration:</StyledHeadlineH4>
        <StyledRadioButtonLabel htmlFor="duration-short">
          <StyledRadioButton
            type="radio"
            id="duration-short"
            name="duration"
            value="short"
          />
          2 hours or less
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
          more than 23 hours
        </StyledRadioButtonLabel>

        <StyledHeadlineH4>Complexity:</StyledHeadlineH4>

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

        <StyledFormContainerButtons>
          <StyledButton type="submit">Apply</StyledButton>
          <StyledButtonReset type="reset" value="Clear All" />
          <StyledButton type="button" onClick={onResetFilters}>
            Reset
          </StyledButton>
          <StyledButton type="button" onClick={toggleFilterModal}>
            Cancel
          </StyledButton>
        </StyledFormContainerButtons>
      </StyledFormContainer>
    </StyledModal>
  );
}
