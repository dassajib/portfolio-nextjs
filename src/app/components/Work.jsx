import Image from "next/image"
import { assets, workData } from "../assets/assets"

const Work = () => {
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center text-lg mb-2">My Portfolio</h4>
            <h2 className="text-center text-5xl">My latest Work</h2>
            <p className="max-w-2xl mx-auto text-center mt-5 mb-12">Welcome to my Development Portfolio. Explore a collection of project's showcasing my experince in Frontend Development.</p>

            <div className="grid grid-cols-4 gap-5 my-10">
                {
                    workData.map((project, index) => (
                        <div key={index} className="relative aspect-square bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer group" style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className="absolute bottom-5 bg-white w-10/12 rounded-md translate-x-1/2 px-5 py-2 duration-500 flex justify-between items-center group-hover:bottom-7">
                                <div>
                                    <h2 className="font-semibold">{project.title}</h2>
                                    <p className="textsm text-gray-700">{project.description}</p>
                                </div>
                                <div className="w-9 border border-black rounded-full aspect-square flex justify-center items-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition ">
                                    <Image src={assets.send_icon} alt="Send icon" className="w-5" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <a href="" className="w-max mx-auto flex justify-center items-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 my-20 hover:bg-[#fcf3ff] duration-500">
                Show More
                <Image src={assets.right_arrow_bold} alt="right arrow icon" className="w-4" />
            </a>
        </div>
    )
}

export default Work