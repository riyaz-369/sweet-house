import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

const Navbar = () => {

    const navLinks = <>
        <NavLink to='/'
            className={({ isActive }) => (isActive ?
                'btn btn-outline text-base rounded-md' :
                'btn btn-ghost text-base rounded-md')} >
            <IoHome />
            Home
        </NavLink>
        <NavLink to='/contact'
            className={({ isActive }) => (isActive ?
                'btn btn-outline text-base rounded-md' :
                'btn btn-ghost text-base rounded-md')}>
            <MdContactMail />
            Contact
        </NavLink>
        <NavLink to='/update-profile'
            className={({ isActive }) => (isActive ?
                'btn btn-outline text-base rounded-md' :
                'btn btn-ghost text-base rounded-md')}>
            <FaUserEdit />
            Update Profile
        </NavLink>
    </>

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost rounded-md text-3xl">Sweet House</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login">
                        <button className="btn btn-neutral text-white text-base border-none rounded-md px-6">
                            <CiLogin />
                            Log in
                        </button>
                    </Link>
                    <button className="btn btn-neutral text-white text-base border-none rounded-full">
                        Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;