import { auth } from "../../auth";
import { redirect } from "next/navigation";
import prisma from "./prisma";

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

export async function checkMarketSchedule() {
  // Check if the market is open
  const marketSchedule = await prisma.marketSchedule.findFirst();

  if (!marketSchedule) {
    throw new Error("Market schedule not found");
  }

  const currentTime = new Date();
  const openingTime = new Date(marketSchedule.startTime);
  const closingTime = new Date(marketSchedule.endTime);

  if (currentTime < openingTime || currentTime > closingTime) {
    throw new Error("Market is closed");
  }
}
