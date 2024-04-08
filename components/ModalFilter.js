import styled from "styled-components";

export default function ModalFilter({ onToggleFilterModal, onFilterProjects }) {
  function handleFilterSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filterData = Object.fromEntries(formData);
    onFilterProjects(filterData);
    onToggleFilterModal();
  }
  return (
    <StyledBackground>
      <StyledFormContainer onSubmit={handleFilterSubmit}>
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
        <button type="button" onClick={onToggleFilterModal}>
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
