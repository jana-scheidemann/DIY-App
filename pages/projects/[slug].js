import ProjectDetails from "@/components/ProjectDetails";
import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

export default function ProjectDetailPage({
  onDeleteProject,
  onToggleFavorite,
  onEditProject,
}) {
  const { data, isLoading } = useSWR("/api/project");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  const router = useRouter();
  const { slug } = router.query;

  const currentProject = data.find((project) => project.slug === slug);

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
