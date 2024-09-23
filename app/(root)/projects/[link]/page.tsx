"use client";
import { useParams } from "next/navigation";
import appData from "../../../../app-data.json";
import Image from "next/image";
import "./link.css";
import { useEffect, useRef, useState } from "react";
import { RxChevronLeft, RxChevronRight } from "react-icons/rx";
import Link from "next/link";
import SmoothScroll from "@/effects/SmoothScroll/SmoothScroll";
import Footer from "@/components/Footer/Footer";
import Section_VV from "./Sections/Section_VV";
import Section_H from "./Sections/Section_H";
import Section_HM from "./Sections/Section_HM";
import Section_VV2 from "./Sections/Section_VV2";
import Section_VBOX from "./Sections/Section_VBOX";
import Section_VBOXR from "./Sections/Section_VBOXR";
import Section_VV2R from "./Sections/Section_VV2R";
import Section_VBOXV from "./Sections/Section_VBOXV";
import Section_VVBOX from "./Sections/Section_VVBOX";

const ProjectPage = () => {
  const rightSideBottomRef = useRef(1);
  const rightSideEndRef = useRef(1);

  const secondImageRef = useRef<HTMLDivElement>(null);
  const lastImageRef = useRef<HTMLDivElement>(null);
  let rightSideSet = false;
  let rightSideSet2 = false;
  useEffect(() => {
    if (!rightSideSet && secondImageRef.current && rightSideBottomRef.current) {
      rightSideBottomRef.current =
        secondImageRef.current.offsetTop;
      rightSideSet = true;
    }
  }, [secondImageRef]);

    useEffect(() => {
    if (!rightSideSet2 && lastImageRef.current && rightSideEndRef.current) {
      rightSideEndRef.current =
        lastImageRef.current.offsetTop;
      rightSideSet2 = true;
      console.log(rightSideEndRef.current)
    }
  }, [lastImageRef]);



  const [hasScrolledPastRightSideBottom, setHasScrolledPastRightSideBottom] =
    useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (
      scrollY > rightSideBottomRef.current - window.innerHeight &&
      scrollY <= rightSideEndRef.current - window.innerHeight &&
      !hasScrolledPastRightSideBottom 
    ) {
      setHasScrolledPastRightSideBottom(true);
    } else if (
      scrollY <= rightSideBottomRef.current - window.innerHeight &&
      hasScrolledPastRightSideBottom
    ) {
      setHasScrolledPastRightSideBottom(false);
    } else if (
      scrollY > rightSideEndRef.current - window.innerHeight &&
      hasScrolledPastRightSideBottom 
    ) {
      setHasScrolledPastRightSideBottom(false);
    }
  };

  const resetBounds = () => {
    if (secondImageRef.current && rightSideBottomRef.current) {
      rightSideBottomRef.current =
        secondImageRef.current.offsetTop;
    }
    if (lastImageRef.current && rightSideEndRef.current) {
      rightSideEndRef.current =
        lastImageRef.current.offsetTop;
    }
  };

  useEffect(() => {
    const functionsOnResize = [resetBounds, handleScroll];
    const handleResize = () => {
      functionsOnResize.forEach((func) => func());
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [hasScrolledPastRightSideBottom]);

  const { link } = useParams();
  const project = appData.pages.projects.find((proj) => proj.link === link);
  const projectIndex = appData.pages.projects.findIndex(
    (proj) => proj.link === link
  );
  const whiteOverlayRef = useRef<HTMLDivElement>(null);

  const prevProjectIndex = projectIndex > 0 ? projectIndex - 1 : 0;
  const prevProject = appData.pages.projects[prevProjectIndex];

  const nextProjectIndex =
    projectIndex >= appData.pages.projects.length - 1
      ? appData.pages.projects.length - 1
      : projectIndex + 1;
  const nextProject = appData.pages.projects[nextProjectIndex];

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (whiteOverlayRef.current && isImageLoaded) {
      whiteOverlayRef.current.style.opacity = "0";
    }
  }, [isImageLoaded]);

  const textRef = useRef<HTMLDivElement>(null);
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (textRef.current) {
        const height = textRef.current.clientHeight; // Get the height of the text
        const calculatedMarginTop = calculateMarginTop(height);
        setMarginTop(calculatedMarginTop); // Set the marginTop dynamically
      }
    };

    // Calculate marginTop on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateMarginTop = (height: any) => {
    // You can define your custom logic here based on the height
    // For example, you might want to reduce marginTop as the height increases
    return height > 100 ? 40 : 0; // Example logic
  };

  const duration = 1200;
  const easeInOutCubic = (t: any) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  const [scrollingTop, setScrollingTop] = useState(false)
  const scrollToTop = () => {
    setScrollingTop(true)
    const startY = window.pageYOffset;
    const distance = 0 - startY;
    const startTime = performance.now();

    const scroll = (currentTime: any) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure it doesn't exceed 1
      const ease = easeInOutCubic(progress); // Apply easing

      window.scrollTo(0, startY + distance * ease); // Scroll to the appropriate Y position

      if (progress < 1) {
        requestAnimationFrame(scroll); // Continue scrolling until done
      } else {
        setScrollingTop(false)
      }
    };

    requestAnimationFrame(scroll);
  };

  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <>
      <div
        className="md:flex hidden"
        style={{
          height: "100vh",
          width: "calc(220px + 5vw)",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 901,
          opacity: `${!hasScrolledPastRightSideBottom || scrollingTop? 0 : 1}`,
          pointerEvents: "none",
          transition: "opacity 1s ease-in-out",
        }}
      >
        <p style={{ marginTop: "700px", marginLeft: 20, fontSize: "30px" }}>
          Hi
        </p>
      </div>
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

        {projectIndex < appData.pages.projects.length - 1 && (
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
              ref={textRef}
              className="leading-[0.98] text-[60px] sm:text-[calc(50px+23.04px)] md:text-[9.5vw] lg:text-[calc(1024px*.095)] ml-[40px] md:ml-[5.5vw]"
              style={{
                fontWeight: "500",
              }}
            >
              {project.name}
            </div>
          </div>
        </div>

        {/* Details */}
        <div
          style={{ marginTop: `${marginTop}px` }}
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

        {/* Sections */}
        <div className="md:w-[calc(95vw-220px)] w-[100vw]">
          <Section_H image1={project.imageUrl} />
          <div ref={secondImageRef}></div>
          <Section_VV image1={project.imageUrl} image2={project.imageUrl} />
          <Section_H image1={project.imageUrl} />
          <Section_VBOXR image1={project.imageUrl} />
          <Section_HM image1={project.imageUrl} />
          <Section_H image1={project.imageUrl} />
          <Section_H image1={project.imageUrl} />
          <Section_VV2 image1={project.imageUrl} image2={project.imageUrl} />
          <Section_HM image1={project.imageUrl} />
          <Section_VBOX image1={project.imageUrl} />
          <Section_H image1={project.imageUrl} />
          <Section_VV2R image1={project.imageUrl} image2={project.imageUrl} />
          <Section_H image1={project.imageUrl} />
          <Section_VBOXV image1={project.imageUrl} image2={project.imageUrl} />
          <Section_H image1={project.imageUrl} />
          <Section_VVBOX image1={project.imageUrl} image2={project.imageUrl} />
          <Section_H image1={project.imageUrl} />
          <Section_VV2R image1={project.imageUrl} image2={project.imageUrl} />
          <Section_H image1={project.imageUrl} />
        </div>
        <div ref={lastImageRef}></div>


        <div
          onClick={scrollToTop}
          style={{zIndex: 902, background: "linear-gradient(to bottom, transparent, white)"}}
          className="flex justify-center pt-[140px] pb-[45px] w-[100vw]"
        >
          <p
            className="dim"
            style={{
              transition: "opacity 0.2s ease-in-out",
              cursor: "pointer",
              textUnderlineOffset: "3.8px",
              textDecorationThickness: "1px",
              fontSize: "calc(14px + 0.5vw)",
              textDecoration: "underline",
            }}
          >
            Back to top
          </p>
        </div>

        <div
          className="w-[calc(100vw-90px)] md:w-[calc(88vw)] ml-[45px] md:ml-[6vw]"
          style={{
            height: "1.5px",
            backgroundColor: "#ddd",
            borderRadius: "2px",
          }}
        ></div>

        {/* More Projects */}
        <div
          style={{
            paddingTop: "40px",
            width: "100vw",
            marginBottom: "60px",
            backgroundColor: "white",
            zIndex: 902,
          }}
        >
          <div
            className="tracking-[1.5px]"
            style={{
              width: "100vw",
              height: "160px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "calc(25px + 2vw)",
              fontWeight: "300",
            }}
          >
            More Projects
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-5 py-5">
            {appData.pages.projects
              .filter((project) => project.link !== link)
              .map((project) => (
                <Link key={project.name} href={`/projects/${project.link}`}>
                  <div
                    className="aspect-square"
                    style={{ backgroundColor: "red", position: "relative" }}
                  >
                    <Image
                      src={project.imageUrl}
                      alt="more projects image"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      width={1000}
                      height={1000}
                      priority
                    />
                    <div
                      className="more-projects-dim"
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
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      <p
                        className="text-[22px] sm:text-[25px] lg:text-[30px] font-[300] md:font-[400] lg:font-[500] tracking-[2px] leading-[1.15]"
                        style={{ color: "white", maxWidth: "80%" }}
                      >
                        {project.name}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        <Footer />
      </SmoothScroll>
    </>
  );
};

export default ProjectPage;
