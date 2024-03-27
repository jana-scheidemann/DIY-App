import GlobalStyle from "../styles";
import { useState } from "react";
import { initialProjects } from "@/db/data";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState(initialProjects);

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        projects={projects}
        onDeleteProject={deleteProject}
      />
    </>
  );
}
