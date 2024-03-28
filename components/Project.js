import styled from "styled-components";
import Link from "next/link";

export default function Project({ title, duration, complexity, id }) {
  return (
    <StyledArticle>
      <Link href={`/${id}`}>
        <h2>{title}</h2>
      </Link>
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
