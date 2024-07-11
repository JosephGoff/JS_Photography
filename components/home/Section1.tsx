"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import appData from "../../app-data.json"

const Section1 = () => {

  const imageRollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const screenHeight = window.innerHeight - 60;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imageRollRef && imageRollRef.current) {
        imageRollRef.current.style.marginLeft = `calc(-200vw + ${scrollY}px)`
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className="w-[100vw] flex flex-col">
      <div ref={imageRollRef} style={{ width: "300vw", height: "200px", marginLeft: "-200vw", backgroundColor: "green", display: "flex", flexDirection: "row", gap: "20px" }}>
        <Image
          src={appData.baseURL + 'designs/polaroids1.png'}
          alt="contact"
          layout="responsive"
          objectFit="cover"
          width={500}
          height={500}
        />
        <Image
          src={appData.baseURL + 'designs/polaroids1.png'}
          alt="contact"
          layout="responsive"
          objectFit="cover"
          width={500}
          height={500}
        />
        <Image
          src={appData.baseURL + 'designs/polaroids1.png'}
          alt="contact"
          layout="responsive"
          objectFit="cover"
          width={500}
          height={500}
        />
      </div>


      <div style={{ zIndex: 103, width: "100%" }}>
        <Image
          src={appData.baseURL + 'designs/polaroids1.png'}
          alt="contact"
          layout="responsive"
          objectFit="cover"
          width={500}
          height={500}
        />
      </div>
      {/* 

      <p className="text-center text-xl py-6">New York Wedding Photographer</p>
      <div className="pt-[60px] pb-[120px] w-[100vw] bg-green-100 flex flex-col items-center justify-center" style={{ gap: "30px" }}>

        <div>
          <div style={{ width: "calc(100vw - 140px)", height: "calc(40vw)", border: "1.5px solid black" }}>
            <div style={{ width: "calc(100% - 20px)", height: "calc(100% - 20px)", margin: "10px" }} className="relative">
              <Image
                src="/assets/img1.jpg"
                alt="section1"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <p className="text-center text-xl pt-4">New York Wedding Photographer</p>
        </div>

        <div style={{ width: "calc(100vw - 140px)", gap: "50px" }} className="flex flex-row" >
          <div style={{ width: "calc(50% - 25px)", height: "300px" }}>
            <div style={{ width: "100%", height: "100%", border: "1.5px solid black" }}>
              <div style={{ width: "calc(100% - 20px)", height: "calc(100% - 20px)", margin: "10px" }} className="relative">
                <Image
                  src="/assets/img1.jpg"
                  alt="section1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="text-center text-xl pt-4">New York Wedding Photographer</p>
          </div>

          <div style={{ width: "calc(50% - 25px)", height: "300px" }}>
            <div style={{ width: "100%", height: "100%", border: "1.5px solid black" }}>
              <div style={{ width: "calc(100% - 20px)", height: "calc(100% - 20px)", margin: "10px" }} className="relative">
                <Image
                  src="/assets/img1.jpg"
                  alt="section1"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
            <p className="text-center text-xl pt-4">New York Wedding Photographer</p>
          </div> 

        </div>
      </div>*/}

    </div>
  )
}

export default Section1