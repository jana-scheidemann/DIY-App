import styled from "styled-components";

export default function ProjectDetails({ currentProject }) {
  const { title, description, materials, duration, complexity, steps } =
    currentProject;

  return (
    <>
      <StyledProjectContainer>
        <StyledHeadline2>{title}</StyledHeadline2>
        <StyledProjectDetailsContainer>
          <p>Duration: {duration}</p>
          <p>Complexity: {complexity}</p>
        </StyledProjectDetailsContainer>
        <p>
          Description:
          <br /> {description}
        </p>
        <ul>
          Materials:
          <br />
          {materials.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
        <ol>
          Steps:
          <br />
          {steps.map((step) => (
            <li key={step.id}>{step.desc}</li>
          ))}
        </ol>
      </StyledProjectContainer>
    </>
  );
}

const StyledProjectContainer = styled.div`
  border: solid black;
  width: 80vw;
  padding: 2vw;
  margin: 5vw 10vw;
  border-radius: 5vw;
`;

const StyledHeadline2 = styled.h2`
  text-align: center;
`;

const StyledProjectDetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledList = styled.ol`
  align-self: self-start;
`;
