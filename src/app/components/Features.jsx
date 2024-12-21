import { BsCurrencyDollar } from "react-icons/bs";
import { FaColumns } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { GoProjectTemplate } from "react-icons/go";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbSend } from "react-icons/tb";
import ThemeLink from "./ThemeLink";

function Features() {
    const features = [
        {
            icon: BsCurrencyDollar,
            title: "Create Invoices",
            description: "Create professional invoices without any hassle of re-entering data the second time "
        },
        {
            icon: FaColumns,
            title: "Customization of Columns",
            description: " Customizable invoice template to add more relevant information and columns."
        },
        {
            icon: MdAttachEmail,
            title: "Email & Track Invoices",
            description: "Send invoice via email and get to know when the invoice was opened. "
        },
        {
            icon: AiOutlineLoading3Quarters,
            title: "Recurring Invoices",
            description: "Create recurring invoices & never miss your payments. Perfect for billing weekly, monthly or yearly. "
        },
        {
            icon: GoProjectTemplate,
            title: "Invoice Templates",
            description: "With a range of invoice designs, send personalized invoices to the clients that proclaim your brand. "
        },
        {
            icon: BsGraphUpArrow,
            title: "Insightful Reports",
            description: "Reports help you follow compliance and give insight into business performance."
        },
        {
            icon: FaPeopleGroup,
            title: "Client Management",
            description: "Automatically track client-wise invoices, and payments, and maintain additional details. "
        },
        {
            icon: TbSend,
            title: "Bulk Upload Invoices",
            description: "Streamline your invoicing process by uploading all of your invoices at once. "
        }
    ]
    return (
        <div className="bg-slate-950 py-8 md:py-16 md:px-16 px-4 text-slate-50 items-center gap-8 ">
            <h2 className="text-center text-2xl md:text-5xl font-semibold mb-12"> Features of Invoice Generator</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {
                    features.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                            <div className="mb-3" key={i}>
                                <div className="border-2 border-purple-400 rounded-lg py-4 w-14 h-14 flex items-center justify-center mb-3">
                                    <Icon className="text-3xl" />
                                </div>
                                <p className="mb-3 text-xl">{feature.title}</p>
                                <p className="text-slate-400 text-sm">{feature.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center mt-12">
                <ThemeLink
                    className="bg-violet-500 hover:bg-violet-600 focus:ring-red-300 px-6 py-3 rounded-lg text-white"
                    title="Create Invoice for Free"
                />
            </div>

        </div>
    )
}
export default Features;