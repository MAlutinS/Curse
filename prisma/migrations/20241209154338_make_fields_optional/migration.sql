-- DropForeignKey
ALTER TABLE "Brigade" DROP CONSTRAINT "Brigade_brigade_department_id_fkey";

-- DropForeignKey
ALTER TABLE "Locomotive" DROP CONSTRAINT "Locomotive_repair_brigade_id_fkey";

-- DropForeignKey
ALTER TABLE "Train" DROP CONSTRAINT "Train_train_locomotive_id_fkey";

-- DropForeignKey
ALTER TABLE "Travel_sheet" DROP CONSTRAINT "Travel_sheet_travel_train_id_fkey";

-- DropForeignKey
ALTER TABLE "Worker" DROP CONSTRAINT "Worker_brigade_id_fkey";

-- DropForeignKey
ALTER TABLE "Worker" DROP CONSTRAINT "Worker_department_id_fkey";

-- AlterTable
ALTER TABLE "Brigade" ALTER COLUMN "brigade_chief_id" DROP NOT NULL,
ALTER COLUMN "brigade_department_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Department" ALTER COLUMN "department_chief_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Locomotive" ALTER COLUMN "repair_brigade_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Train" ALTER COLUMN "train_locomotive_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Travel_sheet" ALTER COLUMN "travel_train_id" DROP NOT NULL,
ALTER COLUMN "train_brigade_id" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Worker" ALTER COLUMN "department_id" DROP NOT NULL,
ALTER COLUMN "brigade_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Worker" ADD CONSTRAINT "Worker_brigade_id_fkey" FOREIGN KEY ("brigade_id") REFERENCES "Brigade"("brigade_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Brigade" ADD CONSTRAINT "Brigade_brigade_department_id_fkey" FOREIGN KEY ("brigade_department_id") REFERENCES "Department"("department_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locomotive" ADD CONSTRAINT "Locomotive_repair_brigade_id_fkey" FOREIGN KEY ("repair_brigade_id") REFERENCES "Brigade"("brigade_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Train" ADD CONSTRAINT "Train_train_locomotive_id_fkey" FOREIGN KEY ("train_locomotive_id") REFERENCES "Locomotive"("locomotive_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Travel_sheet" ADD CONSTRAINT "Travel_sheet_travel_train_id_fkey" FOREIGN KEY ("travel_train_id") REFERENCES "Train"("train_id") ON DELETE SET NULL ON UPDATE CASCADE;
