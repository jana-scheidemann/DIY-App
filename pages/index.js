import Project from "@/components/Project";
import styled from "styled-components";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import ModalSort from "@/components/ModalSort";

export default function HomePage({ projects }) {
  const [modalSort, setModalSort] = useState(false);
  function handleSort() {
    setModalSort(true);
  }

  return (
    <>
      <StyledHeadline>DIY APP</StyledHeadline>
      <Navigation />
      <button type="button" onClick={handleSort}>
        sort projects by ...
      </button>
      <StyledSection>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            duration={project.duration}
            complexity={project.complexity}
            id={project.id}
          />
        ))}
      </StyledSection>
      {modalSort && <ModalSort />}
    </>
  );
}

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const StyledHeadline = styled.h1`
  text-align: center;
`;
