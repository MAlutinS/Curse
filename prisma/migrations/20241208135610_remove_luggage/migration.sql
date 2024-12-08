/*
  Warnings:

  - You are about to drop the `Luggage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Luggage" DROP CONSTRAINT "Luggage_train_id_fkey";

-- DropForeignKey
ALTER TABLE "Passenger" DROP CONSTRAINT "Passenger_passenger_id_fkey";

-- DropTable
DROP TABLE "Luggage";
