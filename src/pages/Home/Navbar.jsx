import { Link, NavLink } from "react-router-dom";
import { CiLogin, CiLogout } from "react-icons/ci";
import { IoHome } from "react-icons/io5";
import { FaUserEdit } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { MdContactMail } from "react-icons/md";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const navLinks = <>
        <NavLink to='/'
            className={({ isActive }) => (isActive ?
                'btn btn-sm lg:btn-md btn-outline text-base rounded-md' :
                'btn btn-sm lg:btn-md btn-ghost text-base rounded-md')} >
            <IoHome />
            Home
        </NavLink>
        <NavLink to='/contact'
            className={({ isActive }) => (isActive ?
                'btn btn-sm lg:btn-md btn-outline text-base rounded-md' :
                'btn btn-sm lg:btn-md btn-ghost text-base rounded-md')}>
            <MdContactMail />
            Contact
        </NavLink>
        <NavLink to='/update-profile'
            className={({ isActive }) => (isActive ?
                'btn btn-sm lg:btn-md btn-outline text-base rounded-md' :
                'btn btn-sm lg:btn-md btn-ghost text-base rounded-md')}>
            <FaUserEdit />
            Update Profile
        </NavLink>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                alert('Click ok for logout !');
            }).catch(() => {
                // do something with error
            });
    }

    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-2 space-y-2 z-[1] p-2 shadow bg-base-300 rounded-md w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost rounded-md text-xl md:text-2xl lg:text-3xl">Sweet House</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    {user ?
                        <div className="flex items-center gap-3 md:gap-4">
                            <button onClick={handleLogOut} className="btn btn-sm md:btn-md btn-neutral text-white md:text-base border-none rounded-md px-2 md:px-4 hover:shadow-lg hover:shadow-slate-400">
                                <CiLogout />
                                Log Out
                            </button>
                            <NavLink to="/profile">
                                <div className="relative inline-block group">
                                    <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 md:w-11 md:h-11 rounded-full ring ring-offset-1 ring-neutral" />
                                    <div className="absolute top-[52px] bg-neutral -translate-x-1/2 opacity-0 text-white p-2 rounded-md duration-300 group-hover:opacity-100 min-w-max hover:shadow-md hover:shadow-slate-300">
                                        <h3 className="text-sm text-center">{user.displayName}</h3>
                                    </div>
                                </div>
                            </NavLink>
                        </div>
                        :
                        <Link to="/login">
                            <button className="btn btn-sm md:btn-md btn-neutral text-white text-base border-none rounded-md px-4 hover:shadow-lg hover:shadow-slate-400">
                                <CiLogin />
                                Log in
                            </button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;