"use client";
import Link from "next/link";
import Image from "next/image";
import NavLink from "@/app/components/NavLink";
import {useState} from "react"; // Import useState from React
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import MenuOverlay from "@/app/components/MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Projects",
        path: "/projects"
    },
    {
        title: "Contact",
        path: "/contact"
    }
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex items-center justify-between mx-auto px-4 max-w-6xl">
                <Link href={"/"}>

                    <Image
                        src="/images/Group.png"
                        alt="nav image"
                        width={50}
                        height={50}
                    />

                </Link>
                <div className="block mobile-hidden md:hidden">
                    {!isMenuOpen ?
                        (
                            <button
                                onClick={() => setIsMenuOpen(true)}
                                className="text-slate-200 flex items-center px-3 py-2 border border-slate-200 rounded  hover:text-slate-400 hover:bg-slate-200"
                            >
                                <Bars3Icon className="h-5 w-5"/>
                            </button>
                        ) : (
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="text-slate-200 flex items-center px-3 py-2 border border-slate-200 rounded  hover:text-slate-400 hover:bg-slate-200"
                            >
                                <XMarkIcon className="h-5 w-5"/>
                            </button>


                        )}

                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {isMenuOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};

export default Navbar;
