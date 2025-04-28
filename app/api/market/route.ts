import { NextResponse } from "next/server";
import { tradeAction } from "../../lib/actions";

export async function POST(req: Request) {
  const formData = await req.formData();
  const result = await tradeAction(formData);

  if (result.error) {
    return NextResponse.json({ error: result.error }, { status: 400 });
  }
  return NextResponse.json({ success: true });
}
