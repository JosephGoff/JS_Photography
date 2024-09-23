"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";
import "./projects.css";
import Link from "next/link";

// 165FA7

const ProjectCard = ({
  name,
  location,
  link,
  index,
}: {
  name: string;
  location: string;
  link: string;
  index: number;
}) => {
  return (
    <Link
      href={`/projects/${link}`}
      className="dim-all"
      style={{
        cursor: "pointer",
        paddingLeft: 50,
        width: "100vw",
        height: "230px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: "column",
        borderTop: index !== 0? "1px solid #EEE" : "none",
      }}
    >
      <div
        style={{
          zIndex: 102,
          fontSize: 75,
          fontWeight: "500",
        }}
      >
        {name}
      </div>
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
        {location}
      </p>
      <div
        style={{
          zIndex: 101,
          position: "absolute",
          right: 30,
          height: 180,
          width: 300,
        }}
      >
        <Image
          src="/assets/flower3.png"
          alt="project card"
          layout="fill"
          style={{ maxHeight: 180, objectFit: "cover"}}
        />
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <>
      <div
        style={{
          width: "100vw",
          paddingTop: 80,
          paddingBottom: 40,
          backgroundColor: "white",
        }}
      >
        {appData.pages.projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.name}
              location={project.location}
              link={project.link}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Projects;
