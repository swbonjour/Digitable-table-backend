/*
  Warnings:

  - You are about to drop the column `contant` on the `order` table. All the data in the column will be lost.
  - Added the required column `case` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contact` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cpu` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gpu` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `power` to the `order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ram` to the `order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `order` DROP COLUMN `contant`,
    ADD COLUMN `case` VARCHAR(191) NOT NULL,
    ADD COLUMN `contact` VARCHAR(191) NOT NULL,
    ADD COLUMN `cpu` VARCHAR(191) NOT NULL,
    ADD COLUMN `gpu` VARCHAR(191) NOT NULL,
    ADD COLUMN `power` VARCHAR(191) NOT NULL,
    ADD COLUMN `ram` VARCHAR(191) NOT NULL;
