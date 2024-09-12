"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";
import "./projects.css";

// 165FA7

const ProjectCard = ({ name, origin }: { name: string; origin: string }) => {
  return (
    <div
      style={{
        paddingLeft: 50,
        width: "100vw",
        height: "230px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        borderBottom: "1px solid #EEE"
      }}
    >
      <p
        style={{zIndex: 102, fontSize: 75, fontWeight: "500", cursor: "pointer" }}
        className="dim"
      >
        {name}
      </p>
      <p
        style={{
          zIndex: 102,
          fontSize: 12,
          color: "#999",
          fontWeight: 100,
          marginTop: -9,
          fontFamily: "arial",
        }}
      >
        {origin}
      </p>
      <div style={{zIndex: 101, position: "absolute", right: 30, height: 180, width: 300}}>
      <Image
        src="/assets/flower3.png"
        alt="project card"
        layout="fill"
        objectFit="cover"
        style={{maxHeight: 180}}
      />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          paddingTop: 80,
          paddingBottom: 80,
          borderBottom: "2px solid black",
          backgroundColor: "white",
        }}
      >
        <ProjectCard name="Villa de la Neige" origin="Montpellier, 2015" />
        <ProjectCard name="The Secret Cave" origin="London, 2015" />
        <ProjectCard name="Water Pavillion" origin="Pellston, 2010" />
      </div>
      <div style={{ padding: 80, fontSize: 18}}>
        In the Woods. Some seek their good or happiness in power; others in
        science, and others in the pleasures of the flesh. But those who come
        truly close to the good understand that it cannot consist in what can
        only be mastered by a few.
      </div>
    </>
  );
};

export default Projects;
