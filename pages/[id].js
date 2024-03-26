import { useRouter } from "next/router";
import ProjectDetails from "@/components/ProjectDetails";

export default function ProjectDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  return <ProjectDetails />;
}
