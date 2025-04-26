/*
  Warnings:

  - A unique constraint covering the columns `[portfolioId,stockId]` on the table `PortfolioStock` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_portfolioId_fkey";

-- DropIndex
DROP INDEX "PortfolioStock_portfolioId_key";

-- DropIndex
DROP INDEX "PortfolioStock_stockId_key";

-- CreateIndex
CREATE UNIQUE INDEX "PortfolioStock_portfolioId_stockId_key" ON "PortfolioStock"("portfolioId", "stockId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Portfolio"("id") ON DELETE CASCADE ON UPDATE CASCADE;
