import { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import Logo from './gallery/Logo.png'; // Adjust the import according to your file structure

export default function NB() {
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    const handleLinkClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setNavbar(false);
    };

    return (
        <nav className="w-full sticky top-0 left-0 lg:max-w-7xl z-40">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8 bg-[#FFF6E7] lg:h-14">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to="/" onClick={handleLinkClick}>
                            <img className="opacity-100 mt-0 pt-0 h-16 ml-1 w-20 object-scale-down bg-transparent" src={Logo} alt="Logo" />
                        </Link>

                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-300 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}
                    >
                        <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            <div className="flex lg:ml-auto max-lg:w-full"></div>
                            <li className="text-gray-900 hover:text-[#7B553C] font-bold">
                                <Link to="/" onClick={handleLinkClick}>HOME </Link>
                                
                            </li>
                            <li className="">|</li>
                            <li className="text-gray-900 hover:text-[#7B553C] font-bold">
                                <Link to="/Services" onClick={handleLinkClick}>SERVICES </Link>
                            </li>
                            <li>|</li>

                            <li className="text-gray-900 hover:text-[#7B553C] font-bold">
                                <Link to="/Directors" onClick={handleLinkClick}>Directors</Link>
                            </li>
                            <li>|</li>
                           

                            {/* change this   */}
                            <li className="text-gray-900 hover:text-[#7B553C] font-bold">
                                <Link to="/Events" onClick={handleLinkClick}>Events</Link>
                            </li>

                                {/* <li className="group max-lg:border-b max-lg:py-2 relative">
                                <a href="javascript:void(0)" className="hover:text-[#7B553C] text-gray-900 text-[15px] font-bold lg:hover:fill-[#007bff] block">
                                    EVENT
                                     <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name="16" data-original="#000000"
                                        />
                                    </svg> 
                                </a>
                                <ul className="absolute hidden group-hover:block shadow-lg pt-4 bg-white/50 backdrop-blur-3xl px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50">
                                    <li className="border-b py-2">
                                        <Link to="/Aboutus" onClick={handleLinkClick} className="hover:text-[#7B553C] text-black text-[15px] font-bold block">EXCURSION-AYURVEDA TRIP</Link>
                                    </li>
                                    <li className="border-b py-2">
                                        <Link to="/what_we_stands_for" onClick={handleLinkClick} className="hover:text-[#7B553C] text-black text-[15px] font-bold block uppercase">WORKSHOP</Link>

                                     </li>
                                </ul>
                                </li>*/}

                            <li>|</li>
                          
                            <li className="group max-lg:border-b max-lg:py-2 relative">
                                <a href="javascript:void(0)" className="hover:text-[#7B553C] text-gray-900 text-[15px] font-bold lg:hover:fill-[#007bff] block">
                                    ABOUT US
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" className="ml-1 inline-block" viewBox="0 0 24 24">
                                        <path
                                            d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                                            data-name="16" data-original="#000000"
                                        />
                                    </svg>
                                </a>
                                <ul className="absolute hidden group-hover:block shadow-lg pt-4 bg-white/50 backdrop-blur-3xl px-6 pb-4 pt-6 space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50">
                                    <li className="border-b py-2">
                                        <Link to="/Aboutus" onClick={handleLinkClick} className="hover:text-[#7B553C] text-black text-[15px] font-bold block">ABOUT SVATOL</Link>
                                    </li>
                                    <li className="border-b py-2">
                                        <Link to="/what_we_stands_for" onClick={handleLinkClick} className="hover:text-[#7B553C] text-black text-[15px] font-bold block uppercase">What We Stand For</Link>

                                    </li>
                                    <li className="border-b py-2">
                                        <Link to="/what_we_stands_for" onClick={handleLinkClick} className="hover:text-[#7B553C] text-black text-[15px] font-bold block uppercase">List of Director</Link>
                                        
                                    </li>
                                </ul>
                            </li>
                            <li>|</li>
                        
                            <li>
                                <a href="https://www.youtube.com/" className="text-red-600 hover:text-gray-500">
                                    <span className="sr-only">Youtube</span>
                                    <FaYoutube size={23} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/" className="text-red-600 hover:text-gray-500">
                                    <span className="sr-only">Instagram</span>
                                    <FaInstagram size={23} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/" className="text-blue-600 hover:text-gray-500">
                                    <span className="sr-only">Facebook</span>
                                    <FaFacebook size={23} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
