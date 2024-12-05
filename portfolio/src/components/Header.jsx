import React from "react";
import { Link, NavLink } from 'react-router-dom'

function Header(){

    return(
        <>
        <header className="sticky top-0 bg-white">
            <div className="flex ">
                <div className="flex py-2.5 px-5">
                    {/* <h1 className="text-orange-900 text-4xl font-serif font-bold">M</h1>
                    <h1 className="text-orange-800 text-4xl font-serif font-bold">a</h1>
                    <h1 className="text-orange-700 text-4xl font-serif font-bold">h</h1>
                    <h1 className="text-orange-600 text-4xl font-serif font-bold">e</h1>
                    <h1 className="text-orange-500 text-4xl font-serif font-bold">s</h1>
                    <h1 className="text-orange-400 text-4xl font-serif font-bold">h</h1>
                    <h1 className="text-orange-900 text-4xl font-serif font-bold">R</h1>
                    <h1 className="text-orange-800 text-4xl font-serif font-bold">a</h1>
                    <h1 className="text-orange-700 text-4xl font-serif font-bold">n</h1>
                    <h1 className="text-orange-600 text-4xl font-serif font-bold">e</h1>    */}

                    {/* <h1 className="bg-orange-600 text-2xl font-bold pr-1 pl-2 text-slate-900">M</h1>
                    <h1 className="text-2xl font-bold  text-orange-600 bg-slate-900">ahesh</h1>
                    <h1 className="text-2xl font-bold  text-orange-600 bg-slate-900">R</h1>
                    <h1 className="text-2xl font-bold  text-orange-600 bg-slate-900 pr-2">ane</h1> */}
                    <div className="flex border-orange-600 border-2">
                        <h1 className="bg-orange-600 text-2xl font-bold pr-1 pl-2 text-slate-900">M</h1>
                        <h1 className="text-2xl font-bold  text-slate-900">ahesh</h1>
                        <h1 className="text-2xl font-bold  text-slate-900">R</h1>
                        <h1 className="text-2xl font-bold  text-slate-900 pr-2">ane</h1>
                    </div>
                </div>
                <div className="w-full flex justify-center py-4">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <NavLink to='./Home' className={({isActive})=>  `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Home</NavLink>
                        </li>

                        <li>
                            <NavLink to='./Education' className={({isActive})=>  `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Education</NavLink>
                        </li>

                        <li>
                            <NavLink to='./Course' className={({isActive})=>  `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Course</NavLink>
                        </li>

                        <li>
                            <NavLink to='./Experties' className={({isActive})=>  `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Experties</NavLink>
                        </li>

                        <li>
                            <NavLink to='./Hobbies' className={({isActive})=>  `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Hobbies</NavLink>
                        </li>

                        <li>
                            <NavLink to='./ContactUs' className={({isActive})=>  `block py-2 pr-4 pl-3 duration-200 border-b ${isActive ? "text-orange-700" : "text-gray-700" } border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div>

                </div>
            </div>
            <hr></hr>
        </header>
        </>
    )
}

export default Header;