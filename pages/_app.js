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
  function handleSortProjectsByComplexityStartHigh() {
    setProjects(
      projects.toSorted((a, b) => {
        const complexityOrder = { Advanced: 0, Intermediate: 1, Beginner: 2 };
        return complexityOrder[a.complexity] - complexityOrder[b.complexity];
      })
    );
  }
  function handleSortProjectsByComplexityStartLow() {
    setProjects(
      projects.toSorted((a, b) => {
        const complexityOrder = { Beginner: 0, Intermediate: 1, Advanced: 2 };
        return complexityOrder[a.complexity] - complexityOrder[b.complexity];
      })
    );
  }
  function handleSortProjectsByDurationStartLong() {
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
    setProjects(
      projects.sort((a, b) => {
        const durationA = durationToHours(a.duration);
        const durationB = durationToHours(b.duration);
        return durationB - durationA;
      })
    );
  }
  function handleSortProjectsByDurationStartShort() {
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
    setProjects(
      projects.sort((a, b) => {
        const durationA = durationToHours(a.duration);
        const durationB = durationToHours(b.duration);
        return durationA - durationB;
      })
    );
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
      />
    </>
  );
}
