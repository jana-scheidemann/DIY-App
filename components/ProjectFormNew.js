import { useRouter } from "next/router";
import { useState } from "react";

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
    const newProject = {
      title: data.title,
      description: data.description,
      materials: data.materials.split(","),
      duration: data.duration,
      complexity: data.complexity,
      steps: stepsData,
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
      <h2>Create New Project</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" maxLength={50} required />

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description" required />

        <label htmlFor="materials">Materials: </label>
        <input type="text" name="materials" id="materials" required />

        <label htmlFor="duration">Duration: </label>
        <input
          type="text"
          name="duration"
          id="duration"
          placeholder="e.g. 3 hours"
          required
        />

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
