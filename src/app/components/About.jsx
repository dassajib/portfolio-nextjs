import Image from "next/image"
import { assets, infoList, toolsData } from "../assets/assets"

const About = () => {
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h2 className="text-center mb-2 text-lg">Introduction</h2>
            <h4 className="text-center text-5xl">About Me</h4>

            <div className="w-full flex flex-col lg:flex-row items-center gap-20 my-20">
                <div className="w-64 sm:w-80 max-w-none rounded-3xl">
                    <Image className="w-full rounded-3xl" src={assets.my_about_pic} alt="my image" />
                </div>
                <div className="flex-1">
                    <p className="max-w-2xl mb-10">
                        I am an experienced Frontend Developer with over 1 year of professional experience in this field.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {
                            infoList.map(({ icon, title, description }, index) => (
                                <li key={index} className="border-[0.5px] border-green-400 rounded-md p-6 cursor-pointer hover:bg-[#fcf4ff] hover:translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]">
                                    <Image className="w-7 mt-3" src={icon} alt={title} />
                                    <h3 className="my-4 text-gray-700 font-semibold">{title}</h3>
                                    <p className="text-gray-600 text-sm">{description}</p>
                                </li>
                            ))
                        }
                    </ul>

                    <h4 className="my-6 text-gray-700">Tool's I Use</h4>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {
                            toolsData.map((tool, index) => (
                                <li key={index} className="flex justify-center items-center w-12 sm:w-14 border border-gray-400 rounded-lg aspect-square cursor-pointer hover:translate-y-1 duration-500">
                                    <Image src={tool} alt="tool" className="w-5 sm:w-7" />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About