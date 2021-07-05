import React from 'react'



function SideBar() {

  return (
    <div className="h-full ml-14 mt-5 mb-10 md:ml-64 font-sans">
            {/* <h1>ini dashboard</h1> */}
            {/*===STATISTIC CARD BEGIN===*/}
            <div className="grid grid-cols-1 p-4 gap-4 mx-12">
                <div
                className="
                    bg-blue-500
                    dark:bg-gray-800
                    shadow-lg
                    rounded-md
                    flex
                    items-center
                    justify-between
                    p-3
                    border-b-4 border-blue-600
                    dark:border-gray-600
                    text-white
                    font-medium
                    group
                "
                >
                <div
                    className="
                    flex
                    justify-center
                    items-center
                    w-14
                    h-14
                    bg-white
                    rounded-full
                    transition-all
                    duration-300
                    transform
                    group-hover:rotate-12
                    "
                >
                    <svg
                    width="30"
                    height="30"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="
                        stroke-current
                        text-blue-800
                        dark:text-gray-800
                        transform
                        transition-transform
                        duration-500
                        ease-in-out
                    "
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                    </svg>
                </div>
                <div className="text-right">
                    <p className="text-2xl"></p>
                    <p>Orders</p>
                </div>
                </div>
            </div>
            {/*===STATISTIC CARD END===*/}

            {/*===CLIENT ORDER TABLE BEGIN===*/}
            <div className="mt-4 mx-12 justify-center">
                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                    <thead>
                        <tr
                        className="
                            text-xs
                            font-semibold
                            tracking-wide
                            text-left text-gray-500
                            uppercase
                            border-b
                            dark:border-gray-700
                            bg-gray-50
                            dark:text-gray-400 dark:bg-gray-800
                        "
                        >
                        <th className="px-4 py-3">Client</th>
                        <th className="px-4 py-3">Place</th>
                        <th className="px-4 py-3">Burial Date</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3">Phone</th>
                        <th className="px-4 py-3">Price</th>
                        <th className="px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    
                    </table>
                </div>
                </div>
            </div>
            {/*===CLIENT ORDER TABLE END===*/}
            </div>
    );
}

export default SideBar
