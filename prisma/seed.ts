import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const authSecret = process.env.AUTH_SECRET;

  const adminPassword = bcrypt.hashSync("adminPassword123" + authSecret, 10);
  const userPassword = bcrypt.hashSync("userPassword123" + authSecret, 10);

  // Create Users
  const adminUser = await prisma.user.create({
    data: {
      email: "admin@example.com",
      password: adminPassword,
      name: "Admin User",
      userName: "adminUser",
      role: "ADMIN",
      profile: {
        create: {
          email: "admin@example.com",
          bio: "Administrator of the stock trading system.",
          Portfolio: {
            create: {
              cash: 9999999999999.0,
            },
          },
        },
      },
    },
  });

  const regularUser = await prisma.user.create({
    data: {
      email: "user@example.com",
      password: userPassword,
      name: "John Doe",
      userName: "johndoe",
      role: "USER",
      profile: {
        create: {
          email: "user@example.com",
          bio: "A regular user trading stocks.",
          Portfolio: {
            create: {
              cash: 10000.0,
            },
          },
        },
      },
    },
  });

  const regularUserWithProfile = await prisma.user.findUnique({
    where: { id: regularUser.id },
    include: {
      profile: {
        include: {
          Portfolio: true,
        },
      },
    },
  });

  const portfolioId = regularUserWithProfile?.profile?.Portfolio?.id!;

  // Create Stocks
  const stockA = await prisma.stock.create({
    data: {
      stockId: "1",
      ticker: "AAPL",
      companyName: "Apple Inc.",
      currentPrice: 150.0,
      openPrice: 145.0,
      dayHigh: 155.0,
      dayLow: 140.0,
      dailyVolume: 10000,
      initialVolume: 100000,
    },
  });

  const stockB = await prisma.stock.create({
    data: {
      stockId: "2",
      ticker: "GOOGL",
      companyName: "Alphabet Inc.",
      currentPrice: 2800.0,
      openPrice: 2750.0,
      dayHigh: 2850.0,
      dayLow: 2700.0,
      dailyVolume: 5000,
      initialVolume: 50000,
    },
  });

  // Create Market Schedule
  await prisma.marketSchedule.create({
    data: {
      startTime: "09:00",
      endTime: "17:00",
    },
  });

  console.log("Sample data created successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
