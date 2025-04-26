import { auth } from "../../auth";
import { redirect } from "next/navigation";
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
  const day = now.getDay(); // 0 = Sunday, 6 = Saturday

  // Market is closed on weekends
  if (day === 0 || day === 6) {
    return false;
  }

  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  const [openHour, openMinute] = schedule.startTime.split(":").map(Number);
  const [closeHour, closeMinute] = schedule.endTime.split(":").map(Number);

  const openingMinutes = openHour * 60 + openMinute;
  const closingMinutes = closeHour * 60 + closeMinute;

  return currentMinutes >= openingMinutes && currentMinutes <= closingMinutes;
}
