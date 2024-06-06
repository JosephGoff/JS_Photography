"use client";
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import appData from "../../../app-data.json";

const Designs = () => {
  const navHeight = 60
  const imageRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const imageWidth = 2200
  const tabletHeight = 559
  const imageHeight = 2506
  const whratio =  imageWidth / imageHeight
  const [isOverMax, setIsOverMax] = useState(false)
  const [whiteTabletWidth, setWhiteTabletWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight - 60;
      const image1 = imageRef.current
      const tablet = tabletRef.current
      const maxScroll = 300
      if (image1 && scrollY < 300 && scrollY > 0) {
        const finalWidth = (whratio *  (imageHeight / tabletHeight) * screenHeight) / window.innerWidth  * 100
        if ((scrollY / maxScroll) * finalWidth > 100) {
          image1.style.width = `${(scrollY / maxScroll) * finalWidth}vw`
          image1.style.marginLeft = `-${(scrollY / maxScroll) * 42}px`
        }
      }
      if (scrollY > maxScroll && !isOverMax) {setIsOverMax(true)} 
      if (scrollY < maxScroll) {setIsOverMax(false)} 

      if (scrollY < maxScroll) {setWhiteTabletWidth(window.innerHeight * (1085 / 759))}
      if (scrollY >= maxScroll && tabletRef.current) {tabletRef.current.style.width = "100vw"}
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <style jsx global>{`
        body, html {
          overflow-x: hidden;
        }
      `}</style>
      <div style={{zIndex: 101}} className="mt-[30px] sm:mt-[32.5px] md:mt-[35px] lg:mt-[37.5px] h-[calc(100vh-60px)] sm:h-[calc(100vh-65px)] md:h-[calc(100vh-70px)] lg:h-[calc(100vh-75px)] w-[100vw] flex items-center justify-center md:flex-row flex-col bg-background1">
        <div ref={imageRef} style={{ position: 'fixed', width: '100vw', height: '100%'}}>
          <Image
            src={appData.baseURL + 'ipad6-3.png'}
            alt="contact"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div style={{ width: "100vw", height: "500px", backgroundColor: "green" }}>
      </div>

      {isOverMax && <div ref={tabletRef} style={{position: "fixed", top: navHeight, zIndex: 102, 
      // width: `${whiteTabletWidth}px`, 
      transform: "translateX(50vw)",
      width: "0vw",
      height: `calc(100vh - ${navHeight}px)`, pointerEvents: "none", overflow: "hidden", backgroundColor: "white", transition: "width 1s ease"}}>
      </div>}
    </>
  );
};

export default Designs;
