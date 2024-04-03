import GlobalStyle from "../styles";
import { useState } from "react";
import { initialProjects } from "@/db/data";
import { uid } from "uid";

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState(initialProjects);
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

  const durationToHours = (duration) => {
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
  };
  function handleSortProjectsByDurationStartLong() {
    setProjects(
      projects.sort((a, b) => {
        const durationA = durationToHours(a.duration);
        const durationB = durationToHours(b.duration);
        return durationB - durationA;
      })
    );
  }
  function handleSortProjectsByDurationStartShort() {
    setProjects(
      projects.sort((a, b) => {
        const durationA = durationToHours(a.duration);
        const durationB = durationToHours(b.duration);
        return durationA - durationB;
      })
    );
  }

  function handleFilterProjects(filterData) {
    let filteredProjects = projects;

    if (filterData.duration === "short") {
      filteredProjects = filteredProjects.filter(
        (project) => durationToHours(project.duration) <= 2
      );
    } else if (filterData.duration === "medium") {
      filteredProjects = filteredProjects.filter(
        (project) =>
          durationToHours(project.duration) > 2 &&
          durationToHours(project.duration) <= 23
      );
    } else if (filterData.duration === "long") {
      filteredProjects = filteredProjects.filter(
        (project) => durationToHours(project.duration) > 23
      );
    }

    if (filterData.complexity) {
      filteredProjects = filteredProjects.filter(
        (project) => project.complexity === filterData.complexity
      );
    }

    setProjects(filteredProjects);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        projects={projects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onSortProjectsByComplexityStartHigh={
          handleSortProjectsByComplexityStartHigh
        }
        onSortProjectsByComplexityStartLow={
          handleSortProjectsByComplexityStartLow
        }
        onSortProjectsByDurationStartLong={
          handleSortProjectsByDurationStartLong
        }
        onSortProjectsByDurationStartShort={
          handleSortProjectsByDurationStartShort
        }
        onFilterProjects={handleFilterProjects}
      />
    </>
  );
}
