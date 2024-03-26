import { initialProjects } from "@/db/data";
import Project from "@/components/Project";
import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledHeadline>DIY APP</StyledHeadline>
      <StyledSection>
        {initialProjects.map((initialProject) => (
          <Project
            key={initialProject.id}
            title={initialProject.title}
            duration={initialProject.duration}
            complexity={initialProject.complexity}
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
`;

const StyledHeadline = styled.h1`
  text-align: center;
`;
