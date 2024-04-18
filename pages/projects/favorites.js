import styled from "styled-components";
import Project from "@/components/Project";
import SearchField from "@/components/SearchField";

export default function FavoritesPage({
  searchResults,
  handleSearch,
  query,
  onSortComplexityStartHigh,
  onSortComplexityStartLow,
  onSortDuration,
  onToggleFavorite,
  onFilterProjects,
  onResetFilters,
}) {
  const favoriteProjects = searchResults.filter((project) => {
    return project.favorite;
  });

  return (
    <>
      <StyledHeadline>Favorite Projects</StyledHeadline>

      <SearchField
        handleSearch={handleSearch}
        query={query}
        onSortComplexityStartHigh={onSortComplexityStartHigh}
        onSortComplexityStartLow={onSortComplexityStartLow}
        onSortDuration={onSortDuration}
        onFilterProjects={onFilterProjects}
        onResetFilters={onResetFilters}
      />

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

const StyledHeadline = styled.h2`
  text-align: center;
`;
