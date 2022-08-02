/*
  Warnings:

  - You are about to drop the `computercase` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `computercase`;

-- CreateTable
CREATE TABLE `computer_case` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `price` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `computer_case_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
