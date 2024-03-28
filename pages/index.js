import Project from "@/components/Project";
import styled from "styled-components";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import ModalSort from "@/components/ModalSort";

export default function HomePage({
  projects,
  onSortProjectsByComplexityStartHigh,
  onSortProjectsByComplexityStartLow,
  onSortProjectsByDurationStartLong,
  onSortProjectsByDurationStartShort,
}) {
  const { complexity, duration } = projects;
  const [modalSort, setModalSort] = useState(false);
  function handleSort() {
    setModalSort(true);
  }

  function handleCancelSort() {
    setModalSort(false);
  }

  function handleSortComplexityStartHigh() {
    onSortProjectsByComplexityStartHigh(complexity);
    setModalSort(false);
  }

  function handleSortComplexityStartLow() {
    onSortProjectsByComplexityStartLow(complexity);
    setModalSort(false);
  }

  function handleSortDurationStartLong() {
    onSortProjectsByDurationStartLong(duration);
    setModalSort(false);
  }

  function handleSortDurationStartShort() {
    onSortProjectsByDurationStartShort(duration);
    setModalSort(false);
  }

  return (
    <>
      <StyledHeadline>DIY APP</StyledHeadline>
      <Navigation />
      <button type="button" onClick={handleSort}>
        sort projects by ...
      </button>
      {modalSort && (
        <ModalSort
          onCancelSort={handleCancelSort}
          onSortComplexityStartHigh={handleSortComplexityStartHigh}
          onSortComplexityStartLow={handleSortComplexityStartLow}
          onSortDurationStartLong={handleSortDurationStartLong}
          onSortDurationStartShort={handleSortDurationStartShort}
        />
      )}
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
