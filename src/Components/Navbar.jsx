import React from 'react';
import LogoImg from '../assets/logo.png';
import { NavLink } from 'react-router';
import '../index.css'

const Navbar = () => {
    return (
        <div className="absolute w-11/12 mx-auto left-0 right-0 top-5 flex justify-between items-center py-4 px-6 z-50">
            {/* Logo */}
            <img src={LogoImg} alt="Logo" className="w-24 h-auto" />

            {/* Search Bar */}
            <label className="input flex items-center gap-2 border px-2 py-1 rounded bg-white">
                <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
                <input type="search" className="grow outline-none bg-transparent text-gray-600" placeholder="Search your Destination..." />
            </label>

            {/* Nav Links */}
            <div className="flex gap-30 text-white font-semibold">
                <NavLink className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-yellow-400 pb-1 text-yellow-400"
                        : "hover:text-yellow-300"
                } to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-yellow-400 pb-1 text-yellow-400"
                        : "hover:text-yellow-300"
                } to={'/news'}>News</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-yellow-400 pb-1 text-yellow-400"
                        : "hover:text-yellow-300"
                } to="/destination">Destination</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-yellow-400 pb-1 text-yellow-400"
                        : "hover:text-yellow-300"
                } to="/blog">Blog</NavLink>
                <NavLink className={({ isActive }) =>
                    isActive
                        ? "border-b-2 border-yellow-400 pb-1 text-yellow-400"
                        : "hover:text-yellow-300"
                } to="/contact">Contact</NavLink>
                <NavLink to="/login" className ="bg-yellow-400 text-black px-4 py-1 rounded">Login</NavLink>
            </div>
        </div>
    );
};

export default Navbar;
