import { StyledButton } from "./StyledComponents/StyledButton";
import StyledErrorModal from "./StyledComponents/StyledErrorModal";

export default function ModalDelete({ onConfirm, onCancel }) {
  return (
    <StyledErrorModal>
      <p>Are you sure you want to delete this project?</p>
      <StyledButton type="button" onClick={onConfirm}>
        Yes
      </StyledButton>
      <StyledButton type="button" onClick={onCancel}>
        No
      </StyledButton>
    </StyledErrorModal>
  );
}
