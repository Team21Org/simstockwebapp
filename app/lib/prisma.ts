import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { withOptimize } from "@prisma/extension-optimize";

const prisma = new PrismaClient()
  .$extends(withAccelerate())
  .$extends(
    withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY || "default_api_key" })
  );

const globalForPrisma = global as unknown as { prisma: typeof prisma };

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
