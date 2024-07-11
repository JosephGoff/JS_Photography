"use client";
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import "../../globals.css"
import appData from "../../../app-data.json";

const Designs = () => {

    useEffect(() => {
    const screenHeight = window.innerHeight - 60;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > screenHeight + screenHeight) {

      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Navbar />
      <div
        style={{
          position: "absolute",
          top: 60,
          width: "100vw",
          marginTop: "1px",
        }}>
        <div
          style={{
            width: "100vw",
            height: "calc(100vh - 60px)",
          }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            height: "100%",
          }}>
            <div style={{ zIndex: 104, height: "100%", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div style={{ pointerEvents: "none", maxWidth: "90vw", position: "absolute", zIndex: 103, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Image
                  // ref={displayImageRef}
                  style={{ maxWidth: "90vw" }}
                  src={appData.baseURL + 'designs/my_designs.png'}
                  alt="contact"
                  layout="responsive"
                  objectFit="cover"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>


        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
          <Image
            src={appData.baseURL + 'img1.jpg'}
            alt="designs image"
            layout="fill"
            objectFit="cover"
            objectPosition='center'
          />
        </div>


        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
          <Image
            src={appData.baseURL + 'img1.jpg'}
            alt="designs image"
            layout="fill"
            objectFit="cover"
            objectPosition='center'
          />
        </div>


        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
          <Image
            src={appData.baseURL + 'img1.jpg'}
            alt="designs image"
            layout="fill"
            objectFit="cover"
            objectPosition='center'
          />
        </div>
      </div>
    </>
  );
};

export default Designs;
