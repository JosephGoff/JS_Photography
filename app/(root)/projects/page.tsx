"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";
import "./projects.css";
import Link from "next/link";
import SmoothScroll from "../../../components/SmoothScroll/SmoothScroll";
import Footer from "@/components/Footer/Footer";

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
  const [image1IsLoaded, setImage1IsLoaded] = useState(false);
  const image1Url = "/assets/flower3.png";

  // Preload image logic
  useEffect(() => {
    const img = new (window as any).Image() as HTMLImageElement;
    img.src = image1Url;

    img.onload = () => {
      setImage1IsLoaded(true); 
    };
  }, [image1Url]);

  return (
    <Link href={`/projects/${link}`}>
      <div
        style={{ position: "relative" }}
        className="flex-1 ml-[4vw] md:ml-[6vw] lg:ml-[3vw] mr-[4vw] md:mr-[6vw] lg:mr-[3vw]
          h-[460px] md:h-[695px] 
          mb-[46px] md:mb-[46px]
        "
      >
        <Image
          src="/assets/flower3.png"
          alt="project card"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          width={1000}
          height={1000}
          priority
        />
        <div
          className="project-dim"
          style={{
            zIndex: 101,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            backgroundColor: "black",
          }}
        ></div>
        <div
          style={{
            zIndex: 101,
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            pointerEvents: "none"
          }}
        >
          <p className="work-sans text-[43px] lg:text-[110px] font-[300] md:font-[400] lg:font-[500] tracking-[2px] ml-[25px] lg:ml-[28px] leading-[1.15]" style={{color: "white"}}>{name}</p>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <SmoothScroll>
      <div
        style={{
          width: "100vw",
        }}
      >
        <div style={{height: "80px"}}></div>
        {appData.projects.map((project, index) => {
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
      <Footer />
    </SmoothScroll>
  );
};

export default Projects;
