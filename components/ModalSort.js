import styled from "styled-components";

export default function ModalSort({
  onSortComplexityStartHigh,
  onSortComplexityStartLow,
  onSortDuration,
  onToggleSortModal,
}) {
  return (
    <StyledBackground>
      <StyledContainer>
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
        <label htmlFor="complexity-high">
          Complexity: Adcanced to Beginner
        </label>

        <hr />
        <button type="button" onClick={onToggleSortModal}>
          Cancel sorting
        </button>
      </StyledContainer>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  padding: 0px 20px 20px 20px;
`;

const StyledSortButton = styled.button`
  border: none;
  background-color: white;
`;
