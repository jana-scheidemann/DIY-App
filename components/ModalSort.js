import styled from "styled-components";

export default function ModalSort({
  onSortComplexityStartHigh,
  onSortComplexityStartLow,
  onSortDurationStartLong,
  onSortDurationStartShort,
  onToogleSortModal,
}) {
  return (
    <StyledBackground>
      <StyledContainer>
        <p>Sort projects by ...</p>
        <StyledSortButton type="button" onClick={onSortDurationStartShort}>
          <input
            type="radio"
            id="duration-short"
            name="sort"
            value="duration"
          />
          <label htmlFor="duration-short">Duration: short to long</label>
        </StyledSortButton>

        <StyledSortButton type="button" onClick={onSortDurationStartLong}>
          <input type="radio" id="duration-long" name="sort" value="duration" />
          <label htmlFor="duration-long">Duration: long to short</label>
        </StyledSortButton>

        <StyledSortButton type="button" onClick={onSortComplexityStartLow}>
          <input
            type="radio"
            id="complexity-low"
            name="sort"
            value="complexity"
          />
          <label htmlFor="complexity-low">
            Complexity: Beginner to Advanced
          </label>
        </StyledSortButton>

        <StyledSortButton type="button" onClick={onSortComplexityStartHigh}>
          <input
            type="radio"
            id="complexity-high"
            name="sort"
            value="complexityd"
          />
          <label htmlFor="complexity-high">
            Complexity: Adcanced to Beginner
          </label>
        </StyledSortButton>
        <hr />
        <button type="button" onClick={onToogleSortModal}>
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
