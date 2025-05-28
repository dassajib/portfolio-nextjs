import Image from "next/image"
import { assets } from "../assets/assets"

const Contact = () => {
    return (
        <div id="contact" className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-cover">
            <h4 className="text-center text-lg mb-2">Contact with Me</h4>
            <h2 className="text-center text-5xl">Get in touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
                I'd love to hear from you! If you have any questions, comments or feedback, please use the form below.
            </p>

            <form className="max-w-2xl mx-auto">
                <div className="grid grid-cols-2 gap-6 mt-10 mb-8">
                    <input className="flex-1 bg-white p-3 outline-none border-[0.5px] border-gray-400 rounded-md" type="text" placeholder="Enter Your Name" required />
                    <input className="flex-1 bg-white p-3 outline-none border-[0.5px] border-gray-400 rounded-md" type="email" placeholder="Enter Your Email" required />
                </div>
                <textarea rows="6" className="w-full bg-white p-4 outline-none border-[0.5px] border-gray-400 rounded-md" name="" id="" placeholder="Enter Your Name" required></textarea>
                <button type="submit" className="w-max mx-auto bg-black/80 text-white flex justify-between items-center gap-2 px-10 py-3 rounded-full cursor-pointer hover:bg-black duration-500">
                    Submit
                    <Image src={assets.right_arrow_white} alt="Right arrow icon" className="w-4" />
                </button>
            </form>
        </div>
    )
}

export default Contact