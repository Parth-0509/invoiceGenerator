import ThemeLink from "./ThemeLink";

function InvoiceCTA() {
    return (
        <div className="invoice-cta flex items-center justify-center">
            <div className="py-24 px-24 bg-white shadow-2xl round-md">
                <ThemeLink className="bg-red-500
                  hover:bg-red-600
                   focus:ring-red-300"
                    title="Create your first Invoice"
                    href="/invoice/new" />
            </div>
        </div>
    )
}
export default InvoiceCTA;