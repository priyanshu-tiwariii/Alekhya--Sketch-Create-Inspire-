/*
  Warnings:

  - You are about to drop the column `data` on the `Stroke` table. All the data in the column will be lost.
  - Added the required column `type` to the `Stroke` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Stroke` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Stroke" DROP COLUMN "data",
ADD COLUMN     "color" TEXT,
ADD COLUMN     "fontFamily" TEXT,
ADD COLUMN     "fontSize" INTEGER,
ADD COLUMN     "h" DOUBLE PRECISION,
ADD COLUMN     "radius" DOUBLE PRECISION,
ADD COLUMN     "text" TEXT,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "w" DOUBLE PRECISION,
ADD COLUMN     "x" DOUBLE PRECISION,
ADD COLUMN     "y" DOUBLE PRECISION;
