"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { assets, workData } from "../assets/assets"

const Work = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="work"
            className="w-full px-[12%] py-10 scroll-mt-20">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-center text-lg mb-2">
                My Portfolio
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-4xl md:text-5xl">
                My latest Work
            </motion.h2>
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="max-w-2xl mx-auto text-center mt-5 mb-12">
                Welcome to my Development Portfolio. Explore a collection of project's showcasing my experince in Frontend Development.
            </motion.p>

            <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10"
            >
                {workData.map((project, index) => (
                    <a
                        key={index}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.6 }}
                            className="relative aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer group"
                            style={{ backgroundImage: `url(${project.bgImage})` }}
                        >
                            <div className="absolute bottom-5 right-1/2 bg-white w-10/12 rounded-md translate-x-1/2 px-3 py-2 duration-500 flex justify-between items-center group-hover:bottom-7">
                                <div>
                                    <h2 className="text-md whitespace-nowrap font-semibold">{project.title}</h2>
                                    <p className="text-sm text-gray-700">{project.description}</p>
                                </div>
                                <div className="w-9 border border-black rounded-full aspect-square flex justify-center items-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ">
                                    <Image src={assets.send_icon} alt="Send icon" className="w-5" />
                                </div>
                            </div>
                        </motion.div>
                    </a>
                ))}
            </motion.div>
            
            <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                href=""
                className="w-max mx-auto flex justify-center items-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 my-20 hover:bg-[#fcf3ff] duration-500">
                Show More
                <Image src={assets.right_arrow_bold} alt="right arrow icon" className="w-4" />
            </motion.a>
        </motion.div>
    )
}

export default Work