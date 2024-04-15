import Project from "@/components/Project";
import styled from "styled-components";
import Navigation from "@/components/Navigation";
import { useState } from "react";
import ModalSort from "@/components/ModalSort";
import ModalFilter from "@/components/ModalFilter";
import ModalAdd from "@/components/ModalAdd";
import { useRouter } from "next/router";
import useSWR from "swr";

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
  const [modalAdd, setModalAdd] = useState(false);

  const router = useRouter();
  const { data, isLoading } = useSWR("/api/project");

  if (isLoading) {
    return <div>Loading data...</div>;
  }

  if (!data) return null;

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

  function toggleAddModal() {
    router.push("/");
    setModalAdd(!modalAdd);
    // setIsNavigationOpen(!isNavigationOpen);
  }

  return (
    <>
      <StyledHeadline>DIY APP</StyledHeadline>
      <Navigation
        onAddProject={onAddProject}
        handletoggleModalAdd={toggleAddModal}
      />
      {modalAdd && (
        <ModalAdd
          onAddProject={onAddProject}
          onToggleAddModal={toggleAddModal}
        />
      )}

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

      <StyledSection>
        <Project onToggleFavorite={onToggleFavorite} />
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
