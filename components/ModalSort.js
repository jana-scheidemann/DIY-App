import styled from "styled-components";

export default function ModalSort() {
  return (
    <StyledBackground>
      <StyledContainer>
        <p>Sort projects by ...</p>
        <input
          type="radio"
          id="duration"
          name="sort"
          value="duration-start-short"
        />
        <label htmlFor="duration">Duration: short to long</label>
        <br />
        <input
          type="radio"
          id="duration"
          name="sort"
          value="duration-start-long"
        />
        <label htmlFor="duration">Duration: long to short</label>
        <br />
        <input
          type="radio"
          id="complexity"
          name="sort"
          value="complexity-start-beginner"
        />
        <label htmlFor="complexity">Complexity: Beginner to Advanced</label>
        <br />
        <input
          type="radio"
          id="complexity"
          name="sort"
          value="complexity-start-advanced"
        />
        <label htmlFor="complexity">Complexity: Adcanced to Beginner</label>
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
