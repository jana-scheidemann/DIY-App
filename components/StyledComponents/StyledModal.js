import styled from "styled-components";

export default function StyledModal({ children }) {
  return (
    <StyledBackground>
      <StyledContainer>{children}</StyledContainer>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  position: fixed;
  z-index: 90;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div`
  overflow-y: auto;
  max-height: calc(100% -5rem);
  position: fixed;
  z-index: 90;
  top: 5rem;
  left: 5rem;
  bottom: 5rem;
  right: 5rem;
  background-color: white;
  border: 1px solid black;
  padding: 0px 20px 20px 20px;
  height: fit-content;
  width: fit-content;
`;
