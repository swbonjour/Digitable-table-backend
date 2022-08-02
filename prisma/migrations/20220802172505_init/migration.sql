-- CreateTable
CREATE TABLE "computer_case" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "computer_case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cpu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "cpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gpu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "gpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ram" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "power" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "power_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "case" TEXT NOT NULL,
    "cpu" TEXT NOT NULL,
    "gpu" TEXT NOT NULL,
    "ram" TEXT NOT NULL,
    "power" TEXT NOT NULL,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "computer_case_id_key" ON "computer_case"("id");

-- CreateIndex
CREATE UNIQUE INDEX "cpu_id_key" ON "cpu"("id");

-- CreateIndex
CREATE UNIQUE INDEX "gpu_id_key" ON "gpu"("id");

-- CreateIndex
CREATE UNIQUE INDEX "ram_id_key" ON "ram"("id");

-- CreateIndex
CREATE UNIQUE INDEX "power_id_key" ON "power"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_id_key" ON "order"("id");
