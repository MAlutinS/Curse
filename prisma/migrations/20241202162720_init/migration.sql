-- CreateTable
CREATE TABLE "Team" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,
    "head_id" INTEGER NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "head_id" INTEGER NOT NULL,
    "work_scope" TEXT NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Employee" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,
    "employee_number" TEXT NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Train" (
    "id" SERIAL NOT NULL,
    "train_number" TEXT NOT NULL,
    "day_of_operation" TEXT NOT NULL,
    "locomotive_id" INTEGER NOT NULL,
    "route_id" INTEGER NOT NULL,
    "carriage_count" INTEGER NOT NULL,

    CONSTRAINT "Train_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Locomotive" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "annual_inspection_date" TIMESTAMP(3) NOT NULL,
    "inspection_team_id" INTEGER NOT NULL,

    CONSTRAINT "Locomotive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carriage" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "side_number" TEXT NOT NULL,
    "conductor_employee_number" TEXT NOT NULL,
    "locomotive_id" INTEGER NOT NULL,

    CONSTRAINT "Carriage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Waybill" (
    "id" SERIAL NOT NULL,
    "train_id" INTEGER NOT NULL,
    "departure_date" TIMESTAMP(3) NOT NULL,
    "arrival_date" TIMESTAMP(3) NOT NULL,
    "crew_id" INTEGER NOT NULL,

    CONSTRAINT "Waybill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Luggage" (
    "id" SERIAL NOT NULL,
    "train_id" INTEGER NOT NULL,
    "passenger_id" INTEGER NOT NULL,
    "cargo_type" TEXT NOT NULL,
    "cargo_weight" DOUBLE PRECISION NOT NULL,
    "transportation_cost" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Luggage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Route" (
    "id" SERIAL NOT NULL,
    "route_number" TEXT NOT NULL,
    "station_list" TEXT NOT NULL,
    "fare" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,

    CONSTRAINT "Route_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Passenger" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "document_id" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,

    CONSTRAINT "Passenger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "id" SERIAL NOT NULL,
    "ticket_number" TEXT NOT NULL,
    "train_id" INTEGER NOT NULL,
    "passenger_id" INTEGER NOT NULL,
    "purchase_date" TIMESTAMP(3) NOT NULL,
    "route_id" INTEGER NOT NULL,
    "fare" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cashier" (
    "id" SERIAL NOT NULL,
    "cashier_number" TEXT NOT NULL,
    "employee_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "station" TEXT NOT NULL,

    CONSTRAINT "Cashier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "document_number" TEXT NOT NULL,
    "series" TEXT NOT NULL,
    "issue_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Team_head_id_key" ON "Team"("head_id");

-- CreateIndex
CREATE UNIQUE INDEX "Department_head_id_key" ON "Department"("head_id");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_employee_number_key" ON "Employee"("employee_number");

-- CreateIndex
CREATE UNIQUE INDEX "Train_train_number_key" ON "Train"("train_number");

-- CreateIndex
CREATE UNIQUE INDEX "Carriage_side_number_key" ON "Carriage"("side_number");

-- CreateIndex
CREATE UNIQUE INDEX "Route_route_number_key" ON "Route"("route_number");

-- CreateIndex
CREATE UNIQUE INDEX "Passenger_document_id_key" ON "Passenger"("document_id");

-- CreateIndex
CREATE UNIQUE INDEX "Ticket_ticket_number_key" ON "Ticket"("ticket_number");

-- CreateIndex
CREATE UNIQUE INDEX "Cashier_cashier_number_key" ON "Cashier"("cashier_number");

-- CreateIndex
CREATE UNIQUE INDEX "Cashier_employee_id_key" ON "Cashier"("employee_id");

-- CreateIndex
CREATE UNIQUE INDEX "Document_document_number_key" ON "Document"("document_number");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_head_id_fkey" FOREIGN KEY ("head_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_head_id_fkey" FOREIGN KEY ("head_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Train" ADD CONSTRAINT "Train_locomotive_id_fkey" FOREIGN KEY ("locomotive_id") REFERENCES "Locomotive"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Train" ADD CONSTRAINT "Train_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Locomotive" ADD CONSTRAINT "Locomotive_inspection_team_id_fkey" FOREIGN KEY ("inspection_team_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carriage" ADD CONSTRAINT "Carriage_locomotive_id_fkey" FOREIGN KEY ("locomotive_id") REFERENCES "Locomotive"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waybill" ADD CONSTRAINT "Waybill_train_id_fkey" FOREIGN KEY ("train_id") REFERENCES "Train"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Waybill" ADD CONSTRAINT "Waybill_crew_id_fkey" FOREIGN KEY ("crew_id") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Luggage" ADD CONSTRAINT "Luggage_train_id_fkey" FOREIGN KEY ("train_id") REFERENCES "Train"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Luggage" ADD CONSTRAINT "Luggage_passenger_id_fkey" FOREIGN KEY ("passenger_id") REFERENCES "Passenger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Passenger" ADD CONSTRAINT "Passenger_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_train_id_fkey" FOREIGN KEY ("train_id") REFERENCES "Train"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_passenger_id_fkey" FOREIGN KEY ("passenger_id") REFERENCES "Passenger"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_route_id_fkey" FOREIGN KEY ("route_id") REFERENCES "Route"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cashier" ADD CONSTRAINT "Cashier_employee_id_fkey" FOREIGN KEY ("employee_id") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
