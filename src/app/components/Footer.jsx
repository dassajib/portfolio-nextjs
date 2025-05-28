import Image from "next/image"
import { assets } from "../assets/assets"

const Footer = () => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={assets.logo} alt="Logo" className="w-36 mx-auto mb-2" />

                <div className="w-max mx-auto flex items-center gap-2">
                    <Image src={assets.mail_icon} alt="Mail icon" className="w-6" />
                    <p className="text-[#004182] font-semibold hover:font-extrabold">
                        sajibdas.sd@gmail.com
                    </p>
                </div>
            </div>

            <div className="text-center sm:flex justify-between items-center border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>All right's reserved</p>

                <ul className="flex justify-center items-center gap-10 mt-10 sm:mt-0">
                    <li>
                        <a target="_blank" href="https://github.com/dassajib" className="text-[#004182] font-semibold hover:font-extrabold">Github</a>
                    </li>
                    <li>
                        <a target="_blank" href="https://www.linkedin.com/in/sajib-das/" className="text-[#004182] font-semibold hover:font-extrabold">Linkedin</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer