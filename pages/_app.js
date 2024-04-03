import GlobalStyle from "../styles";
import { useState } from "react";
import { initialProjects } from "@/db/data";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState(initialProjects);

  function handleAddProject(newProject) {
    setProjects([{ id: uid(), ...newProject }, ...projects]);
  }
  function handleDeleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  function handleEditProject(updatedProject) {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        projects={projects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onEditProject={handleEditProject}
      />
    </>
  );
}
