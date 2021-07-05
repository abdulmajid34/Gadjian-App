import React from 'react'

function AddPersonel({ setShowModal }) {

    const handleAdd = () => {

    }

    return (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					{/*content*/}
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{/*header*/}
						<div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
							<h3 className="text-3xl font-semibold">AddPersonel</h3>
							<button
								className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
								onClick={() => setShowModal()}
							>
								<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
									×
								</span>
							</button>
						</div>
						{/*body*/}
						<div className="relative p-6 flex-auto">
							<form className=" text-left">
								<div className="">
									<label className="block text-gray-600">
										FirstName:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value=""
										onChange=""
										placeholder="Abdul"
									/>
								</div>
                                <div className="">
									<label className="block text-gray-600">
										LastName:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value=""
										onChange=""
										placeholder="Majid"
									/>
								</div>
                                <div className="">
									<label className="block text-gray-600">
										Email:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value=""
										onChange=""
										placeholder="abdul@mail.com"
									/>
								</div>
                                <div className="">
									<label className="block text-gray-600">
										No Telephone:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value=""
										onChange=""
										placeholder="0899xxxxx"
									/>
								</div>
                                <div className="">
									<label className="block text-gray-600">
										Picture:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value=""
										onChange=""
										placeholder="Your Picture"
									/>
								</div>
								<div>
									<label className="block text-gray-600">
										Birthday:
									</label>
									<input
										type="text"
										className="bg-gray-50 border-2 border-gray-200 rounded-lg p-2 w-full"
										value=""
										onChange=""
										placeholder="MMDDYY"
									/>
								</div>
							</form>
						</div>
						{/*footer*/}
						<div className="flex items-center justify-end px-10 py-2 border-t border-solid border-blueGray-200 rounded-b">
							<button
								className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={() => setShowModal()}
							>
								Close
							</button>
							<button
								className="bg-blue-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
								type="button"
								onClick={(event) => {
									event.preventDefault()
									handleAdd()
								}}
							>
								Save Changes
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default AddPersonel
