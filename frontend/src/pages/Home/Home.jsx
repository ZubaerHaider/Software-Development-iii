import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'


const Home = () => {

  const [category,setCategoty] = useState("All");


  return (
    <div>
      <Header/>
      <ExploreMenu category={category} setCategoty={setCategoty}/>
     
    </div>
  )
}

export default Home
