import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Create Users
  const adminUser = await prisma.user.create({
    data: {
      email: "admin@example.com",
      password: "hashedPassword",
      fullName: "Admin User",
      userName: "adminUser",
      role: "ADMIN",
      profile: {
        create: {
          bio: "Administrator of the stock trading system.",
        },
      },
    },
  });

  const regularUser = await prisma.user.create({
    data: {
      email: "user@example.com",
      password: "hashedPassword",
      fullName: "John Doe",
      userName: "johndoe",
      role: "USER",
      profile: {
        create: {
          bio: "A regular user trading stocks.",
          portfolio: {
            create: {
              cash: 10000.0,
              totalValue: 0.0,
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
          portfolio: true,
        },
      },
    },
  });

  const portfolioId = regularUserWithProfile?.profile?.portfolio?.id!;

  // Create Stocks
  const stockA = await prisma.stock.create({
    data: {
      stockId: 1,
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
      stockId: 2,
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

  // Create Transactions
  await prisma.transaction.create({
    data: {
      userId: regularUser.id,
      portfolioId: portfolioId, // Add portfolioId
      type: "DEPOSIT",
      amount: 5000.0,
    },
  });

  await prisma.transaction.create({
    data: {
      userId: regularUser.id,
      portfolioId: portfolioId, // Add portfolioId
      type: "BUY",
      stockId: stockA.id,
      quantity: 10,
      amount: 1500.0,
    },
  });

  // Update PortfolioStock
  await prisma.portfolioStock.create({
    data: {
      portfolioId: portfolioId,
      stockId: stockA.id,
      quantity: 10,
      averageCost: 150.0,
    },
  });

  // Create Market Schedule
  await prisma.marketSchedule.create({
    data: {
      marketOpen: true,
      startTime: new Date("2023-01-01T09:30:00Z"),
      endTime: new Date("2023-01-01T16:00:00Z"),
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
