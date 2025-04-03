/*
  Warnings:

  - You are about to drop the column `isAdmin` on the `User` table. All the data in the column will be lost.
  - Added the required column `initialVolume` to the `Stock` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Stock` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- CreateEnum
CREATE TYPE "TransactType" AS ENUM ('BUY', 'SELL', 'DEPOSIT', 'WITHDRAW');

-- DropForeignKey
ALTER TABLE "Stock" DROP CONSTRAINT "Stock_stockId_fkey";

-- AlterTable
ALTER TABLE "Portfolio" ADD COLUMN     "totalValue" MONEY NOT NULL DEFAULT 0.00;

-- AlterTable
ALTER TABLE "Stock" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "initialVolume" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "isAdmin",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "PortfolioStock" (
    "id" SERIAL NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    "stockId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,
    "averageCost" MONEY NOT NULL DEFAULT 0.00,

    CONSTRAINT "PortfolioStock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "type" "TransactType" NOT NULL,
    "stockId" INTEGER,
    "quantity" INTEGER,
    "amount" MONEY NOT NULL DEFAULT 0.00,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketSchedule" (
    "id" SERIAL NOT NULL,
    "marketOpen" BOOLEAN NOT NULL DEFAULT false,
    "startTime" TIMESTAMP(3),
    "endTime" TIMESTAMP(3),
    "holiday" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MarketSchedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PortfolioStock" ADD CONSTRAINT "PortfolioStock_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PortfolioStock" ADD CONSTRAINT "PortfolioStock_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Stock"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Portfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
