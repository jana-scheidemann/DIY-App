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
      <StyledProjectTitleContainer>
      <StyledLink href={`/projects/${slug}`}>
        <StyledHeadline>{title}</StyledHeadline>
      </StyledLink>
      <FavoriteButton
        id={id}
        onToggleFavorite={onToggleFavorite}
        isFavorite={isFavorite}
      />
     </StyledProjectTitleContainer>
     
      <StyledParagraph>Duration: {duration}</StyledParagraph>
      <StyledParagraph>Complexity: {complexity}</StyledParagraph>
   
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
  color: var(--text-color);
  border-radius: 10px;
  text-decoration: none;
`;
const StyledHeadline = styled.h2`
  //text-align: center;
  font-size: 20px;
  color: #282828;
  margin: 7px;
  `;

const StyledParagraph = styled.p`
  text-align: left;
  font-size: 15px;
  color: #282828;
  margin: 7px;
  text-decoration: none;
`;
const StyledProjectTitleContainer = styled.div`
  background-color: var(--background-color-blue);
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
