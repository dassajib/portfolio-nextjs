"use client";

import { motion } from "framer-motion"
import Image from "next/image"
import { assets, serviceData } from "../assets/assets"

const Services = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="service"
            className="w-full px-[12%] py-10 scroll-mt-20">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center mb-2 text-lg">
                What I offer
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-4xl md:text-5xl">
                My Services
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="max-w-2xl mx-auto text-center mt-5 mb-12">
                I am an experienced Frontend Developer with over 1 year of professional experience in this field.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {
                    serviceData.map(({ icon, title, description, link }, index) => (
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            key={index}
                            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000] hover:translate-y-1 duration-500">
                            <Image src={icon} alt={title} className="w-10" />
                            <h3 className="text-lg border-b-gray-700 my-4">{title}</h3>
                            <p className="text-sm text-gray-600 leading-5">{description}</p>
                            <a className="flex items-center gap-2 text-sm mt-5" href={link}>
                                Read more
                                <Image src={assets.right_arrow} alt="Right arrow icon" className="w-4" />
                            </a>
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    )
}

export default Services