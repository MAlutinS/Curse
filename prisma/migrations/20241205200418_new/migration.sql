/*
  Warnings:

  - The primary key for the `Department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `head_id` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Department` table. All the data in the column will be lost.
  - You are about to drop the column `work_scope` on the `Department` table. All the data in the column will be lost.
  - The primary key for the `Document` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `issue_date` on the `Document` table. All the data in the column will be lost.
  - You are about to drop the column `series` on the `Document` table. All the data in the column will be lost.
  - The primary key for the `Locomotive` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `annual_inspection_date` on the `Locomotive` table. All the data in the column will be lost.
  - You are about to drop the column `condition` on the `Locomotive` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Locomotive` table. All the data in the column will be lost.
  - You are about to drop the column `inspection_team_id` on the `Locomotive` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Locomotive` table. All the data in the column will be lost.
  - The primary key for the `Luggage` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Luggage` table. All the data in the column will be lost.
  - You are about to drop the column `transportation_cost` on the `Luggage` table. All the data in the column will be lost.
  - The primary key for the `Passenger` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `gender` on the `Passenger` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Passenger` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Passenger` table. All the data in the column will be lost.
  - The primary key for the `Route` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `fare` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Route` table. All the data in the column will be lost.
  - You are about to drop the column `station_list` on the `Route` table. All the data in the column will be lost.
  - The primary key for the `Ticket` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `fare` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `route_id` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `ticket_number` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `train_id` on the `Ticket` table. All the data in the column will be lost.
  - The primary key for the `Train` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `carriage_count` on the `Train` table. All the data in the column will be lost.
  - You are about to drop the column `day_of_operation` on the `Train` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Train` table. All the data in the column will be lost.
  - You are about to drop the column `locomotive_id` on the `Train` table. All the data in the column will be lost.
  - You are about to drop the column `route_id` on the `Train` table. All the data in the column will be lost.
  - You are about to drop the column `train_number` on the `Train` table. All the data in the column will be lost.
  - You are about to drop the `Carriage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cashier` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Team` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Waybill` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[train_id]` on the table `Luggage` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[passenger_id]` on the table `Luggage` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[train_locomotive_id]` on the table `Train` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `area_work` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department_chief_id` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document_issue_date` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `document_series` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Document` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `document_number` on the `Document` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `last_tech_inspection` to the `Locomotive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locomotive_condition` to the `Locomotive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locomotive_type` to the `Locomotive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `repair_brigade_id` to the `Locomotive` table without a default value. This is not possible if the table is not empty.
  - Added the required column `transport_cost` to the `Luggage` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstname` to the `Passenger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastname` to the `Passenger` table without a default value. This is not possible if the table is not empty.
  - Added the required column `route_category` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Added the required column `route_cost` to the `Route` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `route_number` on the `Route` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `departures_date` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticket_cost` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticket_status` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `train_route_number` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `train_length` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `train_locomotive_id` to the `Train` table without a default value. This is not possible if the table is not empty.
  - Added the required column `train_route_number` to the `Train` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Carriage" DROP CONSTRAINT "Carriage_locomotive_id_fkey";

-- DropForeignKey
ALTER TABLE "Cashier" DROP CONSTRAINT "Cashier_employee_id_fkey";

-- DropForeignKey
ALTER TABLE "Department" DROP CONSTRAINT "Department_head_id_fkey";

-- DropForeignKey
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_department_id_fkey";

-- DropForeignKey
ALTER TABLE "Locomotive" DROP CONSTRAINT "Locomotive_inspection_team_id_fkey";

-- DropForeignKey
ALTER TABLE "Luggage" DROP CONSTRAINT "Luggage_passenger_id_fkey";

-- DropForeignKey
ALTER TABLE "Luggage" DROP CONSTRAINT "Luggage_train_id_fkey";

-- DropForeignKey
ALTER TABLE "Passenger" DROP CONSTRAINT "Passenger_document_id_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_department_id_fkey";

-- DropForeignKey
ALTER TABLE "Team" DROP CONSTRAINT "Team_head_id_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_passenger_id_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_route_id_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_train_id_fkey";

-- DropForeignKey
ALTER TABLE "Train" DROP CONSTRAINT "Train_locomotive_id_fkey";

-- DropForeignKey
ALTER TABLE "Train" DROP CONSTRAINT "Train_route_id_fkey";

-- DropForeignKey
ALTER TABLE "Waybill" DROP CONSTRAINT "Waybill_crew_id_fkey";

-- DropForeignKey
ALTER TABLE "Waybill" DROP CONSTRAINT "Waybill_train_id_fkey";

-- DropIndex
DROP INDEX "Department_head_id_key";

-- DropIndex
DROP INDEX "Document_document_number_key";

-- DropIndex
DROP INDEX "Ticket_ticket_number_key";

-- DropIndex
DROP INDEX "Train_train_number_key";

-- AlterTable
ALTER TABLE "Department" DROP CONSTRAINT "Department_pkey",
DROP COLUMN "head_id",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "work_scope",
ADD COLUMN     "area_work" TEXT NOT NULL,
ADD COLUMN     "department_chief_id" INTEGER NOT NULL,
ADD COLUMN     "department_id" SERIAL NOT NULL,
ADD CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id");

-- AlterTable
ALTER TABLE "Document" DROP CONSTRAINT "Document_pkey",
DROP COLUMN "id",
DROP COLUMN "issue_date",
DROP COLUMN "series",
ADD COLUMN     "document_id" SERIAL NOT NULL,
ADD COLUMN     "document_issue_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "document_series" INTEGER NOT NULL,
ADD COLUMN     "gender" TEXT NOT NULL,
DROP COLUMN "document_number",
ADD COLUMN     "document_number" INTEGER NOT NULL,
ADD CONSTRAINT "Document_pkey" PRIMARY KEY ("document_id");

-- AlterTable
ALTER TABLE "Locomotive" DROP CONSTRAINT "Locomotive_pkey",
DROP COLUMN "annual_inspection_date",
DROP COLUMN "condition",
DROP COLUMN "id",
DROP COLUMN "inspection_team_id",
DROP COLUMN "type",
ADD COLUMN     "last_tech_inspection" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "locomotive_condition" TEXT NOT NULL,
ADD COLUMN     "locomotive_id" SERIAL NOT NULL,
ADD COLUMN     "locomotive_type" TEXT NOT NULL,
ADD COLUMN     "repair_brigade_id" INTEGER NOT NULL,
ADD CONSTRAINT "Locomotive_pkey" PRIMARY KEY ("locomotive_id");

-- AlterTable
ALTER TABLE "Luggage" DROP CONSTRAINT "Luggage_pkey",
DROP COLUMN "id",
DROP COLUMN "transportation_cost",
ADD COLUMN     "luggage_id" SERIAL NOT NULL,
ADD COLUMN     "transport_cost" DOUBLE PRECISION NOT NULL,
ADD CONSTRAINT "Luggage_pkey" PRIMARY KEY ("luggage_id");

-- AlterTable
ALTER TABLE "Passenger" DROP CONSTRAINT "Passenger_pkey",
DROP COLUMN "gender",
DROP COLUMN "id",
DROP COLUMN "name",
ADD COLUMN     "firstname" TEXT NOT NULL,
ADD COLUMN     "lastname" TEXT NOT NULL,
ADD COLUMN     "passenger_id" SERIAL NOT NULL,
ADD CONSTRAINT "Passenger_pkey" PRIMARY KEY ("passenger_id");

-- AlterTable
ALTER TABLE "Route" DROP CONSTRAINT "Route_pkey",
DROP COLUMN "category",
DROP COLUMN "fare",
DROP COLUMN "id",
DROP COLUMN "station_list",
ADD COLUMN     "route_category" TEXT NOT NULL,
ADD COLUMN     "route_cost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "route_id" SERIAL NOT NULL,
ADD COLUMN     "stations_list" TEXT[],
DROP COLUMN "route_number",
ADD COLUMN     "route_number" INTEGER NOT NULL,
ADD CONSTRAINT "Route_pkey" PRIMARY KEY ("route_id");

-- AlterTable
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_pkey",
DROP COLUMN "fare",
DROP COLUMN "id",
DROP COLUMN "route_id",
DROP COLUMN "ticket_number",
DROP COLUMN "train_id",
ADD COLUMN     "departures_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "ticket_cost" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "ticket_id" SERIAL NOT NULL,
ADD COLUMN     "ticket_status" TEXT NOT NULL,
ADD COLUMN     "train_route_number" INTEGER NOT NULL,
ADD CONSTRAINT "Ticket_pkey" PRIMARY KEY ("ticket_id");

-- AlterTable
ALTER TABLE "Train" DROP CONSTRAINT "Train_pkey",
DROP COLUMN "carriage_count",
DROP COLUMN "day_of_operation",
DROP COLUMN "id",
DROP COLUMN "locomotive_id",
DROP COLUMN "route_id",
DROP COLUMN "train_number",
ADD COLUMN     "train_id" SERIAL NOT NULL,
ADD COLUMN     "train_length" INTEGER NOT NULL,
ADD COLUMN     "train_locomotive_id" INTEGER NOT NULL,
ADD COLUMN     "train_route_number" INTEGER NOT NULL,
ADD CONSTRAINT "Train_pkey" PRIMARY KEY ("train_id");

-- DropTable
DROP TABLE "Carriage";

-- DropTable
DROP TABLE "Cashier";

-- DropTable
DROP TABLE "Employee";

-- DropTable
DROP TABLE "Team";

-- DropTable
DROP TABLE "Waybill";

-- CreateTable
CREATE TABLE "Worker" (
    "worker_id" SERIAL NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,
    "brigade_id" INTEGER NOT NULL,
    "qualification" TEXT NOT NULL,
    "medical_examination" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Worker_pkey" PRIMARY KEY ("worker_id")
);

-- CreateTable
CREATE TABLE "Brigade" (
    "brigade_id" SERIAL NOT NULL,
    "brigade_chief_id" INTEGER NOT NULL,
    "brigade_department_id" INTEGER NOT NULL,

    CONSTRAINT "Brigade_pkey" PRIMARY KEY ("brigade_id")
);

-- CreateTable
CREATE TABLE "Wagon" (
    "wagon_id" SERIAL NOT NULL,
    "wagon_side_number" INTEGER NOT NULL,
    "conductor_id" INTEGER NOT NULL,
    "train_id" INTEGER NOT NULL,

    CONSTRAINT "Wagon_pkey" PRIMARY KEY ("wagon_id")
);

-- CreateTable
CREATE TABLE "Travel_sheet" (
    "travel_sheet_id" SERIAL NOT NULL,
    "travel_train_id" INTEGER NOT NULL,
    "departures_day" TIMESTAMP(3) NOT NULL,
    "train_brigade_id" INTEGER NOT NULL,

    CONSTRAINT "Travel_sheet_pkey" PRIMARY KEY ("travel_sheet_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Travel_sheet_travel_train_id_key" ON "Travel_sheet"("travel_train_id");

-- CreateIndex
CREATE UNIQUE INDEX "Luggage_train_id_key" ON "Luggage"("train_id");

-- CreateIndex
CREATE UNIQUE INDEX "Luggage_passenger_id_key" ON "Luggage"("passenger_id");

-- CreateIndex
CREATE UNIQUE INDEX "Route_route_number_key" ON "Route"("route_number");

-- CreateIndex
CREATE UNIQUE INDEX "Train_train_locomotive_id_key" ON "Train"("train_locomotive_id");

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_brigade_id_fkey" FOREIGN KEY ("brigade_id") REFERENCES "Brigade"("brigade_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brigade" ADD CONSTRAINT "Brigade_brigade_department_id_fkey" FOREIGN KEY ("brigade_department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locomotive" ADD CONSTRAINT "Locomotive_repair_brigade_id_fkey" FOREIGN KEY ("repair_brigade_id") REFERENCES "Brigade"("brigade_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Train" ADD CONSTRAINT "Train_train_locomotive_id_fkey" FOREIGN KEY ("train_locomotive_id") REFERENCES "Locomotive"("locomotive_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Train" ADD CONSTRAINT "Train_train_route_number_fkey" FOREIGN KEY ("train_route_number") REFERENCES "Route"("route_number") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wagon" ADD CONSTRAINT "Wagon_train_id_fkey" FOREIGN KEY ("train_id") REFERENCES "Train"("train_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Travel_sheet" ADD CONSTRAINT "Travel_sheet_travel_train_id_fkey" FOREIGN KEY ("travel_train_id") REFERENCES "Train"("train_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_passenger_id_fkey" FOREIGN KEY ("passenger_id") REFERENCES "Passenger"("passenger_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "Document"("document_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_passenger_id_fkey" FOREIGN KEY ("passenger_id") REFERENCES "Luggage"("passenger_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Luggage" ADD CONSTRAINT "Luggage_train_id_fkey" FOREIGN KEY ("train_id") REFERENCES "Train"("train_id") ON DELETE RESTRICT ON UPDATE CASCADE;
