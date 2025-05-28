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

            <div className="flex items-center gap-4">
                <button>
                    <Image src={assets.moon_icon} alt="moon icon" className="w-6 cursor-pointer" />
                </button>
                <a href="#contact" className="hidden md:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4">
                    Contact Me
                    <Image src={assets.arrow_icon} alt="contact logo" className="w-3" />
                </a>
                <button className="block md:hidden ml-3 cursor-pointer">
                    <Image onClick={() => setOpen(!open)} src={assets.menu_black} alt="menu" className="w-6" />
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