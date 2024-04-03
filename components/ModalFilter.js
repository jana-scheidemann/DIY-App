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
        <StyledCloseButton type="button" onClick={onToggleFilterModal}>
          <span
            role="img"
            aria-label="cross emoji indicating to close the modal"
          >
            🆇
          </span>
        </StyledCloseButton>
        <h2>Filter projects</h2>

        <fieldset>
          <legend>Duration</legend>
          <StyledInputGroup>
            <input
              type="radio"
              id="duration-short"
              name="duration"
              value="short"
            />
            <label htmlFor="duration-short">2 hours or less</label>
          </StyledInputGroup>
          <StyledInputGroup>
            <input
              type="radio"
              id="duration-medium"
              name="duration"
              value="medium"
            />
            <label htmlFor="duration-medium">2 - 23 hours</label>
          </StyledInputGroup>
          <StyledInputGroup>
            <input
              type="radio"
              id="duration-long"
              name="duration"
              value="long"
            />
            <label htmlFor="duration-long">More than 23 hours</label>
          </StyledInputGroup>
        </fieldset>

        <fieldset>
          <legend>Complexity</legend>
          <StyledInputGroup>
            <input
              type="radio"
              id="beginner"
              name="complexity"
              value="Beginner"
            />
            <label htmlFor="beginner">Beginner</label>
          </StyledInputGroup>
          <StyledInputGroup>
            <input
              type="radio"
              id="intermediate"
              name="complexity"
              value="Intermediate"
            />
            <label htmlFor="intermediate">Intermediate</label>
          </StyledInputGroup>
          <StyledInputGroup>
            <input
              type="radio"
              id="advanced"
              name="complexity"
              value="Advanced"
            />
            <label htmlFor="advanced">Advanced</label>
          </StyledInputGroup>
        </fieldset>
        <StyledButtonGroup>
          <button type="submit">Apply filter</button>
          <input type="reset" value="Clear all filter" />
        </StyledButtonGroup>
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
  border-radius: 5px;
  padding: 20px;
  min-width: 300px;
`;

// muss noch ein bissle hübscher werden
const StyledCloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 10px;
`;

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
`;

const StyledInputGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  // besser eigene componente draus machen.
  input {
    margin-right: 10px;
  }
  // besser eigene componente draus machen.
  label {
    margin: 0;
  }
`;

// ⚠️ übrigens können die styles für die Modals wiederverwendet werden.
