import { useState } from "react";
import styled from "styled-components";

export default function ModalSort({ onSortProjects, onCancelSort }) {
  const [sortFilter, setSortFilter] = useState("");

  function handleSortChange(event) {
    setSortFilter(event.target.value);
  }

  function handleApplySort() {
    if (sortFilter === "duration-short") {
      onSortProjects("duration", "asc");
    } else if (sortFilter === "duration-long") {
      onSortProjects("duration", "desc");
    } else if (sortFilter === "complexity-low") {
      onSortProjects("complexity", "asc");
    } else if (sortFilter === "complexity-high") {
      onSortProjects("complexity", "desc");
    }
    onCancelSort();
  }

  return (
    <StyledBackground>
      <StyledContainer>
        <StyledCloseButton type="button" onClick={onCancelSort}>
          <span
            role="img"
            aria-label="cross emoji indicating to close the modal"
          >
            🆇
          </span>
        </StyledCloseButton>
        <h2>Sort projects</h2>
        <fieldset>
          <legend>Duration</legend>
          <StyledInputGroup>
            <input
              type="radio"
              id="duration-short"
              name="sort"
              value="duration-short"
              checked={sortFilter === "duration-short"}
              onChange={handleSortChange}
            />
            <label htmlFor="duration-short">short to long</label>
            <input
              type="radio"
              id="duration-long"
              name="sort"
              value="duration-long"
              checked={sortFilter === "duration-long"}
              onChange={handleSortChange}
            />
            <label htmlFor="duration-long">long to short</label>
          </StyledInputGroup>
        </fieldset>
        <fieldset>
          <legend>Complexity</legend>
          <StyledInputGroup>
            <input
              type="radio"
              id="complexity-low"
              name="sort"
              value="complexity-low"
              checked={sortFilter === "complexity-low"}
              onChange={handleSortChange}
            />
            <label htmlFor="complexity-low">Beginner to Advanced</label>
            <input
              type="radio"
              id="complexity-high"
              name="sort"
              value="complexity-high"
              checked={sortFilter === "complexity-high"}
              onChange={handleSortChange}
            />
            <label htmlFor="complexity-high">Advanced to Beginner</label>
          </StyledInputGroup>
        </fieldset>
        <StyledButtonGroup>
          <button type="button" onClick={handleApplySort}>
            Apply Sorting
          </button>
        </StyledButtonGroup>
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

const StyledContainer = styled.form`
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
