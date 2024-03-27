import ProjectDetails from "@/components/ProjectDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProjectDetailPage({ projects, setProjects }) {
  const router = useRouter();
  const { id } = router.query;

  const currentProject = projects.find((project) => project.id === id);

  if (!currentProject) {
    return null;
  }

  function deleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  return (
    <>
      <ProjectDetails
        currentProject={currentProject}
        onDelete={deleteProject}
      />
      <Link href={"/"}>← back to all projects</Link>
    </>
  );
}
