import { createContext, useEffect, useState } from "react"



export const APPCONTEXT = createContext()

const { Provider, Consumer } = APPCONTEXT

const AppContext = ({ children }) => {
    const [cartData, setCartData] = useState([])

    const value = {
        cartData,
        setCartData
    }
    useEffect(()=> {
        const arr = JSON.parse(localStorage.getItem('cart'))||[]
        setCartData(arr)
    },[])
    return (
        <Provider value={value}>{children}</Provider>

    )
}

export default AppContext  