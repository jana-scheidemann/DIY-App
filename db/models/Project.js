import mongoose from "mongoose";

const { Schema } = mongoose;

const projectSchema = new Schema({
  _id: { type: Schema.Types.ObjectId },
  title: { type: String, required: true },
  slug: { type: String, required: true },
  description: { type: String, required: true },
  materials: [{ type: String }],
  duration: { type: String, required: true },
  complexity: { type: String, required: true },
  steps: [{ id: { type: Number }, desc: { type: String } }],
  image: { type: String },
  favorite: { type: Boolean, default: false },
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
