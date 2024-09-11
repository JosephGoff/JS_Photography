"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";

const Designs = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ width: "100vw", height: "100vh", backgroundColor: "#165FA7" }}
    >
      <p style={{ color: "white", fontSize: 30 }}>DESIGNS</p>
    </div>
  );
};

export default Designs;
