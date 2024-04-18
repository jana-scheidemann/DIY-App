import { uid } from "uid";
import { useState } from "react";
import { initialProjects } from "@/db/data";
import GlobalStyle from "../styles";
import StyledGlobalContainer from "@/components/StyledComponents/StyledGlobalContainer";
import Link from "next/link";
import StyledModal from "@/components/StyledComponents/StyledModal";
import ModalSort from "@/components/ModalSort";
import ModalFilter from "@/components/ModalFilter";
import styled from "styled-components";
import Fuse from "fuse.js";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState(initialProjects);
  const [projectFilter, setProjectFilter] = useState({});
  const [modalSort, setModalSort] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [query, setQuery] = useState("");

  // --- ADD, DELETE, EDIT ---
  function handleAddProject(newProject) {
    setProjects([{ id: uid(), ...newProject }, ...projects]);
  }
  function handleDeleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }
  function handleEditProject(updatedProject) {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  }

  // --- SORT ---
  function toggleSortModal() {
    setModalSort(!modalSort);
  }

  const complexityOrder = { Beginner: 0, Intermediate: 1, Advanced: 2 };

  function handleSortComplexityStartHigh() {
    setProjects(
      projects.toSorted((a, b) => {
        return complexityOrder[b.complexity] - complexityOrder[a.complexity];
      })
    );
    toggleSortModal();
  }

  function handleSortComplexityStartLow() {
    setProjects(
      projects.toSorted((a, b) => {
        return complexityOrder[a.complexity] - complexityOrder[b.complexity];
      })
    );
    toggleSortModal();
  }

  function durationToHours(duration) {
    const durationValue = parseInt(duration);
    if (duration.toLowerCase() && duration.includes("hour")) {
      return durationValue;
    } else if (duration.toLowerCase() && duration.includes("day")) {
      return durationValue * 24;
    } else if (duration.toLowerCase() && duration.includes("week")) {
      return durationValue * 24 * 7;
    } else if (duration.toLowerCase() && duration.includes("month")) {
      return durationValue * 24 * 30;
    } else if (duration.toLowerCase() && duration.includes("year")) {
      return durationValue * 24 * 365;
    }
    return duration;
  }

  function handleSortDuration(direction) {
    setProjects(
      projects.toSorted((a, b) => {
        const durationA = durationToHours(a.duration);
        const durationB = durationToHours(b.duration);
        return direction === "long"
          ? durationB - durationA
          : durationA - durationB;
      })
    );
    toggleSortModal();
  }

  // --- FILTER ---
  function toggleFilterModal() {
    setModalFilter(!modalFilter);
  }
  function resetProjectFilter() {
    setProjectFilter({});
  }
  function handleProjectFilter(filterData) {
    setProjectFilter(filterData);
  }

  const filteredProjects = projects.filter((project) => {
    let durationMatch = true;
    if (projectFilter.duration) {
      if (projectFilter.duration === "short") {
        durationMatch = durationToHours(project.duration) <= 2;
      } else if (projectFilter.duration === "medium") {
        durationMatch =
          durationToHours(project.duration) > 2 &&
          durationToHours(project.duration) <= 23;
      } else if (projectFilter.duration === "long") {
        durationMatch = durationToHours(project.duration) > 23;
      }
    }

    let complexityMatch = true;
    if (projectFilter.complexity) {
      complexityMatch = project.complexity === projectFilter.complexity;
    }

    return durationMatch && complexityMatch;
  });

  const displayedProjects =
    Object.keys(projectFilter) === 0 ? projects : filteredProjects;

  // --- SEARCH ---
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

  // --- FAVORITE ---
  function handleToggleFavorite(id) {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, favorite: !project.favorite }
          : project
      )
    );
  }

  return (
    <>
      <StyledGlobalContainer
        onResetFilters={resetProjectFilter}
        onAddProject={handleAddProject}
        toggleSortModal={toggleSortModal}
        toggleFilterModal={toggleFilterModal}
        showSearchField={showSearchField}
      >
        <GlobalStyle />
        <Component
          {...pageProps}
          projects={displayedProjects}
          searchResults={searchResults}
          query={query}
          handleSearch={handleSearch}
          showSearchField={showSearchField}
          onDeleteProject={handleDeleteProject}
          onFilterProjects={handleProjectFilter}
          onResetFilters={resetProjectFilter}
          onToggleFavorite={handleToggleFavorite}
          onEditProject={handleEditProject}
        />

        {projects.length === 0 && (
          <StyledModal>
            <p>Oooops. No results for your filter. Try again.</p>
            <StyledLink href={"/"} onClick={onResetFilters}>
              Back to all Projects
            </StyledLink>
          </StyledModal>
        )}

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
            onFilterProjects={handleProjectFilter}
            onResetFilters={resetProjectFilter}
          />
        )}
      </StyledGlobalContainer>
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
