import ProjectFormNew from "@/components/ProjectFormNew";

export default function ProjectCreate({ onAddProject }) {
  return (
    <>
      <h1>Create new project</h1>
      <ProjectFormNew onSubmit={onAddProject} />
    </>
  );
}
