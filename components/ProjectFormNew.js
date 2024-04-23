import { useRouter } from "next/router";
import { useState } from "react";
import {
  StyledHeadlineH3,
  StyledHeadlineH4,
  StyledHeadlineH5,
} from "./StyledComponents/StyledHeadline";
import {
  StyledFormContainer,
  StyledFormContainerButtons,
  StyledInputModal,
  StyledRadioButton,
  StyledRadioButtonLabel,
} from "./StyledComponents/StyledInput";
import { StyledButton } from "./StyledComponents/StyledButton";

export default function ProjectFormNew({ onAddProject, onToggleAddModal }) {
  const [steps, setSteps] = useState([1]);
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const stepsData = steps.map((step) => {
      return {
        id: step,
        desc: data[`step${step}`],
      };
    });
    const slug = data.title.toLowerCase().replace(/\s+/g, "-");
    const newProject = {
      title: data.title,
      description: data.description,
      materials: data.materials.split(","),
      duration: data.duration,
      complexity: data.complexity,
      steps: stepsData,
      slug: slug,
    };

    onAddProject(newProject);
    onToggleAddModal();
    router.push("/");
  }

  function addStep() {
    setSteps((prevSteps) => [...prevSteps, prevSteps.length + 1]);
  }

  return (
    <>
      <StyledHeadlineH3>Create New Project</StyledHeadlineH3>

      <StyledFormContainer onSubmit={handleSubmit}>
        <label htmlFor="title">
          <StyledHeadlineH4>Title</StyledHeadlineH4>
        </label>
        <StyledInputModal
          type="text"
          name="title"
          id="title"
          maxLength={50}
          required
        />

        <label htmlFor="description">
          <StyledHeadlineH4>Description</StyledHeadlineH4>
        </label>
        <StyledInputModal
          type="text"
          name="description"
          id="description"
          required
        />

        <label htmlFor="materials">
          <StyledHeadlineH4>Materials</StyledHeadlineH4>
        </label>
        <StyledInputModal
          type="text"
          name="materials"
          id="materials"
          required
        />

        <label htmlFor="duration">
          <StyledHeadlineH4>Duration</StyledHeadlineH4>
        </label>
        <StyledInputModal
          type="text"
          name="duration"
          id="duration"
          placeholder="e.g. 3 hours"
          required
        />

        <StyledHeadlineH4>Complexity</StyledHeadlineH4>

        <StyledRadioButtonLabel htmlFor="beginner">
          <StyledRadioButton
            type="radio"
            id="beginner"
            name="complexity"
            value="Beginner"
          />
          Beginner
        </StyledRadioButtonLabel>

        <StyledRadioButtonLabel htmlFor="intermediate">
          <StyledRadioButton
            type="radio"
            id="intermediate"
            name="complexity"
            value="Intermediate"
            defaultChecked
          />
          Intermediate
        </StyledRadioButtonLabel>

        <StyledRadioButtonLabel htmlFor="advanced">
          <StyledRadioButton
            type="radio"
            id="advanced"
            name="complexity"
            value="Advanced"
          />
          Advanced
        </StyledRadioButtonLabel>

        <StyledHeadlineH4>Steps</StyledHeadlineH4>
        {steps.map((step) => (
          <div key={step}>
            <StyledHeadlineH5 htmlFor={`step${step}`}>
              Step {step}
            </StyledHeadlineH5>
            <StyledInputModal
              type="text"
              id={`step${step}`}
              name={`step${step}`}
            />
          </div>
        ))}
        <StyledFormContainerButtons>
          <StyledButton type="button" onClick={addStep}>
            Add
          </StyledButton>
          <StyledButton type="submit">
            <strong>Submit</strong>
          </StyledButton>
        </StyledFormContainerButtons>
      </StyledFormContainer>
    </>
  );
}
