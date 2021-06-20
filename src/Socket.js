import React, {createContext, useState, useEffect} from 'react'
import io from 'socket.io-client'
require ('dotenv').config();
const ENDPOINT = process.env.REACT_APP_URL_CLIENT;

export const DataContext = createContext()

export const DataProvider = ({children}) => {
    const [socket, setSocket] = useState(null)

    useEffect(() => {
        const socket = io(ENDPOINT)
        setSocket(socket)
        return () =>  socket.close()
    },[])

    const state = {
        socket
    }

    return(
        <DataContext.Provider value={state}>
            {children}
        </DataContext.Provider>
    )
}