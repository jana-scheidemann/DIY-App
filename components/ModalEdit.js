import { useState } from "react";
import styled from "styled-components";
import { uid } from "uid";

export default function ModalEdit({ currentProject, onSave, onCancel }) {
  const [updateProject, setUpdateProject] = useState(currentProject);
  const [selectSteps, setSelectSteps] = useState({});
  const [editSteps, setEditSteps] = useState(false);
  const complexityLevels = ["Beginner", "Intermediate", "Advanced"];

  function handleChange(event) {
    const materialName = event.target.name;
    const materialValue = event.target.value;

    if (materialName === "materials") {
      setUpdateProject((prevProject) => ({
        ...prevProject,
        [materialName]: materialValue.split(","),
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
    setEditSteps(true);
  }

  function handleStepEditCancel(event) {
    event.preventDefault();
    setEditSteps(false);
  }

  function handleStepSelect(id) {
    setSelectSteps((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  }

  return (
    <StyledBackground>
      <StyledContainer>
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
                value={updateProject.materials.join(", ")}
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
            {updateProject.steps.map((step, stepIndex) => (
              <div key={step.id}>
                <label htmlFor={`step${stepIndex + 1}`}>
                  <StyledTitleStep>Step {stepIndex + 1} &nbsp;</StyledTitleStep>
                </label>
                {editSteps && (
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
              <button onClick={handleStepAdd}>Add Step</button>
              {editSteps ? (
                <>
                  <button onClick={handleStepDelete}>Delete Step</button>
                  <button onClick={handleStepEditCancel}>Cancel Edit</button>
                </>
              ) : (
                <button onClick={handleStepEdit}>Edit Steps</button>
              )}
            </p>
            <p>
              <button type="submit">Save</button>
              <button onClick={onCancel}>Cancel</button>
            </p>
          </form>
        </StyledContainerForm>
      </StyledContainer>
    </StyledBackground>
  );
}

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80vw;
  height: 90vh;
  overflow: auto;
`;

const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledHeading = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin: 0 0 0.2em 0;
`;

const StyledTitle = styled.div`
  fonst-size: 2.7em;
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
  padding: 0.5em;
`;
