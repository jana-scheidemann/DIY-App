import Project from "@/components/Project";
import styled from "styled-components";
import Navigation from "@/components/Navigation";

export default function HomePage({ projects }) {
  return (
    <>
      <StyledHeadline>DIY APP</StyledHeadline>
      <Navigation />
      <StyledSection>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            duration={project.duration}
            complexity={project.complexity}
          />
        ))}
      </StyledSection>
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
