import React from 'react'
import { Button } from '../../ui/button'
import Image from 'next/image'
import appData from "../../../app-data.json"

const Hero = () => {
  return (
    <div
      className="h-[calc(100vh-60px)] w-[100vw] flex justify-center bg-background1"
      style={{ overflowX: 'hidden', position: 'relative' }}
    >
      <Image
        style={{ zIndex: 201 }}
        src={appData.baseURL + "home/wall2.png"}
        alt="header"
        layout="fill"
        objectFit="cover"
        objectPosition="top"
      />
      <div className="items-center min-h-[475px] mt-[30vh] sm:mt-[33vh] bg-background1 flex sm:flex-row flex-col" style={{
        width: "80%",
        aspectRatio: 2 / 0.93,
        zIndex: 202,
        maxWidth: 900,
      }}>
        <div className="sm:w-[45%] w-[100%] h-[100px] sm:mt-0 mt-[20px] sm:h-[100%] sm:pl-[30px] sm:p-0 pl-[20%] pr-[20%]" style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <Image
            style={{ zIndex: 202, marginTop: -15, marginLeft: 8 }}
            src={appData.baseURL + "home/header_title.png"}
            alt="header title"
            layout="responsive"
            objectFit="cover"
            className="w-[100px]"
            width={500}
            height={250}
          />
        </div>
        <div className="sm:w-[55%] w-[100%] sm:mt-0 mt-[-20px] sm:h-[100%] sm:pr-[30px] sm:pl-0 pr-[10%] pl-[10%] sm:max-w-[450px] max-w-[465px]" style={{ position: "relative", display: "flex", alignItems: "center"}}>
          <Image
            style={{ zIndex: 202 }}
            src={appData.baseURL + "home/header_display2.png"}
            alt="header title"
            layout="responsive"
            objectFit="cover"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero