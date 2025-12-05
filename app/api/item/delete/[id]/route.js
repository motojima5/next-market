import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
  const { id } = await context.params;

  try {
    await connectDB();
    await ItemModel.deleteOne({ _id: id });
    return NextResponse.json({ message: "アイテム削除成功" });
  } catch {
    return NextResponse.json({ message: "アイテム削除失敗" });
  }
}
