import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

export default function Project({
  title,
  slug,
  duration,
  complexity,
  id,
  onToggleFavorite,
  isFavorite,
}) {
  return (
    <StyledArticle>
      <Link href={`/projects/${slug}`}>
        <h2>{title}</h2>
      </Link>
      <p>Duration: {duration}</p>
      <p>Complexity: {complexity}</p>
      <FavoriteButton
        id={id}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  border: 1px solid black;
  padding: 0px 0px 0px 10px;
  width: 90vw;
`;
