import styled from "styled-components";
import Image from "next/image";
import ModalDelete from "@/components/ModalDelete";
import ModalEdit from "@/components/ModalEdit";
import { useState } from "react";
import router from "next/router";
import FavoriteButton from "./FavoriteButton";

export default function ProjectDetails({
  currentProject,
  onDeleteProject,
  onToggleFavorite,
}) {
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
      <StyledProjectContainer>
        <StyledHeadline2>{title}</StyledHeadline2>

        <StyledProjectDetailsContainer>
          <p>Duration: {duration}</p>
          <p>Complexity: {complexity}</p>
        </StyledProjectDetailsContainer>
        <FavoriteButton
          id={id}
          onToggleFavorite={onToggleFavorite}
          isFavorite={currentProject.favorite}
        />

        <Image
          src={image}
          width={320}
          height={213}
          alt="dummy image with nails and hammer"
        />

        <p>
          Description:
          <br /> {description}
        </p>
        <p>Materials:</p>
        <ul>
          {materials.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
        <p>Steps:</p>
        <ol>
          {steps.map((step) => (
            <li key={step.id}>{step.desc}</li>
          ))}
        </ol>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </StyledProjectContainer>
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

const StyledProjectContainer = styled.div`
  border: solid black;
  width: 80vw;
  padding: 2vw;
  margin: 5vw 10vw;
`;

const StyledHeadline2 = styled.h2`
  text-align: center;
`;

const StyledProjectDetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;
