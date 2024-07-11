import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import appData from "../../../app-data.json";

const Jess = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100vw",
          height: "calc(100vh - 60px)",
          display: "flex",
          overflow: 'hidden',
          zIndex: 101,
          position: 'relative',
          // backgroundColor: "#E4E2DD"
          backgroundColor: "#D7CDBE"
        }}
      >
        <Image
          className="hidden md:block"
          src={appData.baseURL + "jess/jess1.png"}
          alt="header"
          style={{
            position: 'absolute', 
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            minHeight: "calc(100vh - 60px)"
          }}
          objectFit="contain" 
          objectPosition="center"
          layout="fill"
        />
        <Image
          className="block md:hidden"
          src={appData.baseURL + "jess/jess.png"}
          alt="header"
          style={{ minHeight: "calc(100vh - 60px) ", maxHeight: "calc(100vh - 60px) "}}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  )
}

export default Jess