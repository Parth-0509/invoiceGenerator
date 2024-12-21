
import { FaCheckCircle } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
function Pricing() {
    return (
        <div className="bg-slate-100 flex flex-col gap-6 py-8 md:py-16 px-4 md:px-16">
            <div className="">
                <div className="flex items-center justify-center flex-col mb-12">
                    <h2 className="text-2xl md:text-5xl font-semibold mb-4"> Pricing of Invoice Generator</h2>
                    <p>Only Pay When You Need Premium Features.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white shadow-2xl rounded-lg p-12 flex flex-col gap-6">
                        { }
                        <div className="flex items-center justify-center rounded-full w-16 h-26 bg-purple-100">
                            <FaCheckCircle className="text-3xl backdrop:placeholder:file text-purple-500" />
                        </div>
                        <h4 className="mb-6 text-2xl fort-bold text-slate-900">Free Plan</h4>
                        <p className="text-slate-500">All of our premium features are available on a free trial. Experience what all Refrens has to offer without making any payment!</p>
                        <a className="text-purple-700 hover:text-purple-900 font-bold" href="/invoice/new">Create free Invoice</a>
                    </div>


                    <div className="bg-white shadow-2xl rounded-lg p-12 flex flex-col gap-6">
                        { }
                        <div className="flex items-center justify-center rounded-full w-16 h-26 bg-purple-100">
                            <MdWorkspacePremium className="text-3xl backdrop:placeholder:file text-purple-500" />
                        </div>
                        <h4 className="mb-6 text-2xl fort-bold text-slate-900">Premium Plan</h4>
                        <p className="text-slate-500">Manage your accounting at faster pace with additional premium features at minimal cost.</p>
                        <a className="text-purple-700 hover:text-purple-900 font-bold" href="/features">Explore Premium Features</a>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Pricing;