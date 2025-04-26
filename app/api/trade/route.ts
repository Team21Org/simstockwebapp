import { auth } from "../../../auth";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import { isMarketOpen } from "../../lib/actions";
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
