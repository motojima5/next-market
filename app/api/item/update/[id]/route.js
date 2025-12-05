import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function PUT(request, context) {
  const reqBody = await request.json();
  const { id } = await context.params;

  try {
    await connectDB();
    await ItemModel.updateOne({ _id: id }, reqBody);
    return NextResponse.json({ message: "アイテム編集成功" });
  } catch {
    return NextResponse.json({ message: "アイテム編集失敗" });
  }
}
