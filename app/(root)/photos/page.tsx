"use client"
import Navbar from '@/components/Navbar/Navbar'
import Image from 'next/image'
import React from 'react'
import appData from "../../../app-data.json";

const Photos = () => {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-60px)] w-[100vw]">
        <div className="w-[100vw] md:w-[50vw]" style={{ zIndex: 101, position: 'fixed', height: 'calc(100vh - 60px)', overflow: 'hidden', overflowX: "hidden" }}>
          <Image
            src={appData.baseURL + 'photos/photos_bg.png'}
            alt="photos"
            layout="fill"
            objectPosition='center'
            style={{ objectFit: 'fill', objectPosition: 'center', overflow: "hidden", overflowX: "hidden" }}
          />
        </div>

        <div className="w-[100vw] md:w-[50vw]" style={{ position: "absolute", top: 60, height: "calc(100vh - 60px)", minHeight: "625px", zIndex: 102, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ height: "80vh", minHeight: "500px", aspectRatio: "1 / 2", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: "3vh" }}>
            <div style={{ width: "52%" }}>
              <Image
                src={appData.baseURL + 'photos/photos_title.png'}
                alt="cover"
                layout="responsive"
                objectPosition='center'
                style={{ objectFit: 'cover' }}
                width={1500}
                height={492}
              />
            </div>
            <div style={{ height: "55%", aspectRatio: "1 / 1.6", margin: "10px 0", position: "relative" }}>
              <Image
                src={appData.baseURL + 'photos/photos_cover.png'}
                alt="cover"
                layout="fill"
                objectFit='cover'
                objectPosition='center'
                loading="eager"
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
            <div style={{ width: "40%", marginTop: "20px" }}>
              <Image
                src={appData.baseURL + 'photos/photos_insporation.png'}
                alt="cover"
                layout="responsive"
                objectPosition='center'
                style={{ objectFit: 'cover' }}
                width={1500}
                height={286}
              />
            </div>
          </div>
        </div>

        <div className="w-0 md:w-[50vw] ml-[50vw]" style={{height: "100%", backgroundColor: "#FFF"}}> 
        </div>
      </div>
    </>
  )
}

export default Photos