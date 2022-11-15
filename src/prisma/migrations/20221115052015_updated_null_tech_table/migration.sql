/*
  Warnings:

  - You are about to drop the column `imglandscape` on the `technology` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `technology` DROP COLUMN `imglandscape`,
    MODIFY `imgportrait` VARCHAR(255) NULL,
    MODIFY `description` VARCHAR(255) NULL;
