/*
  Warnings:

  - You are about to drop the column `email` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `user` table. All the data in the column will be lost.
  - You are about to drop the column `postCode` on the `user` table. All the data in the column will be lost.
  - Added the required column `col1` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col10` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col2` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col3` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col4` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col5` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col6` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col7` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col8` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `col9` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `user`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`,
    DROP COLUMN `postCode`,
    ADD COLUMN `col1` INTEGER UNSIGNED NOT NULL,
    ADD COLUMN `col10` MEDIUMINT UNSIGNED NOT NULL,
    ADD COLUMN `col2` BIGINT NOT NULL,
    ADD COLUMN `col3` BIGINT UNSIGNED NOT NULL,
    ADD COLUMN `col4` DOUBLE NOT NULL,
    ADD COLUMN `col5` FLOAT NOT NULL,
    ADD COLUMN `col6` SMALLINT NOT NULL,
    ADD COLUMN `col7` MEDIUMINT NOT NULL,
    ADD COLUMN `col8` DECIMAL(65, 30) NOT NULL,
    ADD COLUMN `col9` TINYINT NOT NULL;
