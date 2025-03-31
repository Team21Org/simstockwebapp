-- CreateTable
CREATE TABLE "Stock" (
    "id" SERIAL NOT NULL,
    "stockId" INTEGER NOT NULL,
    "ticker" TEXT NOT NULL,
    "companyName" TEXT,
    "currentPrice" MONEY NOT NULL DEFAULT 0.00,
    "openPrice" MONEY NOT NULL DEFAULT 0.00,
    "dayHigh" MONEY NOT NULL DEFAULT 0.00,
    "dayLow" MONEY NOT NULL DEFAULT 0.00,
    "dailyVolume" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Stock_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Portfolio" (
    "id" SERIAL NOT NULL,
    "portfolioId" INTEGER NOT NULL,
    "cash" MONEY NOT NULL DEFAULT 0.00,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Portfolio_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Stock_stockId_key" ON "Stock"("stockId");

-- CreateIndex
CREATE UNIQUE INDEX "Stock_ticker_key" ON "Stock"("ticker");

-- CreateIndex
CREATE UNIQUE INDEX "Portfolio_portfolioId_key" ON "Portfolio"("portfolioId");

-- AddForeignKey
ALTER TABLE "Stock" ADD CONSTRAINT "Stock_stockId_fkey" FOREIGN KEY ("stockId") REFERENCES "Portfolio"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Portfolio" ADD CONSTRAINT "Portfolio_portfolioId_fkey" FOREIGN KEY ("portfolioId") REFERENCES "Profile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
