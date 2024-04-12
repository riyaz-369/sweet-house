import { Link, NavLink } from "react-router-dom";
import { CiLogin } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { MdContactMail } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    const { user } = useContext(AuthContext);
    console.log(user)

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
                <div className="navbar-end space-x-4">
                    <Link>
                        <button className="btn btn-neutral text-white text-base border-none rounded-md px-6">
                            <CiLogin />
                            Log Out
                        </button>
                    </Link>
                    {
                        !user ? <Link to="/login">
                            <button className="btn btn-neutral text-white text-base border-none rounded-md px-6">
                                <CiLogin />
                                Log in
                            </button>
                        </Link> :

                            <div className="relative inline-block group">
                                <img src={user.photoURL} alt={user.displayName} className="w-11 rounded-full ring ring-offset-1 ring-neutral" />
                                <div className="absolute top-13 left-1/2 -translate-x-1/2 opacity-0 text-black duration-300 group-hover:opacity-100">
                                    <h3 className="text-sm font-medium">{user.displayName}</h3>
                                </div>
                            </div>

                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;