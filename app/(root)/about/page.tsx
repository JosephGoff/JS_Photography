"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";
import SmoothScroll from "@/effects/SmoothScroll/SmoothScroll";
import Footer from "@/components/Footer/Footer";

const About = () => {
  return (
    <SmoothScroll>
      <div
        className="flex justify-center items-center"
        style={{ width: "100vw", height: "100vh", backgroundColor: "#C281A1" }}
      >
        <p style={{ color: "white", fontSize: 30 }}>ABOUT</p>
      </div>
      <Footer />
    </SmoothScroll>
  );
};

export default About;
