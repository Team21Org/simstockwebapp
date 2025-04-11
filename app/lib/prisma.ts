import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { withOptimize } from "@prisma/extension-optimize";

// Function to create a Prisma Client with both Accelerate and Optimize extensions
const prismaClientSingleton = () => {
  return new PrismaClient()
    .$extends(withAccelerate())
    .$extends(withOptimize({ apiKey: process.env.OPTIMIZE_API_KEY }));
};

// Define a type for the Prisma Client Singleton
type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

// Use a global object to persist the Prisma Client during development (to avoid multiple instances)
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

// Initialize Prisma Client globally or create a new instance if it doesn't exist
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

export default prisma;

// Assign the Prisma Client to the global object in non-production environments
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
