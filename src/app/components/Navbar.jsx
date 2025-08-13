"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { assets, navLinks } from "../assets/assets"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [isScroll, setIsScroll] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }

        return () => {
            document.body.classList.remove("overflow-hidden")
        }
    }, [open])

    return (
        <nav className={`w-full fixed z-50 px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
            <a href="#top">
                <Image src={assets.logo} alt="logo" className="w-24 md:w-32 cursor-pointer" />
            </a>

            <ul className={`hidden md:flex items-center gap-6 px-10 py-3 rounded-full ${isScroll ? "" : "lg:gap-8 bg-white/50 shadow-sm"}`}>
                {
                    navLinks.map(({ label, href }) => (
                        <li key={label}>
                            <a href={href}> {label} </a>
                        </li>
                    ))
                }
            </ul>

            <div className="flex items-center gap-3 sm:gap-4">
                {/* GitHub Button - Always Visible */}
                <a
                    href="https://github.com/dassajib"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-gray-900 text-white text-sm sm:text-base font-semibold rounded-lg shadow-md hover:shadow-lg hover:bg-gray-800 active:scale-95 transition-all duration-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                    >
                        <path d="M12 .297a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.9 0-1.3.46-2.36 1.22-3.19-.12-.3-.53-1.51.11-3.15 0 0 1.01-.32 3.3 1.21a11.49 11.49 0 016 0c2.29-1.53 3.3-1.21 3.3-1.21.64 1.64.23 2.85.11 3.15.76.83 1.22 1.89 1.22 3.19 0 4.58-2.8 5.6-5.48 5.9.43.38.81 1.12.81 2.26v3.35c0 .32.21.7.82.58A12 12 0 0012 .297" />
                    </svg>
                    <span className="hidden md:block">GitHub</span>
                </a>

                {/* Contact Button - Hidden on Mobile */}
                <a
                    href="#contact"
                    className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-gray-500 rounded-full hover:bg-gray-100 hover:border-gray-700 transition-all duration-200 text-sm sm:text-base"
                >
                    Contact Me
                    <Image src={assets.arrow_icon} alt="contact logo" className="w-3 sm:w-4" />
                </a>

                {/* Mobile Menu Button - Visible on Mobile Only */}
                <button
                    className="block md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => setOpen(!open)}
                >
                    <Image src={assets.menu_black} alt="menu" className="w-5 sm:w-6" />
                </button>
            </div>

            {/* mobile menu */}
            <ul className={`flex flex-col gap-4 py-20 px-10 bg-rose-50 fixed top-0 bottom-0 w-56 h-screen transition-all duration-500 ${open ? "right-0" : "-right-64"}`}>
                <div className="absolute top-6 right-6">
                    <Image onClick={() => setOpen(!open)} src={assets.close_black} alt="close image" className="w-6 cursor-pointer" />
                </div>

                {
                    navLinks.map(({ label, href }) => (
                        <li key={label}>
                            <a onClick={() => setOpen(false)} href={href}>{label}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar