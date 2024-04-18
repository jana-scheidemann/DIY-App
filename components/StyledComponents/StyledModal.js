import styled from "styled-components";

export default function StyledModal({ children }) {
  return (
    <StyledPageBackground>
      <StyledModalContainer>{children}</StyledModalContainer>
    </StyledPageBackground>
  );
}

const StyledPageBackground = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--modal-background);
`;

const StyledModalContainer = styled.div`
  overflow-y: auto;
  max-height: calc(100% -10%);
  position: fixed;
  z-index: 101;
  top: calc(5%);
  right: calc(5%);
  bottom: calc(5%);
  left: calc(5%);
  background-color: var(--modal-menu-background);
  border-radius: 20px;
  padding: 10px 20px 30px 20px;
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
