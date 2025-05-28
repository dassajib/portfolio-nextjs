import { assets } from "../assets/assets"
import Image from "next/image"

const Header = () => {
    return (
        <div className="max-w-3xl w-11/12 h-screen mx-auto text-center flex flex-col justify-center items-center gap-4">
            <div>
                <Image className="w-40 rounded-full" src={assets.profile_img} alt="my image" />
            </div>
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3">
                Hi! I'm Sajib Das
                <Image className="w-6" src={assets.hand_icon} alt="hsnd icon" />
            </h3>
            <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
                Frontend Web Developer
            </h1>
            <p className="max-w-2xl mx-auto">I am a frontend developer from Dhaka,Bangladesh with 1.5 year's of experience</p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <a className="px-10 py-3 border border-white bg-black text-white rounded-full flex items-center gap-2" href="#contact">
                    Contact Me
                    <Image className="w-4" src={assets.right_arrow_white} alt="right arrow icon" />
                </a>
                <a href="/SajibDasResume.pdf" download className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2">
                    My Resume
                    <Image className="w-4" src={assets.download_icon} alt="download icon" />
                </a>
            </div>
        </div>
    )
}

export default Header