import React, { useEffect } from 'react'
// import useFetch from '../hooks/useFetch'
import { useSelector, useDispatch } from 'react-redux'
import { fetchDataPersonel, setLoading } from '../store/actions/action'

function Dashboard() {
    const dispatch = useDispatch()
    // https://randomuser.me/api/?results=4
    // const [dataPersonel, loading, error] = useFetch('https://randomuser.me/api/?results=4')
    // console.log(dataPersonel, 'HASIL DATA NYA');
    const dataPersonelEmployee = useSelector(state => state.dataPersonel) 
    console.log(dataPersonelEmployee, 'HASIL DATA');

    useEffect(() => {
        dispatch(setLoading(true))
        dispatch(fetchDataPersonel())
    }, [])


    return (
        <div>
            <p>{JSON.stringify(dataPersonelEmployee, null, 2)}</p>        
        </div>
    )
}

export default Dashboard
