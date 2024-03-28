import styled from "styled-components";
import Image from "next/image";
import ModalDelete from "@/components/ModalDelete";
import { useState } from "react";
import router from "next/router";

export default function ProjectDetails({ currentProject, onDeleteProject }) {
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

  function handleDelete() {
    setModalDelete(true);
  }

  function handleCancel() {
    setModalDelete(false);
  }

  function handleConfirm() {
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
        <button onClick={handleDelete}>Delete</button>
      </StyledProjectContainer>
      {modalDelete && (
        <ModalDelete onConfirm={handleConfirm} onCancel={handleCancel} />
      )}
    </>
  );
}

const StyledProjectContainer = styled.div`
  border: solid black;
  width: 80vw;
  padding: 2vw;
  margin: 5vw 10vw;
  border-radius: 5vw;
`;

const StyledHeadline2 = styled.h2`
  text-align: center;
`;

const StyledProjectDetailsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledList = styled.ol`
  align-self: self-start;
`;
