"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import appData from "../../../app-data.json";

const Jess = () => {
  const mdImageRef = useRef<HTMLImageElement>(null);
  const smImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (mdImageRef.current && smImageRef.current) {
      mdImageRef.current.style.opacity = "1";
      smImageRef.current.style.opacity = "1";
    }
  }, []);

  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100vw",
          height: "calc(100vh - 60px)",
          display: "flex",
          overflow: "hidden",
          zIndex: 101,
          position: "relative",
          backgroundColor: "#D7CDBE",
        }}
      >
        <div
          className="hidden md:flex"
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            minHeight: "calc(100vh - 60px)",
            aspectRatio: "2.889 / 2",
            zIndex: 102,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <div
            className="hidden md:block"
            style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
          ></div> */}
        </div>

        <Image
          ref={mdImageRef}
          className="hidden md:block"
          src={appData.baseURL + "jess/jess1.png"}
          alt="header"
          style={{
            opacity: 0,
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            minHeight: "calc(100vh - 60px)",
            transition: "1.5s ease",
            zIndex: 101,
          }}
          objectFit="contain"
          objectPosition="center"
          layout="fill"
        />

        <div
          className="flex md:hidden"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            minHeight: "calc(100vh - 60px)",
            minWidth: "100vw",
            aspectRatio: "1439 / 1999",
            zIndex: 102,
            justifyContent: "center",
            alignItems: "center",
            top: "50%",
          }}
        >
          {/* <div
            className="block md:hidden"
            style={{ width: "100px", height: "100px", backgroundColor: "blue" }}
          ></div> */}
        </div>

        <Image
          ref={smImageRef}
          className="block md:hidden"
          src={appData.baseURL + "jess/jess2.png"}
          alt="header"
          style={{
            opacity: 0,
            minHeight: "calc(100vh - 60px)",
            maxHeight: "calc(100vh - 60px)",
            transition: "1.5s ease",
          }}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </div>
  );
};

export default Jess;
