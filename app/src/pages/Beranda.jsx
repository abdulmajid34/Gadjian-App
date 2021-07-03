import React from 'react'

function Beranda() {
    return (
        <div className="relative min-h-screen md:flex">

        {/* mobile menu bar */}
        <div className=" bg-green-700 text-gray-100 flex justify-between md:hidden">
            {/* logo */}
            <span className="block p-4 text-white font-bold">Gadjian</span>
            {/* mobile menu button */}
            <button className=" mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div> 
         
        {/* sidebar */}
        <div className="sidebar bg-green-400 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full transition duration-200 ease-out md:relative md:translate-x-0">
            {/* logo */}
            <span className="text-2xl font-extrabold">Gadjian</span>
            <nav>
                <span className=" cursor-pointer block py-2.5 px-4 rounded transition duration-200 hover:bg-green-800 hover:text-white">Beranda</span>
                <span className=" cursor-pointer block py-2.5 px-4 transition duration-200 hover:bg-green-800 hover:text-white">Personel List</span>
                <span className=" cursor-pointer block py-2.5 px-4 transition duration-200 hover:bg-green-800 hover:text-white">Daily Attendance</span>
            </nav>
        </div>

        <div className=" flex-1 p-10 text-2xl font-bold">
            welcome to the Beranda
        </div>
    </div>
    )
}

export default Beranda