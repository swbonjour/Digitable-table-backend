/*
  Warnings:

  - You are about to drop the `case` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `case`;

-- CreateTable
CREATE TABLE `computerCase` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `computerCase_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- RenameIndex
ALTER TABLE `cpu` RENAME INDEX `CPU_id_key` TO `cpu_id_key`;
