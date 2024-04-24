import Project from "@/components/Project";
import SearchField from "@/components/SearchField";
import { StyledSection } from "@/components/StyledComponents/StyledSection";
import StyledErrorModal from "@/components/StyledComponents/StyledErrorModal";
import styled from "styled-components";
import Link from "next/link";
import { StyledButtonLink } from "@/components/StyledComponents/StyledButton";

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

      <StyledFavoriteHeader>
        <StyledFavoriteHeadline>Favorite Projects</StyledFavoriteHeadline>
      </StyledFavoriteHeader>

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
          <p>
            No results found. <br /> Please adjust your filter settings.
          </p>
          <StyledButtonLink
            href={"/projects/favorites"}
            onClick={onResetFilters}
          >
            Back to favorites
          </StyledButtonLink>
          <StyledButtonLink href={"/"}>Home</StyledButtonLink>
        </StyledErrorModal>
      )}
    </>
  );
}

const StyledFavoriteHeader = styled.article`
  margin: 0px 0px 20px 25px;
`;

const StyledFavoriteHeadline = styled.h3`
  font-size: 2.3em;
  font-weight: 500;
  margin: 7px;
`;
