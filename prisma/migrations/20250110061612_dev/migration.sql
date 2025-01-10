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
    "lightBack" TEXT NOT NULL,
    "shopee" TEXT NOT NULL DEFAULT '',
    "tokopedia" TEXT NOT NULL DEFAULT '',
    "tiktok" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_Product" ("category", "darkBack", "darkFront", "id", "lightBack", "lightFront", "material", "name", "price", "size", "stock") SELECT "category", "darkBack", "darkFront", "id", "lightBack", "lightFront", "material", "name", "price", "size", "stock" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
