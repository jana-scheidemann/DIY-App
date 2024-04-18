import { StyledButton } from "./StyledComponents/StyledButton";
import StyledModal from "./StyledComponents/StyledModal";

export default function ModalDelete({ onConfirm, onCancel }) {
  return (
    <StyledModal>
      <p>Are you sure you want to delete this project?</p>
      <StyledButton type="button" onClick={onConfirm}>
        Yes
      </StyledButton>
      <StyledButton type="button" onClick={onCancel}>
        No
      </StyledButton>
    </StyledModal>
  );
}
