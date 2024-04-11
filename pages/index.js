import Project from "@/components/Project";
import styled from "styled-components";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import ModalSort from "@/components/ModalSort";
import ModalFilter from "@/components/ModalFilter";
import StyledButton from "@/components/StyledComponents.js/StyledButtons";

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

  return (
    <>
      <StyledHeadline>DIY APP</StyledHeadline>
      <Navigation onAddProject={onAddProject} />
      <div style={{ display: "flex" }}>
        <StyledButton type="button" onClick={toogleSortModal}>
          Sort Projects
        </StyledButton>

        {modalSort && (
          <ModalSort
            onToogleSortModal={toogleSortModal}
            onSortComplexityStartHigh={handleSortComplexityStartHigh}
            onSortComplexityStartLow={handleSortComplexityStartLow}
            onSortDuration={handleSortDuration}
          />
        )}

        <StyledButton type="button" onClick={toogleFilterModal}>
          Filter Projects
        </StyledButton>
        {modalFilter && (
          <ModalFilter
            onToggleFilterModal={toogleFilterModal}
            onFilterProjects={onFilterProjects}
          />
        )}
        <StyledButton type="button" onClick={onResetFilters}>
          Reset Filter
        </StyledButton>
      </div>

      <StyledProjectsDiv>{projects.length} Projects</StyledProjectsDiv>

      <StyledSection>
        {projects.map((project) => (
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

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledProjectsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px;
  font-size: 14px;
  font-weight: bold;
  color: black;
`;
