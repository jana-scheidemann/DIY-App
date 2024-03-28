import Project from "@/components/Project";
import styled from "styled-components";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import ModalSort from "@/components/ModalSort";
import ModalFilter from "@/components/ModalFilter";

export default function HomePage({
  projects,
  onSortProjectsByComplexityStartHigh,
  onSortProjectsByComplexityStartLow,
  onSortProjectsByDurationStartLong,
  onSortProjectsByDurationStartShort,
}) {
  const [modalSort, setModalSort] = useState(false);
  function handleSort() {
    setModalSort(true);
  }
  function handleCancelSort() {
    setModalSort(false);
  }
  function handleSortComplexityStartHigh() {
    onSortProjectsByComplexityStartHigh();
    setModalSort(false);
  }
  function handleSortComplexityStartLow() {
    onSortProjectsByComplexityStartLow();
    setModalSort(false);
  }
  function handleSortDurationStartLong() {
    onSortProjectsByDurationStartLong();
    setModalSort(false);
  }
  function handleSortDurationStartShort() {
    onSortProjectsByDurationStartShort();
    setModalSort(false);
  }

  const [modalFilter, setModalFilter] = useState(false);
  function handleFilter() {
    setModalFilter(true);
  }
  function handleCancelFilter() {
    setModalFilter(false);
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

      <button type="button" onClick={handleFilter}>
        filter projects by ...
      </button>
      {modalFilter && <ModalFilter onCancelFilter={handleCancelFilter} />}

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
