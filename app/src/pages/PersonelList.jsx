import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataPersonel, setLoading } from '../store/actions/action'
import { Link } from 'react-router-dom'
import PersonelCard from '../components/PersonelCard'
import AddPersonel from './AddPersonel'

// https://randomuser.me/api/?results=4
function PersonelList() {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [showModal, setShowModal] = useState(false)
    const dataPersonelEmployee = useSelector(state => state.dataPersonel) 

    const getFullName = (value) => {
        const { name: {first, last}} = value
        return `${first} ${last}`
    }

    useEffect(() => {
        dispatch(setLoading(true))
        dispatch(fetchDataPersonel(page))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page])

    const nextPage = (event) => {
        
        setPage(page + 1)
    }
    const previousPage = (event) => {
        event.preventDefault()
        if(page === 1) {
            setPage(1)
        } else {
            setPage(page - 1)
        }
    }

    return (
        <div className="relative min-h-screen md:flex">

            {/* mobile menu bar */}
            <div className=" bg-green-700 text-gray-100 flex justify-between md:hidden">
                {/* logo */}
                <span className=" cursor-pointer block p-4 text-white font-bold">Gadjian</span>
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
                <Link to="/">
                    <span className=" cursor-pointer text-2xl font-extrabold">Gadjian</span>
                </Link>
                <nav>
                    <Link to="/">
                        <span className=" cursor-pointer block py-2.5 px-4 rounded transition duration-200 hover:bg-green-800 hover:text-white">Beranda</span>
                    </Link>
                    <Link to="/list">
                        <span className=" cursor-pointer block py-2.5 px-4 transition duration-200 hover:bg-green-800 hover:text-white">Personel List</span>
                    </Link>
                    <Link to="/daily">
                        <span className=" cursor-pointer block py-2.5 px-4 transition duration-200 hover:bg-green-800 hover:text-white">Daily Attendance</span>
                    </Link>    
                </nav>
            </div>

            <div class="flex-1 flex flex-col overflow-hidden">
                <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-green-400">
                    <div class="flex items-center">
                        <button class="text-gray-500 focus:outline-none lg:hidden">
                            <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </button>
        
                        <div class="relative mx-4 lg:mx-0">
                            <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    </path>
                                </svg>
                            </span>
        
                            <input class="form-input w-32 sm:w-64 rounded-md pl-10 pr-4 focus:border-indigo-600" type="text"
                                placeholder="Search" />
                        </div>
                    </div>
        
                    <div class="flex items-center">
        
                        <div class="relative">
                            <button
                                class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                                <img class="h-full w-full object-cover"
                                    src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=296&amp;q=80"
                                    alt="Your avatar" />
                                    
                            </button>
                        </div>
                    </div>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div className="container mx-auto px-6 py-8">
                        <div class="mt-4">
                        <div class="flex flex-wrap -mx-6">
                            <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                                <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                                <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                                        <svg class="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                                                fill="currentColor"></path>
                                            <path
                                                d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                                                fill="currentColor"></path>
                                        </svg>
                                    </div>
    
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-gray-700">Personel List</h4>
                                        <div class="text-gray-500">List of All Personels</div>
                                    </div>
                                </div>
                            </div>
    
                            <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 xl:mt-0">
                                <div onClick={() => setShowModal(true)} class="flex items-center px-5 py-6 shadow-sm rounded-md bg-green-400 cursor-pointer hover:bg-green-800">
                                    <div class="p-3 rounded-full bg-white bg-opacity-75">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    </div>
                                    <div class="mx-5">
                                        <h4 class="text-2xl font-semibold text-white">Add Personel</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                showModal ? (
                                    <>
                                        <AddPersonel setShowModal={() => setShowModal(!showModal)} />
                                    </>
                                ) : null
                            }
                        </div>
                        </div>
                    </main>
                    <div class="w-4/5 mx-auto">
                        <div class="flex flex-col sm:flex-row">
                            {
                                dataPersonelEmployee.map((value, idx) => <PersonelCard key={idx} getFullName={getFullName(value)} dataPersonel={value}  /> )
                            }
                   </div>
                        </div>


                    <div class="flex justify-center mt-4 mb-4">
                        <span>
                            {
                                page.index
                            }
                        </span>
                        <div class="m-3">
                            {
                                page === 1 ? (
                                    <>
                                        <button type="button" onClick={(event) => previousPage(event)} disabled
                                        class="w-32 bg-gray-700 tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 shadow-md py-2 px-6 inline-flex items-center">
                                        <span class="mx-auto">Previous</span>
                                        </button>
                                    </>
                                ) : 
                                    <button type="button" onClick={(event) => previousPage(event)}
                                    class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-blue-500 hover:border-blue-600 hover:bg-blue-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                    <span class="mx-auto">Previous</span>
                                    </button>
                            }
                        </div>
                        <div class="m-3">
                            {
                                page === 12 ? (
                                    <>
                                        <button type="button" onClick={(event) => nextPage(event)} disabled
                                        class="w-32 bg-gray-700 tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-500 shadow-md py-2 px-6 inline-flex items-center">
                                        <span class="mx-auto">Next</span>
                                        </button>
                                    </>
                                ) : 
                                <button type="button" onClick={(event) => nextPage(event)} 
                                class="w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                                <span class="mx-auto">Next</span>
                                </button>
                            }
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default PersonelList
