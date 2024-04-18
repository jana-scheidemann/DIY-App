import Project from "@/components/Project";
import styled from "styled-components";
import SearchField from "@/components/SearchField";

export default function HomePage({
  handleSearch,
  query,
  searchResults,
  onToggleFavorite,
}) {
  return (
    <>
      <SearchField handleSearch={handleSearch} query={query} />
      <StyledSection>
        {searchResults.map((project) => (
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
  margin: 10px;
  background-color: var(--background-color);
  border-radius: 20px;
`;
