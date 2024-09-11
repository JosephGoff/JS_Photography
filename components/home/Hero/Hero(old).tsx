"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../ui/button";
import Image from "next/image";
import appData from "../../../app-data.json";

const Hero = () => {
  return (
    <div style={{ width: "100vw", height: "calc(100vh - 60px)" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "50%",
          width: "100%",
        }}
      >
        <div style={{ width: "50%", height: "100%", backgroundColor: "white", padding: 20  }}>
          <Image
            src={appData.S3_base_URL + "jess/jess-right-img2.png"}
            alt="designs"
            layout="relative"
            objectFit="contain"
            objectPosition="top"
            height={1000}
            width={1000}
          />
        </div>
        <div style={{ width: "50%", height: "100%", backgroundColor: "white", padding: 20  }}>
          <Image
            src={appData.S3_base_URL + "jess/jess-right-img2.png"}
            alt="designs"
            layout="relative"
            objectFit="contain"
            objectPosition="top"
            height={1000}
            width={1000}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "50%",
          width: "100%",
        }}
      >
        <div style={{ width: "50%", height: "100%", backgroundColor: "white", padding: 20  }}>
          <Image
            src={appData.S3_base_URL + "jess/jess-right-img2.png"}
            alt="designs"
            layout="relative"
            objectFit="contain"
            objectPosition="top"
            height={1000}
            width={1000}
          />
        </div>
        <div style={{ width: "50%", height: "100%", backgroundColor: "white", padding: 20  }}>
          <Image
            src={appData.S3_base_URL + "jess/jess-right-img2.png"}
            alt="designs"
            layout="relative"
            objectFit="contain"
            objectPosition="top"
            height={1000}
            width={1000}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
