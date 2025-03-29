-- DropForeignKey
ALTER TABLE "Collaborator" DROP CONSTRAINT "Collaborator_fileId_fkey";

-- DropForeignKey
ALTER TABLE "Collaborator" DROP CONSTRAINT "Collaborator_userId_fkey";

-- DropForeignKey
ALTER TABLE "Stroke" DROP CONSTRAINT "Stroke_fileId_fkey";

-- AddForeignKey
ALTER TABLE "Stroke" ADD CONSTRAINT "Stroke_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "CreatedFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "CreatedFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Collaborator" ADD CONSTRAINT "Collaborator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
