import styled from "styled-components";
import Navigation from "@/components/Navigation";
import Project from "@/components/Project";

export default function FavoritesPage({ projects, onToggleFavorite }) {
  const favoriteProjects = projects.filter((project) => {
    return project.favorite;
  });

  //white space at bottom of page/ GlobalStyledContainer?

  return (
    <>
      <StyledHeadline>Favorite Projects</StyledHeadline>
      <Navigation />
      <StyledSection>
        {favoriteProjects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            slug={project.slug}
            duration={project.duration}
            complexity={project.complexity}
            id={project.id}
            onToggleFavorite={onToggleFavorite}
            isFavorite={project.favorite}
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
