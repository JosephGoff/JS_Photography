"use client";
import { useParams } from "next/navigation";
import appData from "../../../../app-data.json";
import Image from "next/image";
import "./link.css";
import "../../../../effects/SmoothScroll/SmoothScroll.css";
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
import useProjectSidebarFixed from "@/app/store/useProjectSidebarFixed";
import ProjectSidebar from "@/components/ProjectSidebar/ProjectSidebar";

const ProjectPage = () => {
  const { link } = useParams();
  const project = appData.pages.projects.find((proj) => proj.link === link);
  const projectIndex = appData.pages.projects.findIndex(
    (proj) => proj.link === link
  );

  // Next and previous projects
  const prevProjectIndex = projectIndex > 0 ? projectIndex - 1 : 0;
  const prevProject = appData.pages.projects[prevProjectIndex];

  const nextProjectIndex =
    projectIndex >= appData.pages.projects.length - 1
      ? appData.pages.projects.length - 1
      : projectIndex + 1;
  const nextProject = appData.pages.projects[nextProjectIndex];

  // Logic for right sidebar display
  const {
    projectSidebarFixed,
    projectSidebarFirstTrigger,
    projectSidebarSecondTrigger,
    hasPassedFirstTrigger,
    setHasPassedFirstTrigger,
    setProjectSidebarFixed,
    setProjectSidebarFirstTrigger,
    setProjectSidebarSecondTrigger,
  } = useProjectSidebarFixed();
  const projectSidebarFirstTriggerRef = useRef(projectSidebarFirstTrigger);
  const secondImageRef = useRef<HTMLDivElement>(null);
  const lastImageRef = useRef<HTMLDivElement>(null);
  let rightSideSet = false;
  let rightSideSet2 = false;

  // On load initialize the first trigger
  useEffect(() => {
    if (!rightSideSet && secondImageRef.current) {
      let titleOverflowAddition = 0;
      if (textRef.current) {
        titleOverflowAddition = textRef.current.clientHeight > 100 ? 40 : 0;
      }
      setProjectSidebarFirstTrigger(
        secondImageRef.current.offsetTop -
          window.innerHeight +
          titleOverflowAddition +
          45
      );
      projectSidebarFirstTriggerRef.current =
        secondImageRef.current.offsetTop -
        window.innerHeight +
        titleOverflowAddition +
        45;
      rightSideSet = true;
    }
  }, [secondImageRef]);

  // On load initialize the second trigger
  useEffect(() => {
    if (!rightSideSet2 && lastImageRef.current) {
      let titleOverflowAddition = 0;
      if (textRef.current) {
        titleOverflowAddition = textRef.current.clientHeight > 100 ? 40 : 0;
      }
      setProjectSidebarSecondTrigger(
        lastImageRef.current.offsetTop -
          window.innerHeight +
          titleOverflowAddition +
          45
      );
      rightSideSet2 = true;
    }
  }, [lastImageRef]);

  // Calculate height of title
  const textRef = useRef<HTMLDivElement>(null);
  const [marginTop, setMarginTop] = useState(0);
  useEffect(() => {
    if (textRef.current) {
      const height = textRef.current.clientHeight;
      const calculatedMarginTop = height > 100 ? 40 : 0;
      setMarginTop(calculatedMarginTop);
    }
  }, [textRef]);

  // Sidebar effect transition in
  const firstSidebarRef = useRef<HTMLDivElement>(null);
  const fixedSidebarRef = useRef<HTMLDivElement>(null);

  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    // Initial load, hide the first sidebar ref so the transition looks good
    if (firstSidebarRef.current) {
      firstSidebarRef.current.style.opacity = "0";
    }

    const handleResize = () => {
      // Update the sidebar triggers
      if (secondImageRef.current && textRef.current) {
        setProjectSidebarFirstTrigger(
          secondImageRef.current.offsetTop -
            window.innerHeight +
            45 -
            textRef.current.clientHeight >
            100
            ? 40
            : 0
        );
        projectSidebarFirstTriggerRef.current =
          secondImageRef.current.offsetTop -
            window.innerHeight +
            45 -
            textRef.current.clientHeight >
          100
            ? 40
            : 0;
      }
      if (lastImageRef.current && textRef.current) {
        setProjectSidebarSecondTrigger(
          lastImageRef.current.offsetTop -
            window.innerHeight +
            45 -
            textRef.current.clientHeight >
            100
            ? 40
            : 0
        );
      }

      // Calculate margin top for spacing for the project title
      if (textRef.current) {
        const height = textRef.current.clientHeight;
        const calculatedMarginTop = height > 100 ? 40 : 0;
        setMarginTop(calculatedMarginTop);
      }
    };

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos < projectSidebarFirstTriggerRef.current + 100) {
        if (currentScrollPos > projectSidebarFirstTriggerRef.current) {
          setOpacity(1);
        } else {
          setOpacity(0);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Overlay
  const whiteOverlayRef = useRef<HTMLDivElement>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  useEffect(() => {
    if (whiteOverlayRef.current && isImageLoaded) {
      whiteOverlayRef.current.style.opacity = "0";
    }
  }, [isImageLoaded]);

  // Ease in out effect
  const duration = 1200;
  const easeInOutCubic = (t: any) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Scroll to top button effect
  const [scrollingTop, setScrollingTop] = useState(false);
  const scrollToTop = () => {
    setScrollingTop(true);
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
        setScrollingTop(false);
      }
    };
    requestAnimationFrame(scroll);
  };

  // Transition each item in
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const options = {
      root: null, // viewport
      threshold: 0.1, // trigger when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        }
      });
    }, options);

    // Observe each section
    sectionsRef.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

  // 404
  if (!project) {
    return <h1>Project not found</h1>;
  }

  return (
    <>
      {projectSidebarFixed && (
        <div
          ref={fixedSidebarRef}
          className="lg:flex hidden"
          style={{
            height: "100vh",
            width: "calc(220px + 5vw)",
            position: "fixed",
            top: 0,
            right: 0,
            zIndex: 901,
            pointerEvents: "none",
            opacity: opacity,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <ProjectSidebar />
        </div>
      )}

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

        {/* First right sidebar - top of link page */}
        {/* {!projectSidebarFixed && (
          <div
            ref={firstSidebarRef}
            className="lg:flex hidden"
            style={{
              height: "100vh",
              width: "calc(220px + 5vw)",
              marginTop: `${projectSidebarFirstTrigger}px`,
              right: 0,
              position: "absolute",
              zIndex: 903,
              pointerEvents: "none",
              opacity: 1,
            }}
          >
            <ProjectSidebar />
          </div>
        )} */}

        {/* Second right sidebar - bottom of link page */}
        {!projectSidebarFixed && (
          <div
            className="lg:flex hidden"
            style={{
              height: "100vh",
              width: "calc(220px + 5vw)",
              marginTop: `${projectSidebarSecondTrigger}px`,
              right: 0,
              position: "absolute",
              zIndex: 903,
              pointerEvents: "none",
            }}
          >
            <ProjectSidebar />
          </div>
        )}

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
          className="project-slide-up-text font-[300] 
        leading-[1.3] pt-[calc(30px+3vw)] pb-[calc(20px+2vw)] ml-[50px] md:ml-[6.5vw]
        w-[calc(640px*0.60)] sm:w-[calc(768px*0.60)] md:w-[60vw] lg:w-[calc(1040px*0.60)] 
        text-[calc(630px*.03)] sm:text-[calc(768px*.03)] md:text-[3vw] lg:text-[calc(1020px*.03)]"
        >
          <p>{project.project_description}</p>
        </div>

        {/* Sections */}
        <div className="lg:w-[calc(95vw-220px)] w-[100vw] flex flex-col gap-[45px+2vw]">
          <div className="">
            <Section_H image1={project.imageUrl} />
            <div ref={secondImageRef}></div>
          </div>
          {[
            <Section_VV
              key="section-vv-1"
              image1={project.imageUrl}
              image2={project.imageUrl}
            />,
            <Section_H key="section-h-2" image1={project.imageUrl} />,
            <Section_VBOXR key="section-vboxr-1" image1={project.imageUrl} />,
            <Section_HM key="section-hm-1" image1={project.imageUrl} />,
            <Section_H key="section-h-3" image1={project.imageUrl} />,
            <Section_H key="section-h-4" image1={project.imageUrl} />,
            <Section_VV2
              key="section-vv2-1"
              image1={project.imageUrl}
              image2={project.imageUrl}
            />,
            <Section_HM key="section-hm-2" image1={project.imageUrl} />,
            <Section_VBOX key="section-vbox-1" image1={project.imageUrl} />,
            <Section_H key="section-h-5" image1={project.imageUrl} />,
            <Section_VV2R
              key="section-vv2r-1"
              image1={project.imageUrl}
              image2={project.imageUrl}
            />,
            <Section_H key="section-h-6" image1={project.imageUrl} />,
            <Section_VBOXV
              key="section-vboxv-1"
              image1={project.imageUrl}
              image2={project.imageUrl}
            />,
            <Section_H key="section-h-7" image1={project.imageUrl} />,
            <Section_VVBOX
              key="section-vvbox-1"
              image1={project.imageUrl}
              image2={project.imageUrl}
            />,
            <Section_H key="section-h-8" image1={project.imageUrl} />,
            <Section_VV2R
              key="section-vv2r-2"
              image1={project.imageUrl}
              image2={project.imageUrl}
            />,
            <Section_H key="section-h-9" image1={project.imageUrl} />,
          ].map((section, index) => (
            <div
              key={index}
              className="fade-in"
              ref={(el: any) => (sectionsRef.current[index] = el)}
            >
              {section}
            </div>
          ))}
        </div>

        {/* Sections */}
        {/* <div className="lg:w-[calc(95vw-220px)] w-[100vw] flex flex-col gap-[45px+2vw]">

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
        </div> */}

        <div ref={lastImageRef}></div>

        {/* Scroll To Top */}
        <div
          onClick={scrollToTop}
          style={{
            zIndex: 902,
            background: "linear-gradient(to bottom, transparent, white)",
          }}
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
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 px-[45px] md:px-[6vw] py-5">
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
