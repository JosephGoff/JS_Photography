"use client";
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import appData from "../../../app-data.json";

const Designs = () => {
  const redBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const redBox = redBoxRef.current;
      const maxScroll = 300
      if (redBox) {
        if (scrollY < maxScroll) {
          const scale = 1 + (scrollY / maxScroll) * (Math.max(window.innerWidth, window.innerHeight) / 264.5);
          redBox.style.width = `${264.5 * scale}px`;
          redBox.style.height = `${187 + (window.innerHeight - 187) * (scrollY / maxScroll)}px`;
          if (13 - (scrollY / (maxScroll / 3)) * 13 > 0) {
            redBox.style.marginLeft = `${13 - (scrollY / (maxScroll / 3)) * 13}px`;
          } else {redBox.style.marginLeft = '0px'
          }
          if (36 - (scrollY / (maxScroll / 3)) * 36 > 0) {
            redBox.style.marginBottom = `${36 - (scrollY / (maxScroll / 3)) * 36}px`;
          } else {
            redBox.style.marginBottom = '0px'
          }
        } else {
          console.log(scrollY)
          // redBox.style.marginTop = `${scrollY}px`
          redBox.style.width = '100vw';
          redBox.style.height = '100vh';
          redBox.style.top = "0";
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-60px)] sm:h-[calc(100vh-65px)] md:h-[calc(100vh-70px)] lg:h-[calc(100vh-75px)] w-[100vw] flex items-center justify-center md:flex-row flex-col bg-background1">
        <div style={{ position: 'relative', width: '100vw', height: '100%' }}>
          <Image
            src={appData.baseURL + 'ipad6.png'}
            alt="contact"
            layout="fill"
            objectFit="cover"
            className="block md:hidden"
          />
          <Image
            src={appData.baseURL + 'ipad6-2.png'}
            alt="contact"
            layout="fill"
            objectFit="cover"
            className="hidden md:block"
          />
        </div>
        {/* <div className="absolute" style={{marginBottom: "36px", marginLeft: "13px", width: "264.5px", height: "187px", backgroundColor: "white", borderRadius: "6px"}}></div> */}
        <div
          ref={redBoxRef}
          className="absolute"
          style={{
            marginBottom: '36px',
            marginLeft: '13px',
            width: '264.5px',
            height: '187px',
            backgroundColor: 'white',
            borderRadius: '6px',
            transition: 'width 0.1s, height 0.1s'
          }}
        ></div>
      </div>
      <div style={{width: "100vw", height: "500px", backgroundColor: "green" }}>
      </div>
    </>
  );
};

export default Designs;
