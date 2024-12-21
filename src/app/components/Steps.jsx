function Steps() {
    return (
        <div className="py-8 md:py-16 px-4 md:px-16 bg-slate-50 flex items-center justify-center">
            <div className="">
                <h2 className="text-2xl md:text-4xl font-semibold mb-4">Free Invoice Generator (Add invoice details and download it in PDF format.)</h2>
                <div className="flex gap-6 items-center justify-center">
                    <div className="flex items-center gap-4">
                        <p className=" border-2 rounded-full p-2 h-8 w-8 flex-items-center justify-center border-slate-400">1</p>
                        <p>Invoice Details</p>

                        <div className="flex items-center gap-4">
                            <p className=" border-2 rounded-full p-2 h-8 w-8 flex-items-center justify-center border-slate-400">2</p>
                            <p>Design & Share (optional)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Steps;