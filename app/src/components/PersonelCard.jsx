import React from 'react'


function PersonelCard(props) {

    // const getBirthday = (value) => {
    //     let result = value.toLocaleString().split(',')['T']
    //     return result
    // }

    // const getBirthdate = () => {
    //     let year = dataPersonel.dob.date.getFullYear();
    //     let month = dataPersonel.dob.date.getMonth() + 1;
    //     if(month < 10) {
    //         month = `0${month}`;
    //     } 
    //     let date = dataPersonel.dob.date.getDate();
    //     if(date < 10) {
    //         date = `0${date}`;
    //     }
    //     return `${year}-${month}-${date}`; 
    // }


    return (
            
            <div class="sm:w-1/4 p-2">
                <div class="bg-white px-6 py-8 rounded-lg shadow-lg text-center">
                    <h3 className="mb-2">Personel ID: {props.dataPersonel.login.uuid}</h3>
                <div class="mb-3">
                    <img
                    class="w-auto mx-auto rounded-full"
                    src={props.dataPersonel.picture.medium}
                    alt="gambar"
                    />
                </div>
                <h1 className="font-medium text-black">Nama</h1>
                <h2 class="text-xl font-medium text-gray-700">{props.getFullName}</h2>
                <span className="font-medium text-black">Telephone</span>
                <h2 class="text-xl font-medium text-gray-700">{props.dataPersonel.phone}</h2>
                <span className="font-medium text-black">Birthday</span>
                <h2 class="text-xl font-medium text-gray-700">{props.dataPersonel.dob.date}</h2>
                <span className="font-medium text-black">Email</span>
                <h2 class=" text-md font-medium text-gray-700">{props.dataPersonel.email}</h2>
                </div>
            </div>
            
    )
}

export default PersonelCard
