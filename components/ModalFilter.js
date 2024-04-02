import styled from "styled-components";

export default function ModalFilter({ onCancelFilter, onSubmit }) {
  function handleFilterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filterData = Object.fromEntries(formData);
    console.log(filterData);
    onSubmit(filterData);
  }
  return (
    <StyledBackground>
      <StyledFormContainer onSubmit={handleFilterSubmit}>
        <p>Filter projects by ...</p>
        <p>Duration:</p>
        <StyledSortButton type="button">
          <input
            type="radio"
            id="duration-short"
            name="duration"
            value="short"
          />
          <label htmlFor="duration-short">2 hours or less</label>
        </StyledSortButton>
        <StyledSortButton type="button">
          <input
            type="radio"
            id="duration-medium"
            name="duration"
            value="medium"
          />
          <label htmlFor="duration-medium">2 - 23 hours</label>
        </StyledSortButton>
        <StyledSortButton type="button">
          <input type="radio" id="duration-long" name="duration" value="long" />
          <label htmlFor="duration-long">more than 23 hours</label>
        </StyledSortButton>
        <p>Complexity:</p>
        <StyledSortButton type="button">
          <input
            type="radio"
            id="beginner"
            name="complexity"
            value="Beginner"
          />
          <label htmlFor="beginner">Beginner</label>
        </StyledSortButton>
        <StyledSortButton type="button">
          <input
            type="radio"
            id="intermediate"
            name="complexity"
            value="Intermediate"
          />
          <label htmlFor="intermediate">Intermediate</label>
        </StyledSortButton>
        <StyledSortButton type="button">
          <input
            type="radio"
            id="advanced"
            name="complexity"
            value="Advanced"
          />
          <label htmlFor="advanced">Advanced</label>
        </StyledSortButton>
        <hr />
        <button type="submit">Apply filter</button>
        <input type="reset" value="Clear all filter" />
        <button type="button" onClick={onCancelFilter}>
          Cancel filtering
        </button>
      </StyledFormContainer>
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

const StyledFormContainer = styled.form`
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
