import { uid } from "uid";
import { useState } from "react";
import { initialProjects } from "@/db/data";
import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState(initialProjects);
  const [projectFilter, setProjectFilter] = useState({});

  function handleAddProject(newProject) {
    setProjects([{ id: uid(), ...newProject }, ...projects]);
  }
  function handleDeleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  const complexityOrder = { Beginner: 0, Intermediate: 1, Advanced: 2 };
  function handleSortProjectsByComplexityStartHigh() {
    setProjects(
      projects.toSorted((a, b) => {
        return complexityOrder[b.complexity] - complexityOrder[a.complexity];
      })
    );
  }
  function handleSortProjectsByComplexityStartLow() {
    setProjects(
      projects.toSorted((a, b) => {
        return complexityOrder[a.complexity] - complexityOrder[b.complexity];
      })
    );
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
  function handleSortProjectsByDuration(direction = "long") {
    setProjects(
      projects.toSorted((a, b) => {
        const durationA = durationToHours(a.duration);
        const durationB = durationToHours(b.duration);
        return direction === "long"
          ? durationB - durationA
          : durationA - durationB;
      })
    );
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

  function handleToggleFavorite(id) {
    setProjects(
      projects.map((project) =>
        project.id === id
          ? { ...project, favorite: !project.favorite }
          : project
      )
    );
  }
  function handleEditProject(updatedProject) {
    setProjects(
      projects.map((project) =>
        project.id === updatedProject.id ? updatedProject : project
      )
    );
  }

  return (
    <>
      <Navigation onAddProject={handleAddProject} />
      <GlobalStyle />
      <Component
        {...pageProps}
        projects={displayedProjects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onFilterProjects={handleProjectFilter}
        onResetFilters={resetProjectFilter}
        onSortProjectsByComplexityStartHigh={
          handleSortProjectsByComplexityStartHigh
        }
        onSortProjectsByComplexityStartLow={
          handleSortProjectsByComplexityStartLow
        }
        onSortProjectsByDuration={handleSortProjectsByDuration}
        onToggleFavorite={handleToggleFavorite}
        onEditProject={handleEditProject}
      />
    </>
  );
}
