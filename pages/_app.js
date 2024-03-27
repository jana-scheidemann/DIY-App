import GlobalStyle from "../styles";
import { useState } from "react";
import { initialProjects } from "@/db/data";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState(initialProjects);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} projects={projects} setProjects={setProjects} />
    </>
  );
}
