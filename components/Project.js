import styled from "styled-components";
export default function Project({ title, duration, complexity }) {
  return (
    <StyledArticle>
      <h3>{title}</h3>
      <p>Duration: {duration}</p>
      <p>Complexity: {complexity}</p>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  border: 1px solid black;
  margin: 10px;
  padding: 0px 0px 0px 10px;
  width: 90vw;
`;
