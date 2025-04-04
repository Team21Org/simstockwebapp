"use server";

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: { model: string } }
) {
  const { model } = params;

  try {
    // Dynamically access the Prisma model
    const data = await (prisma as any)[model]?.findMany();

    if (!data) {
      return NextResponse.json(
        { error: `Model '${model}' not found` },
        { status: 404 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(`Error fetching data for model '${model}':`, error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
