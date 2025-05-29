"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { assets, infoList, toolsData } from "../assets/assets"

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="about"
            className="w-full px-[12%] pt-32 md:py-10 scroll-mt-20">
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center mb-2 text-lg">
                Introduction
            </motion.h2>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-4xl md:text-5xl">
                About Me
            </motion.h4>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full flex flex-col lg:flex-row items-center gap-20 my-2 md:my-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-64 sm:w-80 max-w-none rounded-3xl">
                    <Image className="w-full rounded-3xl" src={assets.my_about_pic} alt="my image" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex-1">
                    <p className="max-w-2xl mb-10">
                        I am an experienced Frontend Developer with over 1 year of professional experience in this field.
                    </p>

                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {
                            infoList.map(({ icon, title, description }, index) => (
                                <motion.li
                                    whileHover={{ opacity: 1.5 }}
                                    key={index}
                                    className="border-[0.5px] border-green-400 rounded-md p-6 cursor-pointer hover:bg-[#fcf4ff] hover:translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                                    <Image className="w-7 mt-3" src={icon} alt={title} />
                                    <h3 className="my-4 text-gray-700 font-semibold">{title}</h3>
                                    <p className="text-gray-600 text-sm">{description}</p>
                                </motion.li>
                            ))
                        }
                    </motion.ul>

                    <motion.h4
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.3, delay: 0.5 }}
                        className="my-6 text-gray-700">
                        Tool's I Use
                    </motion.h4>
                    <motion.ul
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                        className="flex items-center gap-3 sm:gap-5">
                        {
                            toolsData.map((tool, index) => (
                                <motion.li
                                    whileHover={{ scale: 1.1 }}
                                    key={index}
                                    className="flex justify-center items-center w-12 sm:w-14 border border-gray-400 rounded-lg aspect-square cursor-pointer hover:translate-y-1 duration-500">
                                    <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                                </motion.li>
                            ))
                        }
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About