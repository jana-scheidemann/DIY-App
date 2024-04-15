import styled from "styled-components";
import Navigation from "@/components/Navigation";
import Project from "@/components/Project";
import useSWR from "swr";

export default function FavoritesPage({ onToggleFavorite }) {
  const { data, error } = useSWR("/api/project");

  if (!data && !error) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  return (
    <>
      <StyledHeadline>Favorite Projects</StyledHeadline>
      <Navigation />
      <StyledSection>
        {data
          .filter((project) => project.favorite)
          .map((project) => (
            <Project
              key={project._id}
              title={project.title}
              slug={project.slug}
              duration={project.duration}
              complexity={project.complexity}
              id={project._id}
              onToggleFavorite={onToggleFavorite}
              isFavorite={true}
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
