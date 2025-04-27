import { NextRequest, NextResponse } from "next/server";
import { tradeAction } from "../../lib/actions";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    await tradeAction(formData);
    // Optionally, you can redirect or return a JSON response
    return NextResponse.redirect(new URL("/market", req.url));
  } catch (error: any) {
    // You can customize the error handling as needed
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
