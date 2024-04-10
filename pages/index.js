import Project from "@/components/Project";
import styled from "styled-components";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import ModalSort from "@/components/ModalSort";
import ModalFilter from "@/components/ModalFilter";
import Fuse from "fuse.js";

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

  function toogleSortModal() {
    setModalSort(!modalSort);
  }

  function handleSortComplexityStartHigh() {
    onSortProjectsByComplexityStartHigh();
    toogleSortModal();
  }
  function handleSortComplexityStartLow() {
    onSortProjectsByComplexityStartLow();
    toogleSortModal();
  }
  function handleSortDuration(direction) {
    onSortProjectsByDuration(direction);
    toogleSortModal();
  }

  function toogleFilterModal() {
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
  console.log("results: ", results);
  const searchResults = query ? results.map((result) => result.item) : projects;

  function handleSearch(event) {
    const { value } = event.target;
    setQuery(value);
  }

  return (
    <>
      <StyledHeadline>DIY APP</StyledHeadline>
      <Navigation
        onAddProject={onAddProject}
        toogleSortModal={toogleSortModal}
        toogleFilterModal={toogleFilterModal}
        showSearchField={showSearchField}
      />

      {modalSort && (
        <ModalSort
          onToogleSortModal={toogleSortModal}
          onSortComplexityStartHigh={handleSortComplexityStartHigh}
          onSortComplexityStartLow={handleSortComplexityStartLow}
          onSortDuration={handleSortDuration}
        />
      )}

      {modalFilter && (
        <ModalFilter
          toogleFilterModal={toogleFilterModal}
          onFilterProjects={onFilterProjects}
          onResetFilters={onResetFilters}
        />
      )}
      <StyledSearchField>
        <label htmlFor="search" hidden={isHidden}>
          Search
        </label>
        <input
          type="search"
          hidden={isHidden}
          id="search"
          name="search"
          size={30}
          placeholder="... for title, material etc."
          value={query}
          onChange={handleSearch}
        ></input>
      </StyledSearchField>

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
`;

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledSearchField = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
