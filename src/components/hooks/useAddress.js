import React, { useEffect, useState } from 'react'
require ('dotenv').config();
const url = process.env.ADDRESS_URL;
function useAddress() {
    const [city, setCity] = useState([])
    const [district, setDistrict] = useState([])
    const [ward, setWard] = useState([])

    useEffect(()=>{
        async function fetchCity(){
            try{
                const requestUrl =`${url}/api/city`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json()

                const {LtsItem} = responseJSON
                setCity(LtsItem)
            }catch(error){
                console.log(error)
            }
            
        }

        fetchCity()
    },[])
    return [city]
}

export default useAddress
