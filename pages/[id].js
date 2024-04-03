import ProjectDetails from "@/components/ProjectDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProjectDetailPage({
  projects,
  onDeleteProject,
  onToggleFavorite,
}) {
  const router = useRouter();
  const { id } = router.query;

  const currentProject = projects.find((project) => project.id === id);

  if (!currentProject) {
    return null;
  }

  return (
    <>
      <ProjectDetails
        currentProject={currentProject}
        onDeleteProject={onDeleteProject}
        onToggleFavorite={onToggleFavorite}
      />
      <Link href={"/"}>← back to all projects</Link>
    </>
  );
}
