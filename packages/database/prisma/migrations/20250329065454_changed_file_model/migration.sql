/*
  Warnings:

  - You are about to drop the `ChatRoom` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RoomChatMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SingleRoomMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ChatRoomMembers` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'EDITOR');

-- DropForeignKey
ALTER TABLE "ChatRoom" DROP CONSTRAINT "ChatRoom_createdByUserId_fkey";

-- DropForeignKey
ALTER TABLE "RoomChatMessage" DROP CONSTRAINT "RoomChatMessage_chatRoomId_fkey";

-- DropForeignKey
ALTER TABLE "RoomChatMessage" DROP CONSTRAINT "RoomChatMessage_sendById_fkey";

-- DropForeignKey
ALTER TABLE "SingleRoomMessage" DROP CONSTRAINT "SingleRoomMessage_receivedById_fkey";

-- DropForeignKey
ALTER TABLE "SingleRoomMessage" DROP CONSTRAINT "SingleRoomMessage_sendById_fkey";

-- DropForeignKey
ALTER TABLE "_ChatRoomMembers" DROP CONSTRAINT "_ChatRoomMembers_A_fkey";

-- DropForeignKey
ALTER TABLE "_ChatRoomMembers" DROP CONSTRAINT "_ChatRoomMembers_B_fkey";

-- DropTable
DROP TABLE "ChatRoom";

-- DropTable
DROP TABLE "RoomChatMessage";

-- DropTable
DROP TABLE "SingleRoomMessage";

-- DropTable
DROP TABLE "_ChatRoomMembers";

-- CreateTable
CREATE TABLE "CreatedFile" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdByUserId" TEXT NOT NULL,

    CONSTRAINT "CreatedFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stroke" (
    "id" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Stroke_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collaborator" (
    "id" TEXT NOT NULL,
    "fileId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Collaborator_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CreatedFile" ADD CONSTRAINT "CreatedFile_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stroke" ADD CONSTRAINT "Stroke_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "CreatedFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "CreatedFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
