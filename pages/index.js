import Project from "@/components/Project";
import styled from "styled-components";
import SearchField from "@/components/SearchField";
import { StyledSection } from "@/components/StyledComponents/StyledSection";

export default function HomePage({
  handleSearch,
  query,
  onSortComplexityStartHigh,
  onSortComplexityStartLow,
  onSortDuration,
  searchResults,
  onToggleFavorite,
  onFilterProjects,
  onResetFilters,
}) {
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

      <StyledSection>
        {searchResults.map((project) => (
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
    </>
  );
}
