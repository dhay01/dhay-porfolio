import Link from "next/link";

const NavLink = ({href, title}) =>{
    return (
        < div>
            < Link className="block py-2 pl-3 pr-4 text-slate-300 sm:text-xl rounder md:p"
                href={href}>

                {title}


            </Link>
        </div>
    )
}
export default NavLink;