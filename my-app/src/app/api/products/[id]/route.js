import { dbConnect } from "@/lib/mongo-helper";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await dbConnect();

  const { id } = await params;

  await Product.findByIdAndDelete(id);

  return NextResponse.json({ message: "Deleted" });
}