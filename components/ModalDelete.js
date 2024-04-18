import StyledModal from "./StyledComponents/StyledModal";

export default function ModalDelete({ onConfirm, onCancel }) {
  return (
    <StyledModal>
      <p>Are you sure you want to delete this project?</p>
      <button type="button" onClick={onConfirm}>
        Yes
      </button>
      <button type="button" onClick={onCancel}>
        No
      </button>
    </StyledModal>
  );
}
