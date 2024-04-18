import Project from "@/components/Project";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import ModalSort from "@/components/ModalSort";
import ModalFilter from "@/components/ModalFilter";
import Fuse from "fuse.js";
import { StyledSection } from "@/components/StyledComponents/StyledSection";
import {
  StyledInputSearch,
  StyledInputSearchField,
} from "@/components/StyledComponents/StyledInput";

export default function HomePage({
  projects,
  onFilterProjects,
  onResetFilters,
  onSortProjectsByComplexityStartHigh,
  onSortProjectsByComplexityStartLow,
  onSortProjectsByDuration,
  onToggleFavorite,
  onAddProject,
}) {
  const [modalSort, setModalSort] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);
  const [query, setQuery] = useState("");
  const [isHidden, setIsHidden] = useState(true);

  function toggleSortModal() {
    setModalSort(!modalSort);
  }

  function handleSortComplexityStartHigh() {
    onSortProjectsByComplexityStartHigh();
    toggleSortModal();
  }
  function handleSortComplexityStartLow() {
    onSortProjectsByComplexityStartLow();
    toggleSortModal();
  }
  function handleSortDuration(direction) {
    onSortProjectsByDuration(direction);
    toggleSortModal();
  }

  function toggleFilterModal() {
    setModalFilter(!modalFilter);
  }

  function showSearchField() {
    setIsHidden(!isHidden);
  }

  const fuse = new Fuse(projects, {
    keys: ["title", "description", "materials", "steps.desc"],
    includeScore: true,
    threshold: 0.3,
    shouldSort: true,
    ignoreLocation: true,
    ignoreFieldNorm: true,
  });
  const results = fuse.search(query);
  const searchResults = query ? results.map((result) => result.item) : projects;

  function handleSearch(event) {
    const { value } = event.target;
    setQuery(value);
  }

  return (
    <>
      <Navigation
        onAddProject={onAddProject}
        toggleSortModal={toggleSortModal}
        toggleFilterModal={toggleFilterModal}
        showSearchField={showSearchField}
      />

      {modalSort && (
        <ModalSort
          onToggleSortModal={toggleSortModal}
          onSortComplexityStartHigh={handleSortComplexityStartHigh}
          onSortComplexityStartLow={handleSortComplexityStartLow}
          onSortDuration={handleSortDuration}
        />
      )}

      {modalFilter && (
        <ModalFilter
          toggleFilterModal={toggleFilterModal}
          onFilterProjects={onFilterProjects}
          onResetFilters={onResetFilters}
        />
      )}
      <StyledInputSearch>
        <label htmlFor="search" hidden={isHidden} />
        <StyledInputSearchField
          type="search"
          hidden={isHidden}
          id="search"
          name="search"
          size={30}
          placeholder="search for title, material etc."
          value={query}
          onChange={handleSearch}
        />
      </StyledInputSearch>

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
