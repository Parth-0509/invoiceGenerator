import React from 'react'
import ThemeLink from "./ThemeLink";
import { TiThMenu } from "react-icons/ti";

function Navbar() {
    return (
        <header className="bg-violet-700 fixed top-0 right-0 w-full left-0 h-14 flex items-center justify-between py-17 px-16 text-slate-50 z-50">
            <a className="font-bold text-4xl md:text=4x1" href="/">Invoicer</a>

            <nav className='flex items-center gap-3'>
                <a href="/">Features</a>
                <a href="/">Pricing</a>
                <a href="/">Free tools</a>

            </nav>

            <div className='flex items-center gap-4'>
                <a href="/login">Login </a>

                <ThemeLink className="bg-red-500
                  hover:bg-red-600
                   focus:ring-red-300"
                    title="Register" href="/register" />
            </div>

        </header>
    )
}
export default Navbar;
