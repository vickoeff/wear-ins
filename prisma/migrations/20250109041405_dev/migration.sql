/*
  Warnings:

  - Added the required column `description` to the `Gallery` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Gallery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "imageUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    CONSTRAINT "Gallery_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Gallery" ("id", "imageUrl", "productId") SELECT "id", "imageUrl", "productId" FROM "Gallery";
DROP TABLE "Gallery";
ALTER TABLE "new_Gallery" RENAME TO "Gallery";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
