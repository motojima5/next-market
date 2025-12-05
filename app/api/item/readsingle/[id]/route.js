import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  const { id } = await context.params;

  try {
    await connectDB();
    const singleItem = await ItemModel.findById(id);
    return NextResponse.json({
      message: "アイテム読み取り成功（シングル）",
      singleItem: singleItem,
    });
  } catch {
    return NextResponse.json({ message: "アイテム読み取り失敗（シングル）" });
  }
}
