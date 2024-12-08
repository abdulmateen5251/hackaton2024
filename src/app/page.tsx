import React from 'react'
import Hero from './component/Hero'

import Navbar, { Header } from './component/navbar'

import Herosection from './Herosection/page '
import Cart1 from './component/cart1'
import Vita from './component/vita'
import Part5 from './component/Part5'
import Part6 from './component/Part6'





function page() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Herosection/>
      
      
       <Hero/>
       <Cart1/>
       <Vita/>
       <Part5/>
       <Part6/>

       
    </div>

  )

}

export default page
