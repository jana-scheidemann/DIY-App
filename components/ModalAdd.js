import StyledModal from "./StyledComponents/StyledModal";
import ProjectFormNew from "@/components/ProjectFormNew";

export default function ModalAdd({ onAddProject, onToggleAddModal }) {
  return (
    <StyledModal>
      <ProjectFormNew
        onAddProject={onAddProject}
        onToggleAddModal={onToggleAddModal}
      />
    </StyledModal>
  );
}
