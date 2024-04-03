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
  onSortProjects,
}) {
  const [modalSort, setModalSort] = useState(false);
  const [modalFilter, setModalFilter] = useState(false);

  // kann in einer Funktion zusammengefasst werden, die den State toggled.
  function toogleFilterModal() {
    setModalFilter(!modalFilter);
  }

  // Das gleiche gilt auch für den sort state :)
  function toogleSortModal() {
    setModalSort(!modalSort);
  }

  // in eine Function zusammenfassen
  function handleSort(callback) {
    callback();
    toogleSortModal();
  }

  return (
    <>
      <StyledHeadline>DIY APP</StyledHeadline>
      <Navigation />

      <StyledButtonGroup>
        <button type="button" onClick={toogleSortModal}>
          sort projects by ...
        </button>
        {modalSort && (
          <ModalSort
            onSortProjects={onSortProjects}
            onCancelSort={toogleSortModal}
            onSortComplexityStartHigh={() =>
              handleSort(onSortProjectsByComplexityStartHigh)
            }
            onSortComplexityStartLow={() =>
              handleSort(onSortProjectsByComplexityStartLow)
            }
            onSortDurationStartLong={() =>
              handleSort(onSortProjectsByDurationStartLong)
            }
            onSortDurationStartShort={() =>
              handleSort(onSortProjectsByDurationStartShort)
            }
          />
        )}

        <button type="button" onClick={toogleFilterModal}>
          filter projects by ...
        </button>
        {modalFilter && (
          <ModalFilter
            onToggleFilterModal={toogleFilterModal}
            // prob besser umschreiben - weil submit findet im form statt
            onFilterProjects={onFilterProjects}
          />
        )}

        <button type="button" onClick={onResetFilters}>
          reset filter
        </button>

        <span>{projects.length} projects</span>
      </StyledButtonGroup>

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

// selbe Component wie aus ModalFilter - könnte als ausgelagert werden
const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem;
`;
