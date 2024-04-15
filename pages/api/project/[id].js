import dbConnect from "@/db/dbconnect";
import Project from "@/db/models/Project";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const project = await Project.findById(id);

    if (!project) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(project);
  }

  if (request.method === "PUT") {
    await Project.findByIdAndUpdate(id, {
      $set: request.body,
    });

    response.status(200).json({ message: "Success!" });
  }

  if (request.method === "DELETE") {
    await Project.findByIdAndDelete(id);

    response.status(200).json({ message: "Success!" });
  }
}
