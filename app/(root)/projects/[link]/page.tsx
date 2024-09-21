"use client";
import { useParams } from "next/navigation";
import appData from "../../../../app-data.json";
import Image from "next/image";
import "./link.css";
import { useEffect, useRef, useState } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import Link from "next/link";
import SmoothScroll from "@/components/SmoothScroll/SmoothScroll";
import Footer from "@/components/Footer/Footer";

const ProjectPage = () => {
  const { link } = useParams();
  const project = appData.projects.find((proj) => proj.link === link);
  const projectIndex = appData.projects.findIndex((proj) => proj.link === link);
  const whiteOverlayRef = useRef<HTMLDivElement>(null);

  const prevProjectIndex = projectIndex > 0 ? projectIndex - 1 : 0;
  const prevProject = appData.projects[prevProjectIndex];

  const nextProjectIndex =
    projectIndex >= appData.projects.length - 1
      ? appData.projects.length - 1
      : projectIndex + 1;
  const nextProject = appData.projects[nextProjectIndex];

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (whiteOverlayRef.current && isImageLoaded) {
      whiteOverlayRef.current.style.opacity = "0";
    }
  }, [isImageLoaded]);

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <>
      {/* Next Project */}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          zIndex: 101,
          display: "flex",
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        {projectIndex !== 0 && (
          <Link
            href={`/projects/${prevProject.link}`}
            className="toggle-project-button"
            style={{
              pointerEvents: "all",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: 15,
              bottom: 15,
              borderRadius: "50%",
              width: 40,
              height: 40,
            }}
          >
            <RxChevronLeft color="white" size={30} />
          </Link>
        )}

        {projectIndex < appData.projects.length - 1 && (
          <Link
            href={`/projects/${nextProject.link}`}
            className="toggle-project-button"
            style={{
              pointerEvents: "all",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed",
              right: 15,
              bottom: 15,
              borderRadius: "50%",
              width: 40,
              height: 40,
            }}
          >
            <RxChevronRight color="white" size={30} />
          </Link>
        )}
      </div>

      <SmoothScroll>
        {/* Load Effect */}
        <div
          ref={whiteOverlayRef}
          style={{
            width: "100vw",
            height: "100vh",
            backgroundColor: "white",
            position: "fixed",
            top: 0,
            opacity: 1,
            pointerEvents: "none",
            transition: "opacity 1.9s ease",
            zIndex: 200,
          }}
        ></div>

        {/* Hero */}
        <div
          style={{
            width: "100vw",
            aspectRatio: "1.83/1",
            backgroundColor: "white",
            minHeight: "420px",
            position: "relative",
          }}
        >
          {/* Image Box */}
          <div
            style={{
              width: "100vw",
              minHeight: "calc(0.89 * 420px)",
              position: "relative",
              height: "89%",
            }}
          >
            <Image
              // src={project.imageUrl}
              src={
                "https://i-p.rmcdn.net/51b71505874ca473560002f6/1551493/upload-d94a4350-d5dc-41bb-9d65-8e6813416a3f.jpg"
              }
              alt={project.name}
              layout="fill"
              style={{ objectFit: "cover" }}
              onLoadingComplete={() => setIsImageLoaded(true)}
            />
          </div>

          {/* Text Box */}
          <div
            // className="project-slide-up-text"
            style={{
              width: "80vw",
              minHeight: "calc(0.22 * 420px)",
              position: "absolute",
              bottom: 0,
              height: "22%",
              minWidth: "615px",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <div
              className="text-[60px] sm:text-[calc(50px+23.04px)] md:text-[9.5vw] lg:text-[calc(1024px*.095)] ml-[40px] md:ml-[5.5vw]"
              style={{
                fontWeight: "500",
                lineHeight: 1.1,
              }}
            >
              {project.name}
            </div>
          </div>
        </div>

        {/* Details */}
        <div
          className="project-slide-up-text
        flex flex-row gap-5 sm:gap-0 justify-between
        pl-[50px] md:pl-[6.5vw] pt-[13px]
        w-[calc(650px*0.65)] sm:w-[calc(768px*0.65)] md:w-[65vw] lg:w-[calc(1024px*0.65)] 
        text-[calc(630px*.02)] sm:text-[calc(768px*.02)] md:text-[2vw] lg:text-[calc(1024px*.02)]"
        >
          <div className="details-block">
            <p className="location">Site Location</p>
            <p className="location-value">{project.location}</p>
          </div>

          <div className="details-block">
            <p className="location">Project</p>
            <p className="location-value">{project.project}</p>
          </div>

          <div className="details-block">
            <p className="location">Year</p>
            <p className="location-value">{project.year}</p>
          </div>
        </div>

        {/* Text 1 */}
        <div
          className="project-slide-up-text
        leading-[1.3] pt-[calc(30px+3vw)] pb-[calc(20px+2vw)] ml-[50px] md:ml-[6.5vw]
        w-[calc(640px*0.60)] sm:w-[calc(768px*0.60)] md:w-[60vw] lg:w-[calc(1040px*0.60)] 
        text-[calc(630px*.03)] sm:text-[calc(768px*.03)] md:text-[3vw] lg:text-[calc(1020px*.03)]"
        >
          <p>{project.project_description}</p>
        </div>

        {/* Image 2 */}

        <div
          className="project-slide-up-text"
          style={{
            width: "calc(100vw - 40px)",
            position: "relative",
            height: 420,
            margin: "0 20px 40px 20px",
          }}
        >
          <Image
            // src={project.imageUrl}
            src="https://res.cloudinary.com/dxucsfmcl/image/upload/v1726192399/test_jhn198.jpg"
            // src={
            //   "https://i-p.rmcdn.net/51b71505874ca473560002f6/1551493/upload-d94a4350-d5dc-41bb-9d65-8e6813416a3f.jpg"
            // }
            style={{ objectFit: "cover" }}
            alt={project.name}
            layout="fill"
          />
        </div>
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default ProjectPage;
