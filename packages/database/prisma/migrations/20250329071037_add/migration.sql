/*
  Warnings:

  - Added the required column `name` to the `CreatedFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CreatedFile" ADD COLUMN     "name" TEXT NOT NULL;
