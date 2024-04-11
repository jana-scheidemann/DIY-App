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
      <StyledLink href={`/projects/${slug}`}>
        <StyledHeadline>{title}</StyledHeadline>
      </StyledLink>
      <StyledParagraph>Duration: {duration}</StyledParagraph>
      <StyledParagraph>Complexity: {complexity}</StyledParagraph>
      <FavoriteButton
        id={id}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  background-color: white;
  //border: 1px solid black;
  border-radius: 20px;
  width: 90vw;
  transform: scale(0.9);
  transition: 0.3s;
  &:hover {
    transform: scale(1);
    transition: 0.5s;
  }
`;

const StyledLink = styled(Link)`
  background-color: var(--background-color-blue);
  color: var(--text-color);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
const StyledHeadline = styled.h2`
  //text-align: center;
  font-size: 20px;
  color: #282828;
  margin: 7px;
  text-decoration: none;
`;
const StyledParagraph = styled.p`
  text-align: left;
  font-size: 15px;
  color: #282828;
  margin: 7px;
  text-decoration: none;
`;
