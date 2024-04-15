import { useState } from "react";
import styled from "styled-components";
import { uid } from "uid";
import StyledModal from "./StyledComponents.js/StyledModal";

export default function ModalEdit({ currentProject, onSave, onCancel }) {
  const [updateProject, setUpdateProject] = useState(currentProject);
  const [selectSteps, setSelectSteps] = useState({});
  const [updateSteps, setUpdateSteps] = useState(false);
  const [updateMaterials, setUpdateMaterials] = useState(
    currentProject.materials.join(", ")
  );
  const complexityLevels = ["Beginner", "Intermediate", "Advanced"];

  function handleChange(event) {
    const materialName = event.target.name;
    const materialValue = event.target.value;

    if (materialName === "materials") {
      setUpdateMaterials(materialValue);
      setUpdateProject((prevProject) => ({
        ...prevProject,
        [materialName]: materialValue
          .split(",")
          .map((material) => material.trim()),
      }));
    } else {
      setUpdateProject((prevProject) => ({
        ...prevProject,
        [materialName]: materialValue,
      }));
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    onSave(updateProject);
  }

  function handleStepAdd(event) {
    event.preventDefault();
    setUpdateProject((prevState) => ({
      ...prevState,
      steps: [...prevState.steps, { id: uid(), desc: "" }],
    }));
  }

  function handleStepDelete(event) {
    event.preventDefault();
    setUpdateProject((prevState) => ({
      ...prevState,
      steps: prevState.steps.filter((step) => !selectSteps[step.id]),
    }));
    setSelectSteps({});
  }

  function handleStepEdit(event) {
    event.preventDefault();
    setUpdateSteps(true);
  }

  function handleStepEditCancel(event) {
    event.preventDefault();
    setUpdateSteps(false);
  }

  function handleStepSelect(id) {
    setSelectSteps((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  return (
    <StyledModal>
      <StyledContainerForm>
        <form onSubmit={handleSubmit}>
          <StyledHeading>Edit Project</StyledHeading>
          <label htmlFor="title">
            <StyledTitle>Title</StyledTitle>
            <StyledInput
              type="text"
              name="title"
              id="title"
              size="40"
              value={updateProject.title}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="description">
            <StyledTitle>Description</StyledTitle>
            <StyledInput
              type="text"
              name="description"
              id="description"
              size="40"
              value={updateProject.description}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label htmlFor="materials">
            <StyledTitle>Materials</StyledTitle>
            <StyledInput
              type="text"
              name="materials"
              id="materials"
              size="40"
              value={updateMaterials}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label htmlFor="duration">
            <StyledTitle>Duration</StyledTitle>
            <StyledInput
              type="text"
              name="duration"
              id="duration"
              size="40"
              value={updateProject.duration}
              onChange={handleChange}
              required
            />
          </label>
          <StyledTitle>Complexity</StyledTitle>
          {complexityLevels.map((complexityLevel) => (
            <div key={complexityLevel}>
              <input
                type="radio"
                name="complexity"
                id={complexityLevel}
                value={complexityLevel}
                defaultChecked={updateProject.complexity === complexityLevel}
                onChange={handleChange}
              />
              <label htmlFor={complexityLevel}>{complexityLevel}</label>
            </div>
          ))}
          <StyledTitle>Steps</StyledTitle>
          {updateSteps ? (
            <>
              <StyledContainerSteps>
                <ul>
                  <li>To add a step, click the &quot;Add Step&quot; button</li>
                  <li>
                    To delete a step, select the checkbox of the step to delete
                    and confirm the deletetion by clicking the &quot;Delete
                    Step&quot; button
                  </li>
                </ul>
              </StyledContainerSteps>
              <button onClick={handleStepAdd}>Add Step</button>
              <button onClick={handleStepDelete}>Delete Step</button>
              <button onClick={handleStepEditCancel}>Close Update Steps</button>
            </>
          ) : (
            <button onClick={handleStepEdit}>Update Steps</button>
          )}
          {updateProject.steps.map((step, stepIndex) => (
            <div key={step.id}>
              <label htmlFor={`step${stepIndex + 1}`}>
                <StyledTitleStep>Step {stepIndex + 1} &nbsp;</StyledTitleStep>
              </label>
              {updateSteps && (
                <input
                  type="checkbox"
                  onChange={() => handleStepSelect(step.id)}
                />
              )}
              <StyledInput
                type="text"
                name={`step${stepIndex + 1}`}
                id={`step${stepIndex + 1}`}
                value={step.desc}
                onChange={(event) =>
                  setUpdateProject({
                    ...updateProject,
                    steps: updateProject.steps.map((updateStep) =>
                      updateStep.id === step.id
                        ? { ...updateStep, desc: event.target.value }
                        : updateStep
                    ),
                  })
                }
                size="40"
              />
            </div>
          ))}
          <p>
            <StyledTitle>Confirm Changes</StyledTitle>
            <button type="submit">Update Project</button>
            <button onClick={onCancel}>Cancel Update Project</button>
          </p>
        </form>
      </StyledContainerForm>
    </StyledModal>
  );
}
const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledContainerSteps = styled.div`
  width: 60%;
`;

const StyledHeading = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 0 0 0.2em 0;
`;

const StyledTitle = styled.div`
  font-size: 2.7em;
  font-weight: bold;
  margin: 1em 0 0.2em 0;
`;

const StyledTitleStep = styled.div`
  font-size: 14px;
  margin: 0.5em 0 0.2em 0;
`;

const StyledInput = styled.input`
  width: 90%;
  box-sizing: border-box;
  padding: 0.3em 0.3em 0.3em 0.2em;
`;
