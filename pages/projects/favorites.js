import Project from "@/components/Project";
import { StyledSection } from "@/components/StyledComponents/StyledSection";
import { StyledInputSearchDummy } from "@/components/StyledComponents/StyledInput";

export default function FavoritesPage({ projects, onToggleFavorite }) {
  const favoriteProjects = projects.filter((project) => {
    return project.favorite;
  });

  return (
    <>
      <StyledInputSearchDummy />

      <StyledSection>
        {favoriteProjects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            slug={project.slug}
            duration={project.duration}
            complexity={project.complexity}
            id={project.id}
            onToggleFavorite={onToggleFavorite}
            isFavorite={project.favorite}
          />
        ))}
      </StyledSection>
    </>
  );
}
