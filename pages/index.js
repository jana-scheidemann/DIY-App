import Project from "@/components/Project";
import styled from "styled-components";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import ModalSort from "@/components/ModalSort";
import ModalFilter from "@/components/ModalFilter";

export default function HomePage({
  projects,
  onFilterProjects,
  onResetFilters,
  onSortProjectsByComplexityStartHigh,
  onSortProjectsByComplexityStartLow,
  onSortProjectsByDurationStartLong,
  onSortProjectsByDurationStartShort,
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
  function handleSortDurationStartLong() {
    onSortProjectsByDurationStartLong();
    toogleSortModal();
  }
  function handleSortDurationStartShort() {
    onSortProjectsByDurationStartShort();
    toogleSortModal();
  }

  function toogleFilterModal() {
    setModalFilter(!modalFilter);
  }

  return (
    <>
      <StyledHeadline>DIY APP</StyledHeadline>
      <Navigation />

      <button type="button" onClick={toogleSortModal}>
        sort projects by ...
      </button>
      {modalSort && (
        <ModalSort
          onToogleSortModal={toogleSortModal}
          onSortComplexityStartHigh={handleSortComplexityStartHigh}
          onSortComplexityStartLow={handleSortComplexityStartLow}
          onSortDurationStartLong={handleSortDurationStartLong}
          onSortDurationStartShort={handleSortDurationStartShort}
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

      <StyledSection>
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            duration={project.duration}
            complexity={project.complexity}
            id={project.id}
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
