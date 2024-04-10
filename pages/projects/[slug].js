import ProjectDetails from "@/components/ProjectDetails";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProjectDetailPage({
  projects,
  onDeleteProject,
  onToggleFavorite,
  onEditProject,
}) {
  const router = useRouter();
  const { slug } = router.query;

  const currentProject = projects.find((project) => project.slug === slug);

  if (!currentProject) {
    return null;
  }

  return (
    <>
      <ProjectDetails
        currentProject={currentProject}
        onDeleteProject={onDeleteProject}
        onToggleFavorite={onToggleFavorite}
        onEditProject={onEditProject}
      />
      <Link href={"/"}>← back to all projects</Link>
    </>
  );
}
