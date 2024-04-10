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

  const fuse = new Fuse(projects, {
    keys: ["title", "description", "materials", "steps.desc"],
    includeScore: true,
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
      <Navigation onAddProject={onAddProject} />

      <button type="button" onClick={toogleSortModal}>
        sort projects by ...
      </button>
      {modalSort && (
        <ModalSort
          onToogleSortModal={toogleSortModal}
          onSortComplexityStartHigh={handleSortComplexityStartHigh}
          onSortComplexityStartLow={handleSortComplexityStartLow}
          onSortDuration={handleSortDuration}
        />
      )}

      <button type="button" onClick={toogleFilterModal}>
        filter projects by ...
      </button>
      {modalFilter && (
        <ModalFilter
          onToggleFilterModal={toogleFilterModal}
          onFilterProjects={onFilterProjects}
        />
      )}
      <button type="button" onClick={onResetFilters}>
        reset filter
      </button>
      <span>{projects.length} projects</span>
      <br />
      <label htmlFor="search">Search: </label>
      <input
        type="search"
        id="search"
        name="search"
        value={query}
        onChange={handleSearch}
      ></input>


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
