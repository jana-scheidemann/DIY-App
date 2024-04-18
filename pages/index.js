import Project from "@/components/Project";
import styled from "styled-components";
import { useState } from "react";
import Fuse from "fuse.js";
import { StyledSection } from "@/components/StyledComponents/StyledSection";
import {
  StyledInputSearch,
  StyledInputSearchField,
} from "@/components/StyledComponents/StyledInput";

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
      <StyledInputSearch htmlFor="search" hidden={isHidden}>
        <StyledInputSearchField
          type="search"
          hidden={isHidden}
          id="search"
          name="search"
          size={30}
          placeholder="search for title, material etc."
          value={query}
          onChange={handleSearch}
        />
      </StyledInputSearch>

      <StyledSection>
        {searchResults.map((project) => (
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

const StyledSearchField = styled.article`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
