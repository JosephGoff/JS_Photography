import Navbar from '@/components/Navbar/Navbar'
import ContactHero from '@/components/contact/ContactHero'
import React from 'react'

const Contact = () => {
  return (
    <>
      <Navbar/>
      <div className="h-[calc(100vh-60px)] sm:h-[calc(100vh-65px)] md:h-[calc(100vh-70px)] lg:h-[calc(100vh-75px)] w-[100vw] flex items-center justify-center md:flex-row flex-col bg-background1">
        {/* <div className="mt-[100px] md:w-[50vw] w-[80vw]" style={{height: "calc(100% - 100px)", backgroundColor: "green"}}></div>
          
        <div className="mt-[100px] md:w-[50vw] w-[80vw]" style={{height: "calc(100% - 100px)", backgroundColor: "pink"}}></div> */}
        <ContactHero />
      </div>
    </>
  )
}

export default Contact