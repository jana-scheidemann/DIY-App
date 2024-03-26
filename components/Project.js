import styled from "styled-components";
export default function Project({ title, duration, complexity }) {
  return (
    <StyledArticle>
      <h2>{title}</h2>
      <p>Duration: {duration}</p>
      <p>Complexity: {complexity}</p>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  border: 1px solid black;
  padding: 0px 0px 0px 10px;
  width: 90vw;
`;
