import styled from "styled-components";
import Image from "next/image";

export default function StyledModal({ children, onCancel }) {
  return (
    <StyledPageBackground>
      <StyledModalContainer>
        <StyledCancelButton type="button" onClick={onCancel}>
          <Image
            src="/icons/cancel.svg"
            width={30}
            height={30}
            alt="close form"
          />
        </StyledCancelButton>
        {children}
      </StyledModalContainer>
    </StyledPageBackground>
  );
}
const StyledCancelButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

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
`;
