import styled from "styled-components";
import { useState } from "react";
import router from "next/router";
import Image from "next/image";
import ModalDelete from "@/components/ModalDelete";
import ModalEdit from "@/components/ModalEdit";
import FavoriteButton from "./FavoriteButton";
import {
  StyledButton,
  StyledButtonContainer,
  StyledButtonLink,
} from "./StyledComponents/StyledButton";
import {
  StyledArticle,
  StyledArticleHeadlineH2,
  StyledArticleHeadlineH3,
  StyledArticleDescription,
  StyledArticleTags,
  StyledArticleTag,
  StyledArticleTagDescription,
} from "./StyledComponents/StyledArticle";

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
        alt={`Image of ${title}`}
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
      <StyledButtonContainer>
        <StyledButtonLink href={"/"}>Back</StyledButtonLink>
        <StyledButton onClick={handleEdit}>Edit</StyledButton>
        <StyledButton onClick={handleDelete}>Delete</StyledButton>
      </StyledButtonContainer>

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
