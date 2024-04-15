import styled from "styled-components";
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
      <form onSubmit={handleFilterSubmit}>
        <p>Filter projects by ...</p>

        <p>Duration:</p>
        <input type="radio" id="duration-short" name="duration" value="short" />
        <label htmlFor="duration-short">2 hours or less</label>
        <input
          type="radio"
          id="duration-medium"
          name="duration"
          value="medium"
        />
        <label htmlFor="duration-medium">2 - 23 hours</label>
        <input type="radio" id="duration-long" name="duration" value="long" />
        <label htmlFor="duration-long">more than 23 hours</label>

        <p>Complexity:</p>
        <input type="radio" id="beginner" name="complexity" value="Beginner" />
        <label htmlFor="beginner">Beginner</label>
        <input
          type="radio"
          id="intermediate"
          name="complexity"
          value="Intermediate"
        />
        <label htmlFor="intermediate">Intermediate</label>
        <input type="radio" id="advanced" name="complexity" value="Advanced" />
        <label htmlFor="advanced">Advanced</label>
        <hr />
        <button type="submit">Apply filter</button>
        <input type="reset" value="Clear all filter" />
        <button type="button" onClick={onResetFilters}>
          reset filter
        </button>
        <button type="button" onClick={toggleFilterModal}>
          Cancel filtering
        </button>
      </form>
    </StyledModal>
  );
}
