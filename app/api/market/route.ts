import { auth } from "../../../auth";
import { NextResponse } from "next/server";
import prisma from "../../lib/prisma";
import { isMarketOpen } from "../../lib/actions";
// pages/api/trade.ts

export async function POST(req: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // Parse form data
  const formData = await req.formData();
  const stockId = formData.get("stockId") as string;
  const quantity = Number(formData.get("quantity"));
  const type = formData.get("type") as "BUY" | "SELL";
  const cash = await prisma.portfolio.findUnique({
    where: { userId: session.user.id },
    select: { cash: true },
  });

  if (!cash) {
    return NextResponse.json(
      { message: "User portfolio not found." },
      { status: 404 }
    );
  } else if (cash.cash < ) {
    return alert("Insufficient funds");
  }
  // if (!isMarketOpen(schedule)) {
  //   return NextResponse.json(
  //     { message: "Market is closed. Trades are not allowed at this time." },
  //     { status: 403 }
  //   );
  // }

  // Add your trade logic here...

  return NextResponse.json({ message: "Trade processed successfully." });
}
