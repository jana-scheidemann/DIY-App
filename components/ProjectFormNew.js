import { useRouter } from "next/router";
import { useState } from "react";

export default function ProjectFormNew({ onSubmit }) {
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
    const newProject = {
      title: data.title,
      description: data.description,
      materials: data.materials.split(","),
      duration: data.duration,
      complexity: data.complexity,
      steps: stepsData,
    };

    onSubmit(newProject);
    router.push("/");
  }

  function addStep() {
    setSteps((prevSteps) => [...prevSteps, prevSteps.length + 1]);
  }

  return (
    <>
      <h2>Create New Project</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title:
          <input type="text" name="title" id="title" required />
        </label>

        <label htmlFor="description">
          Description:
          <input type="text" name="description" id="description" required />
        </label>

        <label htmlFor="materials">
          Materials:
          <input type="text" name="materials" id="materials" required />
        </label>

        <label htmlFor="duration">
          Duration:
          <input type="text" name="duration" id="duration" required />
        </label>

        <h3>Complexity:</h3>

        <input type="radio" id="beginner" name="complexity" value="Beginner" />
        <label htmlFor="beginner">Beginner</label>

        <input
          type="radio"
          id="intermediate"
          name="complexity"
          value="Intermediate"
          defaultChecked
        />
        <label htmlFor="intermediate">Intermediate</label>

        <input type="radio" id="advanced" name="complexity" value="Advanced" />
        <label htmlFor="advanced">Advanced</label>

        {steps.map((step) => (
          <div key={step}>
            <label htmlFor={`step${step}`}>Step {step}</label>
            <input type="text" id={`step${step}`} name={`step${step}`} />
          </div>
        ))}
        <button type="button" onClick={addStep}>
          Add step
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
