import styled from "styled-components";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";
import useSWR from "swr";

export default function Project({ onToggleFavorite, isFavorite }) {
  const { data, isLoading } = useSWR("/api/project");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  console.log("MONGO DATA:", data);

  return (
    <div>
      {data.map((project) => (
        <StyledArticle key={project._id}>
          <Link href={`/projects/${project.slug}`}>
            <h2>{project.title}</h2>
          </Link>
          <p>Duration: {project.duration}</p>
          <p>Complexity: {project.complexity}</p>
          <FavoriteButton
            _id={project._id}
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
          />
        </StyledArticle>
      ))}
    </div>
  );
}

const StyledArticle = styled.article`
  border: 1px solid black;
  padding: 0px 0px 0px 10px;
  width: 90vw;
`;
