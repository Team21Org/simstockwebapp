/*
  Warnings:

  - You are about to drop the column `portfolioId` on the `Portfolio` table. All the data in the column will be lost.
  - You are about to drop the column `transactionId` on the `Transaction` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Portfolio` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[portfolioId,stockId]` on the table `PortfolioStock` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Portfolio` table without a default value. This is not possible if the table is not empty.
  - Added the required column `portfolioId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Portfolio" DROP CONSTRAINT "Portfolio_portfolioId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_transactionId_fkey";

-- DropIndex
DROP INDEX "Portfolio_portfolioId_key";

-- AlterTable
ALTER TABLE "Portfolio" DROP COLUMN "portfolioId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" DROP COLUMN "transactionId",
ADD COLUMN     "portfolioId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_userId_key" ON "Portfolio"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioStock_portfolioId_stockId_key" ON "PortfolioStock"("portfolioId", "stockId");

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
