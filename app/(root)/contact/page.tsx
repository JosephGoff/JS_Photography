"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";
import SmoothScroll from "@/effects/SmoothScroll/SmoothScroll";
import Footer from "@/components/Footer/Footer";
import Footer2 from "@/components/Footer2/Footer2";

const Contact = () => {
  return (
    <SmoothScroll>
      <div
        className="flex justify-center items-center"
        style={{ width: "100vw", height: "100vh", backgroundColor: "#BC391C" }}
      >
        <p style={{ color: "white", fontSize: 30 }}>CONTACT</p>
      </div>
      <Footer2 />
    </SmoothScroll>
  );
};

export default Contact;
