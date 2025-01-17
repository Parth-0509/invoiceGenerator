-- CreateTable
CREATE TABLE "InvoiceGenerator" (
    "id" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "invoiceAuthor" TEXT NOT NULL,
    "companyAddress" TEXT NOT NULL,
    "companyCity" TEXT NOT NULL,
    "companyCountry" TEXT NOT NULL,
    "clientCompany" TEXT NOT NULL,
    "clientAddress" TEXT NOT NULL,
    "clientCity" TEXT NOT NULL,
    "clientCountry" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "invoiceDate" TIMESTAMP(3) NOT NULL,
    "invoiceDueDate" TIMESTAMP(3) NOT NULL,
    "notes" TEXT NOT NULL,
    "terms" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "InvoiceGenerator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Row" (
    "id" SERIAL NOT NULL,
    "itemDescription" TEXT NOT NULL,
    "qty" INTEGER NOT NULL,
    "unitPrice" DOUBLE PRECISION NOT NULL,
    "tax" DOUBLE PRECISION NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "invoiceId" INTEGER NOT NULL,

    CONSTRAINT "Row_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "InvoiceGenerator" ADD CONSTRAINT "InvoiceGenerator_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Row" ADD CONSTRAINT "Row_invoiceId_fkey" FOREIGN KEY ("invoiceId") REFERENCES "InvoiceGenerator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
