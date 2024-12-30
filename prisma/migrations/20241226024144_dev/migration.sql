/*
  Warnings:

  - You are about to drop the `_ProductTomaterial` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductTosize` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `material` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `size` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `material` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "_ProductTomaterial_B_index";

-- DropIndex
DROP INDEX "_ProductTomaterial_AB_unique";

-- DropIndex
DROP INDEX "_ProductTosize_B_index";

-- DropIndex
DROP INDEX "_ProductTosize_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProductTomaterial";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ProductTosize";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "material";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "size";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "stock" INTEGER NOT NULL,
    "material" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "darkFront" TEXT NOT NULL,
    "darkBack" TEXT NOT NULL,
    "lightFront" TEXT NOT NULL,
    "lightBack" TEXT NOT NULL
);
INSERT INTO "new_Product" ("darkBack", "darkFront", "id", "lightBack", "lightFront", "name", "price", "stock") SELECT "darkBack", "darkFront", "id", "lightBack", "lightFront", "name", "price", "stock" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
