/*
  Warnings:

  - You are about to drop the `image` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `darkBack` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `darkFront` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lightBack` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lightFront` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "image";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "darkFront" TEXT NOT NULL,
    "darkBack" TEXT NOT NULL,
    "lightFront" TEXT NOT NULL,
    "lightBack" TEXT NOT NULL
);
INSERT INTO "new_Product" ("id", "name", "price", "stock") SELECT "id", "name", "price", "stock" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
