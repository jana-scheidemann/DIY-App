import GlobalStyle from "../styles";
import { useState } from "react";
import { initialProjects } from "@/db/data";
import { uid } from "uid";

const complexityOrder = {
  Beginner: 1,
  Intermediate: 2,
  Advanced: 3,
};

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState(initialProjects);
  const [projectFilter, setProjectFilter] = useState({});

  function handleSortProjects(field, direction) {
    const sortedProjects = [...projects].sort((a, b) => {
      let valueA = field === "duration" ? durationToHours(a[field]) : a[field];
      let valueB = field === "duration" ? durationToHours(b[field]) : b[field];

      if (field === "complexity") {
        valueA = complexityOrder[valueA];
        valueB = complexityOrder[valueB];
      }

      return direction === "asc" ? valueA - valueB : valueB - valueA;
    });

    setProjects(sortedProjects);
  }

  function resetProjectFilter() {
    setProjectFilter({});
    setProjects(initialProjects);
  }

  function handleProjectFilter(filterData) {
    setProjectFilter(filterData);
  }

  const filteredProjects = projects.filter((project) => {
    // Ist true, falls kein Dauerfilter gesetzt ist
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

    // ist true, falls kein Komplexitätsfilter gesetzt ist
    let complexityMatch = true;
    if (projectFilter.complexity) {
      complexityMatch = project.complexity === projectFilter.complexity;
    }

    // return projects die beiden Kriterien entsprechen
    return durationMatch && complexityMatch;
  });

  function handleAddProject(newProject) {
    setProjects([{ id: uid(), ...newProject }, ...projects]);
  }
  function handleDeleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  // besser function declaration wegen hoisting
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

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        // use filteredProjects
        projects={filteredProjects}
        onAddProject={handleAddProject}
        onDeleteProject={handleDeleteProject}
        onFilterProjects={handleProjectFilter}
        onResetFilters={resetProjectFilter}
        onSortProjects={handleSortProjects}
      />
    </>
  );
}
