import styled from "styled-components";

export default function ModalFilter({ onCancelFilter }) {
  return (
    <StyledBackground>
      <StyledContainer>
        <p>Filter projects by ...</p>
        <button type="button" onClick={onCancelFilter}>
          Cancel filtering
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
