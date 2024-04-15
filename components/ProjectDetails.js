import styled from "styled-components";
import Image from "next/image";
import ModalDelete from "@/components/ModalDelete";
import ModalEdit from "@/components/ModalEdit";
import { useState } from "react";
import router from "next/router";
import FavoriteButton from "./FavoriteButton";
import StyledButton from "./StyledComponents.js/StyledButtons";
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
    favorite,
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
      <StyledHeadline>DIY APP</StyledHeadline>
      <StyledProjectTitleContainer>
        <StyledHeadline2>{title}</StyledHeadline2>
        <FavoriteButton
          id={id}
          onToggleFavorite={onToggleFavorite}
          isFavorite={currentProject.favorite}
        />
      </StyledProjectTitleContainer>
      <StyledProjectDetailsContainer>
        <h4>Duration: {duration}</h4>
        <h4>Complexity: {complexity}</h4>
      </StyledProjectDetailsContainer>

      <Image
        style={{ marginBlockStart: "1.33em" }}
        src={image}
        width={320}
        height={213}
        layout="responsive"
        alt="dummy image with nails and hammer"
      />

      <h4>Description:</h4>
      <StyledDescription>{description}</StyledDescription>
      <h4>Materials:</h4>
      <ul>
        {materials.map((material, index) => (
          <li key={index}>{material}</li>
        ))}
      </ul>
      <h4>Steps:</h4>
      <ol>
        {steps.map((step) => (
          <li key={step.id}>{step.desc}</li>
        ))}
      </ol>
      <StyledProjectDetailsContainer>
        <StyledLink href={"/"}>Back to all Projects</StyledLink>
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

const StyledHeadline = styled.h1`
  text-align: center;
`;

const StyledHeadline2 = styled.h2`
  //background-color: var(--background-color-blue);
  text-align: left;
  border-radius: 10px;
  padding: 10px;
  font-size: 20px;
  margin: 0;
`;

const StyledProjectDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
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
