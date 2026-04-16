import { connectDB } from "./mongo";

export async function dbConnect() {
  await connectDB();
}