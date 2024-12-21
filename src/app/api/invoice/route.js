import db from '../../libs/db';
import { NextResponse } from "next/server"

export async function POST(request) {

    try {
        const { invoiceData, tableData } = await request.json();

        const invoice = await db.invoice.create({

            data: {
                companyName: invoiceData.companyName,
                invoiceAuthor: invoiceData.invoiceAuthor,
                companyAddress: invoiceData.companyAddress,
                companyCity: invoiceData.companyCity,
                companyCountry: invoiceData.companyCountry,
                clientCompany: invoiceData.clientCompany,
                clientAddress: invoiceData.clientAddress,
                clientCity: invoiceData.clientCity,
                clientCountry: invoiceData.clientCountry,
                invoiceNumber: invoiceData.invoiceNumber,
                invoiceDate: `${invoiceData.invoiceDate}T00:00:00Z`,
                invoiceDueDate: `${invoiceData.invoiceDueDate}T00:00:00Z`,
                logoUrl: invoiceData.logoUrl,
            },
        });

        const rowPromise = tableData.map(async (rowData) => {
            // console.log("Creating row for:", rowData);
            const row = await db.row.create({
                data: {
                    invoiceId: invoice.id,
                    itemDescription: rowData.itemDescription,
                    qty: parseInt(rowData.qty),
                    unitPrice: parseFloat(rowData.unitPrice),
                    tax: parseFloat(rowData.tax),
                    amount: parseFloat(rowData.amount),
                },
            });
            return row;
        });

        const rows = await Promise.all(rowPromise);

        return NextResponse.json({
            data: {
                invoice, rows
            }
        }, { status: 201 });
    } catch (error) {
        console.error("Error during invoice creation:", error.message, error.stack);
        return NextResponse.json(
            {
                error: error.message,
                stack: error.stack,
                message: "Couldn't create invoice",
            },
            {
                status: 500
            }
        );
    }
}
