"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";

const Hero = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ width: "100vw", height: "100vh", backgroundColor: "#3C501C" }}
    >
      <p style={{ color: "white", fontSize: 30 }}>HOME</p>
    </div>
  );
};

export default Hero;
