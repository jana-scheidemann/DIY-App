import styled from "styled-components";
import StyledModal from "./StyledComponents.js/StyledModal";

export default function ModalSort({
  onSortComplexityStartHigh,
  onSortComplexityStartLow,
  onSortDuration,
  onToggleSortModal,
}) {
  return (
    <StyledModal>
      <p>Sort projects by ...</p>
      <input
        type="radio"
        id="duration-short"
        name="sort"
        value="duration"
        onClick={() => onSortDuration("short")}
      />
      <label htmlFor="duration-short">Duration: short to long</label>
      <br />

      <input
        type="radio"
        id="duration-long"
        name="sort"
        value="duration"
        onClick={() => onSortDuration("long")}
      />
      <label htmlFor="duration-long">Duration: long to short</label>
      <br />

      <input
        type="radio"
        id="complexity-low"
        name="sort"
        value="complexity"
        onClick={onSortComplexityStartLow}
      />
      <label htmlFor="complexity-low">Complexity: Beginner to Advanced</label>
      <br />

      <input
        type="radio"
        id="complexity-high"
        name="sort"
        value="complexityd"
        onClick={onSortComplexityStartHigh}
      />
      <label htmlFor="complexity-high">Complexity: Adcanced to Beginner</label>

      <hr />
      <button type="button" onClick={onToggleSortModal}>
        Cancel sorting
      </button>
    </StyledModal>
  );
}

const StyledSortButton = styled.button`
  border: none;
  background-color: white;
`;
