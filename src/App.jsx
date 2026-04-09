import { useState } from "react"
import Footer from "./component/Footer"
import Models from "./component/Models"
import NavBar from "./component/NavBar"
import NewCart from "./component/NewCart"
import NextCard from "./component/NextCard"
import PassCard from "./component/PassCard"

import Poster from "./component/Poster"
import Stats from "./component/Stats"
import Tab from "./component/Tab"
import Transform from "./component/Transform"


const fetchai =async()=>{
  const res = await fetch("/data.json")
  return res.json();
}
const aipromise = fetchai();
 
function App() {
  const [activeTab, setActiveTab] = useState("Products")
  const [carts, setCarts] = useState([]);
    console.log(carts)

  return (
    <>
    
    <NavBar></NavBar>
    <Poster></Poster>
    
    <Stats></Stats>
    <Tab activeTab={activeTab} setActiveTab={setActiveTab} />
    {activeTab === "Products" && (
  <Models aipromise={aipromise} carts={carts} setCarts={setCarts} />
)}
    {activeTab === "Cart" && <NewCart carts={carts} setCarts={setCarts} />}
    <PassCard></PassCard>
    <NextCard></NextCard>
     <Transform></Transform>
    <Footer></Footer>
    
    </>
    
  )
}

export default App
