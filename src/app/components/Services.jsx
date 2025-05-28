import Image from "next/image"
import { assets, serviceData } from "../assets/assets"

const Services = () => {
    return (
        <div id="service" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg">What I offer</h4>
            <h2 className="text-center text-4xl md:text-5xl">My Services</h2>
            <p className="max-w-2xl mx-auto text-center mt-5 mb-12">I am an experienced Frontend Developer with over 1 year of professional experience in this field.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
                {
                    serviceData.map(({ icon, title, description, link }, index) => (
                        <div key={index} className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:bg-[#fcf4ff] hover:shadow-[4px_4px_0_#000] hover:translate-y-1 duration-500">
                            <Image src={icon} alt={title} className="w-10" />
                            <h3 className="text-lg border-b-gray-700 my-4">{title}</h3>
                            <p className="text-sm text-gray-600 leading-5">{description}</p>
                            <a className="flex items-center gap-2 text-sm mt-5" href={link}>
                                Read more
                                <Image  src={assets.right_arrow} alt="Right arrow icon" className="w-4" />
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Services