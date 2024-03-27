import ProjectDetails from "@/components/ProjectDetails";
import { initialProjects } from "@/db/data";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const currentProject = initialProjects.find(
    (initialProject) => initialProject.id.toString() === id
  );

  if (!currentProject) {
    return null;
  }

  return (
    <>
      <ProjectDetails currentProject={currentProject} />
      <Link href={"/"}>← back to all projects</Link>
    </>
  );
}
