"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { assets } from "../assets/assets"

const Header = () => {
    return (
        <div className="max-w-3xl w-11/12 h-screen mx-auto text-center flex flex-col justify-center items-center gap-4">
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="mt-36 md:mt-20">
                <Image className="w-20 md:w-40 rounded-full" src={assets.profile_img} alt="my image" />
            </motion.div>
            <motion.h3
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-end gap-2 text-xl md:text-2xl mb-3">
                Hi! I'm Sajib Das
                <Image className="w-6" src={assets.hand_icon} alt="hsnd icon" />
            </motion.h3>

            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-3xl sm:text-6xl lg:text-[66px]">
                Frontend Web Developer
            </motion.h1>
            <div>
                <motion.p
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="max-w-2xl mx-auto mt-5">
                    I am a frontend developer from Dhaka,Bangladesh with 1.5 year's of experience</motion.p>
                <p className="max-w-2xl mx-auto">Email : sajibdas.sd@gmail.com</p>
                <p className="max-w-2xl mx-auto">Phone : 01742623585</p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="px-10 py-3 border border-white bg-black text-white rounded-full flex items-center gap-2" href="#contact">
                    Contact Me
                    <Image className="w-4" src={assets.right_arrow_white} alt="right arrow icon" />
                </motion.a>
                <motion.a
                    initial={{ y: -30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/SajibDasResume.pdf" download className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2">
                    My Resume
                    <Image className="w-4" src={assets.download_icon} alt="download icon" />
                </motion.a>
            </div>
        </div>
    )
}

export default Header