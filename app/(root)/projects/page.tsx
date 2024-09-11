"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";

const Projects = () => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ width: "100vw", height: "100vh", backgroundColor: "#165FA7" }}
    >
      <p style={{ color: "white", fontSize: 30 }}>PROJECTS</p>
    </div>
  );
};

export default Projects;
