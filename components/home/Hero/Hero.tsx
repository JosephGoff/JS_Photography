"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import appData from "../../../app-data.json";

const Hero = () => {
  const imageWidth = 2048;
  const imageHeight = 3072;
  const displayRef = useRef<HTMLDivElement>(null);
  const  heroImageRef = useRef<HTMLImageElement>(null);

  const headerDisplayRef = useRef<HTMLImageElement>(null);
  const headerTitleyRef = useRef<HTMLImageElement>(null);

  const [isImage1Loaded, setIsImage1Loaded] = useState(false);
  const [isImage2Loaded, setIsImage2Loaded] = useState(false);
  const [isImage3Loaded, setIsImage3Loaded] = useState(false);

  useEffect(() => {
    // When page loads
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (headerDisplayRef.current && headerTitleyRef.current && isImage1Loaded && isImage2Loaded && isImage3Loaded) {
      headerDisplayRef.current.style.opacity = "1";
      headerTitleyRef.current.style.opacity = "1";
      setTimeout(() => {
        if (headerDisplayRef.current && headerTitleyRef.current) {
          headerDisplayRef.current.style.transition = "none";
          headerTitleyRef.current.style.transition = "none";
        }
      }, 1500);
    }
  }, [isImage1Loaded, isImage2Loaded, isImage3Loaded]);

  useEffect(() => {
    const screenHeight = window.innerHeight - 60;
    const maxScroll = 500;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const percentThere = scrollY / maxScroll;
      const over640 = window.innerWidth > 640 ? true : false;
      const biggerThan900 = window.innerWidth * 0.8 > 900 ? true : false;

      const initialWidth = biggerThan900 ? (900 / window.innerWidth) * 100 : 80;
      const finalWidth = 100;
      const widthDifference = finalWidth - initialWidth;

      const initialHeight = biggerThan900
        ? (0.93 / 2) * (900 / window.innerWidth) * 100
        : (0.93 / 2) * 80;
      const finalHeight = 100;
      const heightDifference = finalHeight - initialHeight;

      const initialMarginTop = 20;

      if (scrollY < maxScroll &&  heroImageRef.current) {
         heroImageRef.current.style.marginTop = `${0.5 * scrollY}px`;
      }

      if (scrollY < maxScroll) {
        // if (displayRef.current) {
        //   // displayRef.current.style.width = `${initialWidth + (widthDifference * percentThere)}%`
        //   // displayRef.current.style.marginTop = `${initialMarginTop - (20 * percentThere)}vh`
        // }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="w-[100vw] flex justify-center bg-background1"
        style={{
          overflowX: "hidden",
          position: "absolute",
          zIndex: 101,
          minHeight: "150vh",
        }}
      >
        <Image
          ref={ heroImageRef}
          src={appData.S3_base_URL + "home/wall.png"}
          style={{
            minHeight: `calc(${3072 / 2048} * 100vh)`,
            objectFit: "cover",
          }}
          alt="header"
          layout="relative"
          objectFit="cover"
          objectPosition="top"
          width={2048}
          height={3072}
          onLoadingComplete={() => setIsImage1Loaded(true)}
        />
      </div>

      <div
        className="h-[calc(100vh-60px)] w-[100vw] flex justify-center items-center"
        style={{
          position: "absolute",
          zIndex: 102,
          top: 60,
        }}
      >
        <div
          ref={displayRef}
          className="items-center min-h-[490px] sm:min-h-[475px] bg-background1 flex sm:flex-row flex-col"
          style={{
            width: "80vw",
            height: "calc((0.93 / 2) * 80vw)",
            maxWidth: "900px",
            maxHeight: "calc((0.93 / 2) * 900px)",
            marginTop: "20vh",
          }}
        >
          <div
            className="sm:w-[45%] w-[100%] h-[100px] sm:mt-0 mt-[20px] sm:h-[100%] sm:pl-[30px] sm:p-0 pl-[20%] pr-[20%]"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              ref={headerTitleyRef}
              style={{
                marginTop: -15,
                opacity: 0,
                transition: "1.5s ease",
                marginLeft: 8,
              }}
              src={appData.S3_base_URL + "home/header-title.png"}
              alt="header title"
              layout="responsive"
              objectFit="cover"
              className="w-[100px]"
              width={500}
              height={250}
              onLoadingComplete={() => setIsImage2Loaded(true)}
            />
          </div>
          <div
            className="sm:w-[55%] w-[100%] sm:mt-0 mt-[-20px] sm:h-[100%] sm:pr-[30px] sm:pl-0 pr-[10%] pl-[10%] sm:max-w-[450px] max-w-[465px]"
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              ref={headerDisplayRef}
              style={{ zIndex: 202, opacity: 0, transition: "1.5s ease" }}
              src={appData.S3_base_URL + "home/header-display.png"}
              alt="header title"
              layout="responsive"
              objectFit="cover"
              width={300}
              height={300}
              onLoadingComplete={() => setIsImage3Loaded(true)}
            />
          </div>
        </div>
      </div>

      {/* <div style={{ width: "100vw", height: "100vh", marginTop: "calc(100vh - 60px)" }}></div> */}
    </>
  );
};

export default Hero;
