import { NextRequest, NextResponse } from "next/server";
import { registerUser } from "../../lib/actions";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const email = formData.get("email") as string;
  const confirmEmail = formData.get("confirmEmail") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;
  const name = formData.get("name") as string;
  const userName = formData.get("userName") as string;

  if (email != confirmEmail || password != confirmPassword) {
    return NextResponse.json(
      { success: false, error: "Emails or passwords do not match." },
      { status: 400 }
    );
  } else {
    await registerUser({
      email,
      password,
      name,
      userName,
    });

    return NextResponse.json({ success: true });
  }
}
