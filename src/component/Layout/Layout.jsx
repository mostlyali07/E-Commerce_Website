import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routers from "../routers/Routers";

const layout = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}

export default layout;