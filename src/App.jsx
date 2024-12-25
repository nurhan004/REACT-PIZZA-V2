import Button from "./components/buttons/Button"
import Header from "./components/header/Header"
import Cart from "./pages/cart/Cart"
import Home from "./pages/home/Home"
import { useState,useEffect } from "react"

//react hook-(useState, useEffect, useRef, useCallbacl, useMemo)


const BASE_URL = "https://run.mocky.io/v3/592376c2-1f1d-47ef-b487-711bd84b802c"




const App = () => {
  const [data,setData] = useState ([])
 
 

useEffect(() => {
  fetch(BASE_URL)
  .then(response => response.json()) // json
  .then( pizza => {
    console.log(pizza);
    setData(pizza.menu)
    
  })
  .catch(() => {})

 }, [])

  return (
    <div className="container">
    <Header/>
      <Home data={data}/>
  
     

    </div>

  )
}

export default App 
