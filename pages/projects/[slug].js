import ProjectDetails from "@/components/ProjectDetails";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

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
    </>
  );
}
const StyledLink = styled(Link)`
  background-color: var(--background-color-blue);
  color: var(--text-color);
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  padding: 5px;
  margin: 5px 0;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
