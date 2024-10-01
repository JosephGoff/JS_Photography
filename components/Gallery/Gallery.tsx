"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import appData from "../../app-data.json";

interface GalleryDisplayColumnProps {
  imageArray: string[];
  isMiddle: boolean;
}

const GalleryDisplayColumn: React.FC<GalleryDisplayColumnProps> = ({
  imageArray,
  isMiddle,
}) => {
  return (
    <>
      {imageArray.map((num, index) => {
        const isHorizontal = isMiddle ? (index + 1) % 2 === 0 : index % 2 === 0; // Alternating logic

        return (
          <div
            key={index}
            className={`${isHorizontal ? "w-full pb-[65%] md:pb-[56.25%]" : "w-full md:w-[80%] pb-[133%] md:pb-[100%]"}`}
            style={{
              // width: isHorizontal ? "100%" : "80%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#eee",
            }}
          ></div>
        );
      })}
    </>
  );
};

const Gallery = () => {
  const numbers = ["1", "2", "3", "4"];

  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    const calculateMarginTop = () => {
      const vw = window.innerWidth; // Get the viewport width in pixels
      const calcValue = (vw * 0.86 - 70) / 3; // Equivalent of (90vw - 90px) / 3
      const result =
        calcValue > 460
          ? (460 - 460 * (9 / 16)) / 2
          : (calcValue - calcValue * (9 / 16)) / 2;

      setMarginTop(result);
    };

    calculateMarginTop();
    window.addEventListener("resize", calculateMarginTop);
    return () => {
      window.removeEventListener("resize", calculateMarginTop);
    };
  }, []);

  return (
    <div
      className="flex flex-row justify-center pb-[75px] px-[calc(25px+6vw)]"
      style={{
        width: "100vw",
        minHeight: "calc(100vh - 75px)",
        backgroundColor: "white",
      }}
    >
      {/* LG SCREEN */}
      <div
        style={{ top: `${marginTop}px`}}
        className="relative pr-[calc(10px+1vw)] hidden md:flex flex-[1] max-w-[460px] justify-center flex-wrap gap-[calc(45px+2vw)] mb-[calc(45px+2vw)]"
      >
        <GalleryDisplayColumn imageArray={numbers} isMiddle={false} />
      </div>
      <div className="hidden md:flex flex-[1] max-w-[460px] justify-center flex-wrap gap-[calc(45px+2vw)] mb-[calc(45px+2vw)]">
        <GalleryDisplayColumn imageArray={numbers} isMiddle={true} />
      </div>
      <div 
        style={{ top: `${marginTop}px` }}
        className="relative pl-[calc(10px+1vw)] hidden md:flex flex-[1] max-w-[460px] justify-center flex-wrap gap-[calc(45px+2vw)] mb-[calc(45px+2vw)]">
        <GalleryDisplayColumn imageArray={numbers} isMiddle={false} />
      </div>

      {/* SM SCREEN */}
      <div className="md:hidden flex justify-center flex-wrap flex-[1] gap-[calc(40px+2vw)]">
        <GalleryDisplayColumn imageArray={numbers} isMiddle={false} />
      </div>
    </div>
  );
};

export default Gallery;
