import Project from "@/components/Project";
import styled from "styled-components";
import { useState } from "react";
import Fuse from "fuse.js";

export default function HomePage({ projects, onToggleFavorite, isHidden }) {
  const [query, setQuery] = useState("");

  const fuse = new Fuse(projects, {
    keys: ["title", "description", "materials", "steps.desc"],
    includeScore: true,
    threshold: 0.3,
    shouldSort: true,
    ignoreLocation: true,
    ignoreFieldNorm: true,
  });
  const results = fuse.search(query);
  const searchResults = query ? results.map((result) => result.item) : projects;

  function handleSearch(event) {
    const { value } = event.target;
    setQuery(value);
  }

  return (
    <>
      <StyledSearchField>
        <label htmlFor="search" hidden={isHidden}>
          Search
        </label>
        <input
          type="search"
          hidden={isHidden}
          id="search"
          name="search"
          size={30}
          placeholder="... for title, material etc."
          value={query}
          onChange={handleSearch}
        />
      </StyledSearchField>

      <StyledSection>
        {searchResults.map((project) => (
          <Project
            key={project.id}
            title={project.title}
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

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 10px;
  background-color: var(--background-color);
  border-radius: 20px;
`;

const StyledSearchField = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
