import React from 'react'
import ThemeLink from './ThemeLink';



function Hero() {
    return (
        <div className="mt-26 bg-violet-700 grid grid-cols-1 md:grid-cols-2 py-16 px-16 text-slate-50">
            <div className="flex flex-col py-8 space-y-6 items-start">
                <h2 className="text-3xl md:text-3xl font-bold mt-16">Free Invoice generator - Invoice Maker</h2>
                <p className="text-base md:3xl ">Use Invoice Templates to Create Invoices
                    Online
                    Download, Print, Email <br />   Invoice with Invoice Generator</p>
                <ThemeLink className="bg-red-600
                  hover:bg-red-700
                   focus:ring-red-400"
                    title="Create your First Invoice" href="/invoice/new" />
            </div>

        </div>
    )
}

export default Hero;
