import styled from "styled-components";
import { useState } from "react";
import router from "next/router";
import Image from "next/image";
import ModalDelete from "@/components/ModalDelete";
import ModalEdit from "@/components/ModalEdit";
import FavoriteButton from "./FavoriteButton";
import { StyledButtonLink } from "./StyledComponents/StyledButton";
import { StyledButton } from "./StyledComponents/StyledButton";
import {
  StyledArticle,
  StyledArticleHeadlineH2,
  StyledArticleHeadlineH3,
  StyledArticleDescription,
  StyledArticleTags,
  StyledArticleTag,
  StyledArticleTagDescription,
} from "./StyledComponents/StyledArticle";
import { StyledInputSearchDummy } from "./StyledComponents/StyledInput";
import StyledButton from "./StyledComponents/StyledButtons";
import Link from "next/link";

export default function ProjectDetails({
  currentProject,
  onDeleteProject,
  onToggleFavorite,
  onEditProject,
}) {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const {
    id,
    title,
    description,
    materials,
    duration,
    complexity,
    steps,
    image,
  } = currentProject;

  function handleEdit() {
    setModalEdit(true);
  }

  function handleEditCancel() {
    setModalEdit(false);
  }

  function handleEditConfirm(updatedProject) {
    setModalEdit(false);
    onEditProject(updatedProject);
  }

  function handleDelete() {
    setModalDelete(true);
  }

  function handleDeleteCancel() {
    setModalDelete(false);
  }

  function handleDeleteConfirm() {
    onDeleteProject(id);
    setModalDelete(false);
    router.push("/");
  }

  return (
    <>
      <StyledInputSearchDummy />

      <StyledArticle>
        <StyledArticleHeadlineH2>{title}</StyledArticleHeadlineH2>
        <FavoriteButton
          id={id}
          onToggleFavorite={onToggleFavorite}
          isFavorite={currentProject.favorite}
        />
      </StyledArticle>

      <StyledArticleDescription>{description}</StyledArticleDescription>

      <Image
        style={{ marginBlockStart: "1.33em" }}
        src={image}
        width={320}
        height={213}
        layout="responsive"
        alt="dummy image"
      />

      <StyledArticleTags>
        <StyledArticleTagDescription>Duration: </StyledArticleTagDescription>
        <StyledArticleTag>{duration}</StyledArticleTag>
        <StyledArticleTagDescription>Complexity: </StyledArticleTagDescription>
        <StyledArticleTag>{complexity}</StyledArticleTag>
      </StyledArticleTags>

      <StyledArticleHeadlineH3>Materials:</StyledArticleHeadlineH3>
      <ul>
        {materials.map((material, index) => (
          <li key={index}>{material}</li>
        ))}
      </ul>
      <StyledArticleHeadlineH3>Steps:</StyledArticleHeadlineH3>
      <ol>
        {steps.map((step) => (
          <li key={step.id}>{step.desc}</li>
        ))}
      </ol>
      <StyledProjectDetailsContainer>
        <StyledButtonLink href={"/"}>Back</StyledButtonLink>
        <StyledButton onClick={handleEdit}>Edit</StyledButton>
        <StyledButton onClick={handleDelete}>Delete</StyledButton>
      </StyledProjectDetailsContainer>

      {modalEdit && (
        <ModalEdit
          currentProject={currentProject}
          onSave={handleEditConfirm}
          onCancel={handleEditCancel}
        />
      )}
      {modalDelete && (
        <ModalDelete
          onConfirm={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
        />
      )}
    </>
  );
}

const StyledProjectDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 20px 0px 20px 0px;
  padding: 0px 20px 0px 20px;
`;

const StyledProjectTitleContainer = styled.div`
  background-color: var(--background-color-blue);
  display: flex;
  justify-content: space-between;
  border-radius: 15px;
`;

const StyledDescription = styled.p`
  padding-left: 40px;
`;

const StyledLink = styled(Link)`
  background-color: var(--background-color-blue);
  color: var(--text-color);
  font-size: 14px;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  padding: 5px;
  margin: 5px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
