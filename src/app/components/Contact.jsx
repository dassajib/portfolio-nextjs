"use client";

import { useState } from "react";
import { motion } from "framer-motion"
import Image from "next/image"
import { assets } from "../assets/assets"

const Contact = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "5c30bd53-c709-4dcb-b127-a3ed41b5162b");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="contact"
            className="w-full px-[12%] pb-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-cover">
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center text-lg mb-2">
                Contact with Me
            </motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-4xl md:text-5xl">
                Get in touch
            </motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center max-w-2xl mx-auto mt-5 md:mb-12">
                I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </motion.p>

            <motion.form
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                onSubmit={onSubmit}
                className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-8">
                    <motion.input
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                        name="name"
                        className="flex-1 bg-white p-3 outline-none border-[0.5px] border-gray-400 rounded-md" type="text" placeholder="Enter Your Name" required />
                    <motion.input
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        name="email"
                        className="flex-1 bg-white p-3 outline-none border-[0.5px] border-gray-400 rounded-md" type="email" placeholder="Enter Your Email" required />
                </div>
                <textarea name="message" rows="6" className="w-full bg-white p-4 outline-none border-[0.5px] border-gray-400 rounded-md" placeholder="Enter Your Name" required></textarea>
                <button type="submit" className="w-max mx-auto bg-black/80 text-white flex justify-between items-center gap-2 px-10 py-3 rounded-full cursor-pointer hover:bg-black duration-500">
                    Submit
                    <Image src={assets.right_arrow_white} alt="Right arrow icon" className="w-4" />
                </button>
                <p>{result}</p>
            </motion.form>
        </motion.div>
    )
}

export default Contact