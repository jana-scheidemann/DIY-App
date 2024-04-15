import dbConnect from "@/db/dbconnect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const projects = await Project.find();
      return response.status(200).json(projects);
    } catch {
      response.status(404).json({ error: error.message });
    }
  }
  if (request.method === "POST") {
    try {
      const newProject = request.body;
      await Project.create(newProject);

      response.status(201).json({ status: "Project created" });
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
