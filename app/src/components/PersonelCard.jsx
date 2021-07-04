import React from 'react'

function PersonelCard({ getFullName, dataPersonel }) {
    return (
            
            <div class="sm:w-1/4 p-2">
                <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                    <h3 className="mb-2">Personel ID: {dataPersonel.login.uuid}</h3>
                <div class="mb-3">
                    <img
                    class="w-auto mx-auto rounded-full"
                    src={dataPersonel.picture.medium}
                    alt="gambar"
                    />
                </div>
                <h1 className="font-medium text-black">Nama</h1>
                <h2 class="text-xl font-medium text-gray-700">{getFullName}</h2>
                <span className="font-medium text-black">Telephone</span>
                <h2 class="text-xl font-medium text-gray-700">{dataPersonel.phone}</h2>
                <span className="font-medium text-black">Birthday</span>
                <h2 class="text-xl font-medium text-gray-700">{dataPersonel.dob.date}</h2>
                <span className="font-medium text-black">Email</span>
                <h2 class="text-xl font-medium text-gray-700">{dataPersonel.email}</h2>
                </div>
            </div>
            
    )
}

export default PersonelCard
