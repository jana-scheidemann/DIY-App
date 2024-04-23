import Project from "@/components/Project";
import SearchField from "@/components/SearchField";
import { StyledSection } from "@/components/StyledComponents/StyledSection";
import { StyledHeadlineH2 } from "@/components/StyledComponents/StyledHeadline";
import StyledErrorModal from "@/components/StyledComponents/StyledErrorModal";
import styled from "styled-components";
import Link from "next/link";

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
      <SearchField
        handleSearch={handleSearch}
        query={query}
        onSortComplexityStartHigh={onSortComplexityStartHigh}
        onSortComplexityStartLow={onSortComplexityStartLow}
        onSortDuration={onSortDuration}
        onFilterProjects={onFilterProjects}
        onResetFilters={onResetFilters}
      />
      <StyledHeadlineH2>Favorite Projects</StyledHeadlineH2>

      <StyledSection>
        {favoriteProjects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            slug={project.slug}
            duration={project.duration}
            complexity={project.complexity}
            id={project.id}
            onToggleFavorite={onToggleFavorite}
            isFavorite={project.favorite}
          />
        ))}
      </StyledSection>

      {favoriteProjects.length === 0 && (
        <StyledErrorModal>
          <p>Oooops. No results for your filter. Try again.</p>
          <StyledLink href={"/projects/favorites"} onClick={onResetFilters}>
            Back to all favorites
          </StyledLink>
        </StyledErrorModal>
      )}
    </>
  );
}

const StyledLink = styled(Link)`
  background-color: var(--background-color-blue);
  color: var(--text-color);
  text-decoration: none;
  padding: 0.5em;
  border-radius: 0.5em;
`;
