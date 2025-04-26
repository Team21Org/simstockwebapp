import { auth } from "../../auth";
import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from "next/navigation";
import prisma from "./prisma";
import { MarketSchedule } from "@prisma/client";

const session = await auth();
export async function Logout({
  searchParams,
}: {
  searchParams?: { from?: string };
}) {
  // If not logged in, redirect to login page
  if (!session?.user?.email) {
    redirect("/login");
  }
}

// lib/marketUtils.ts

/**
 * Check if the current time is between the openTime and closeTime.
 * Assumes schedule times are provided in "HH:mm" 24-hour format and that
 * the server time is in the appropriate time zone.
 */
export function isMarketOpen(schedule: MarketSchedule): boolean {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [openHour, openMinute] = schedule.startTime.split(":").map(Number);
  const [closeHour, closeMinute] = schedule.endTime.split(":").map(Number);

  const openingMinutes = openHour * 60 + openMinute;
  const closingMinutes = closeHour * 60 + closeMinute;

  return currentMinutes >= openingMinutes && currentMinutes <= closingMinutes;
}

// pages/api/trade.ts

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Authenticate using your custom auth function
  const session = await auth();

  if (!session?.user?.email) {
    return res.status(401).json({ message: "Not authenticated." });
  }

  // Retrieve the schedule (assuming a single row with id: 1)
  const schedule = await prisma.marketSchedule.findUnique({ where: { id: 1 } });
  if (!schedule) {
    return res
      .status(500)
      .json({ message: "Market schedule is not configured." });
  }

  if (!isMarketOpen(schedule)) {
    return res.status(403).json({
      message: "Market is closed. Trades are not allowed at this time.",
    });
  }

  // Add your trade logic here...
  // e.g., process the trade, update orders, etc.

  return res.status(200).json({ message: "Trade processed successfully." });
}
