import dbConnect from "@/db/dbconnect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    try {
      const projects = await Project.find({ favorite: true });
      return response.status(200).json(projects);
    } catch (error) {
      response.status(404).json({ error: error.message });
    }
  }
}
