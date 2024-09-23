"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import appData from "../../../app-data.json";
import "./projects.css";
import Link from "next/link";
import SmoothScroll from "../../../effects/SmoothScroll/SmoothScroll";
import Footer from "@/components/Footer/Footer";

// 165FA7

const ProjectCard = ({
  name,
  location,
  link,
  index,
  imageUrl,
}: {
  name: string;
  location: string;
  link: string;
  index: number;
  imageUrl: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  let pageLoaded = false;
  useEffect(() => {
    if (!pageLoaded && cardRef.current) {
      cardRef.current.style.opacity = "1";
      cardRef.current.style.transform = "translateY(0)";
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transition = "none";
        }
      }, 1500);
      pageLoaded = true
    }
  }, [cardRef]);

  return (
    <Link href={`/projects/${link}`}>
      <div
        ref={cardRef}
        style={{ position: "relative", opacity: 0.05, transition: "opacity 1.3s ease-in-out, transform 1.3s ease-in-out", transform: "translateY(10px)" }}
        className="project-card flex-1 ml-[4vw] md:ml-[6vw] lg:ml-[3vw] mr-[4vw] md:mr-[6vw] lg:mr-[3vw]
          h-[460px] md:h-[695px] 
          mb-[46px] md:mb-[46px]
        "
      >
        <Image
          src={imageUrl}
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
            pointerEvents: "none",
          }}
        >
          <p
            className="work-sans text-[43px] lg:text-[110px] font-[300] md:font-[400] lg:font-[500] tracking-[2px] ml-[25px] lg:ml-[28px] leading-[1.15]"
            style={{ color: "white" }}
          >
            {name}
          </p>
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
        <div style={{ height: "70px" }}></div>
        {appData.pages.projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              name={project.name}
              location={project.location}
              link={project.link}
              imageUrl={project.imageUrl}
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
