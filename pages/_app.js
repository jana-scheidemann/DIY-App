import { uid } from "uid";
import { useState } from "react";
import { initialProjects } from "@/db/data";
import GlobalStyle from "../styles";
import Navigation from "../components/Navigation";
import { SWRConfig } from "swr";
import { useRouter } from "next/router";
import { mutate } from "swr";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function App({ Component, pageProps }) {
  const [projects, setProjects] = useState(initialProjects);
  const [projectFilter, setProjectFilter] = useState({});
  const router = useRouter();
  const { data, isLoading } = useSWR("/api/project");

  // function handleAddProject(newProject) {
  //   setProjects([{ id: uid(), ...newProject }, ...projects]);
  // }

  async function handleAddProject(id) {
    const response = await fetch(`/api/project/${id}`, { method: "DELETE" });

    if (!response.ok) {
      return;
    }
    router.push("/");
  }

  async function handleEditProject(updatedProject) {
    const id = updatedProject._id;

    mutate(
      `/api/project`,
      projects.map((project) =>
        project._id === id ? updatedProject : project
      ),
      false
    );

    const response = await fetch(`/api/project/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProject),
    });

    if (response.ok) {
      mutate("/api/project");
      const slug = updatedProject.title.toLowerCase().replace(/ /g, "-");
      router.push(`/projects/${slug}`);
    } else {
      mutate("/api/project");
    }
  }

  async function handleDeleteProject(id) {
    const response = await fetch(`/api/project/${id}`, { method: "DELETE" });

    if (!response.ok) {
      return;
    }
    router.push("/");
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

  async function handleToggleFavorite(_id) {
    const projectToUpdate = data.find((project) => project._id === _id);
    console.log("PROJECT TO UPDATE: ", projectToUpdate);
    if (!projectToUpdate) return;

    const updatedProject = {
      ...projectToUpdate,
      favorite: !projectToUpdate.favorite,
    };

    console.log("FAV TO UPDATE: ", updatedProject);

    try {
      const response = await fetch(`/api/project/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProject),
      });

      if (response.ok) {
        mutate(
          `/api/project`,
          projects.map((project) =>
            project._id === _id ? updatedProject : project
          ),
          false
        );

        mutate("/api/project");
      } else {
        throw new Error("Failed to update favorite status");
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <>
      <Navigation onAddProject={handleAddProject} />
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
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
      </SWRConfig>
    </>
  );
}
