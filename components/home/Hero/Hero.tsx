"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";

const Hero = () => {
  return (
    <>
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Image
      style={{zIndex: 100}}
        src={appData.baseURL + "flower3.png"}
        alt="designs"
        layout="fill"
        objectFit="cover"
      />
    </div>
        <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Image
      style={{zIndex: 100}}
        src={appData.baseURL + "flower3.png"}
        alt="designs"
        layout="fill"
        objectFit="cover"
      />
    </div>
        <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        zIndex: 100,
      }}
    >
      <Image
      style={{zIndex: 100}}
        src={appData.baseURL + "flower3.png"}
        alt="designs"
        layout="fill"
        objectFit="cover"
      />
    </div>
    </>
  );
};

export default Hero;
