"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { TfiClose } from "react-icons/tfi";
import { IoLeaf } from "react-icons/io5";
import appData from "../../app-data.json";
import "./navbar.css";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [count, setCount] = useState(0);
  const isOpenRef = useRef(false);
  const closeRef = useRef(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [currentRoute, setCurrentRoute] = useState("/");
  const router = usePathname();
  const navOverlayRef = useRef<HTMLDivElement>(null);
  const navWhiteOverlayRef = useRef<HTMLDivElement>(null);
  const [navWhite, setNavWhite] = useState(false);

  useEffect(() => {
    if (navWhiteOverlayRef.current) {
      navWhiteOverlayRef.current.style.opacity = "0";
    }
    closeNavQuick();
  }, []);

  const [pageDark, setPageDark] = useState(false)

  // Initialize the router
  useEffect(() => {
    setCurrentRoute(router);
    closeNavQuick();

    if (router === "/") {
      setPageDark(false)
    } else {
      setPageDark(true)
    }
  }, [router]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY >= windowHeight && navWhite !== true) {
        setNavWhite(true); // Scrolled beyond 1x the window height
      } else if (scrollY < windowHeight && navWhite !== false) {
        setNavWhite(false); // Scrolled back to less than 1x the window height
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navWhite]);

  useEffect(() => {
    if (navWhiteOverlayRef.current) {
      navWhiteOverlayRef.current.style.opacity = "0";
    }
  }, [navWhiteOverlayRef]);

  // Handle window resizes
  useEffect(() => {
    const handleNavResize = () => {
      if (window.innerWidth >= 992 && isOpenRef && isOpenRef.current === true) {
        closeIsOpen(false);
        toggleNav(false);
      }
    };

    window.addEventListener("resize", handleNavResize); // Fix typo here
    return () => {
      window.removeEventListener("resize", handleNavResize);
    };
  }, []);

  // Toggle the close button and hamburger using refs
  function closeIsOpen(newVal: boolean) {
    if (newVal) {
      if (isOpenRef) {
        isOpenRef.current = true;
      }
      if (closeRef) {
        closeRef.current = true;
      }
      setCount((prevCount: number) => prevCount + 1);
    } else {
      if (closeRef) {
        closeRef.current = false;
      }
      setCount((prevCount: number) => prevCount + 1);
      setTimeout(() => {
        if (isOpenRef) {
          isOpenRef.current = false;
        }
        setCount((prevCount: number) => prevCount + 1);
      }, 400);
    }
  }

  const [navTrue, setNavTrue] = useState(false);
  // Toggle the nav overlay display
  function toggleNav(toggleOpen: boolean) {
    setNavTrue(toggleOpen);
    if (navOverlayRef.current) {
      if (toggleOpen) {
        navOverlayRef.current.style.opacity = "1";
        navOverlayRef.current.style.pointerEvents = "all";
      } else {
        navOverlayRef.current.style.opacity = "0";
        navOverlayRef.current.style.pointerEvents = "none";
      }
    }
  }

  const [isFading, setIsFading] = useState(false);
  const handleClick = (e: any) => {
    // e.preventDefault();
    // if (navWhiteOverlayRef.current) {
    //   navWhiteOverlayRef.current.style.opacity = "1";
    // }
    // // FROM NAV OVERLAY
    // if (e.target.tagName === "P") {
    //   let newRoute = e.target.textContent.toLowerCase();
    //   if (newRoute === "home") {
    //     newRoute = "";
    //   }
    //   setIsFading(true);
    //   setTimeout(() => {
    //     closeIsOpen(false);
    //   }, 300);
    //   setTimeout(() => {
    //     window.location.href = "/" + newRoute;
    //     setIsFading(false);
    //   }, 600);
    // } else if (e.target.tagName === "IMG" && e.target.alt === "signature") {
    //   setTimeout(() => {
    //     window.location.href = "/";
    //   }, 600);
    // }
  };

  const nameImage1Ref = useRef<HTMLImageElement>(null)
  const nameImage2Ref = useRef<HTMLImageElement>(null)

  function closeNavQuick() {
    // Toggle nav quick
    if (navOverlayRef.current) {
      setNavTrue(false);
      navOverlayRef.current.style.transition = "none";
      navOverlayRef.current.style.opacity = "0";
      navOverlayRef.current.style.pointerEvents = "none";
    }

    // Close is open quick
    if (closeRef) {
      closeRef.current = false;
    }
    if (isOpenRef) {
      isOpenRef.current = false;
    }
    setCount((prevCount: number) => prevCount + 1);
    if (nameImage1Ref.current && nameImage2Ref.current) {
      nameImage1Ref.current.style.transition = "none"
      nameImage2Ref.current.style.transition = "none"
    }

    setTimeout(() => {
      if (navOverlayRef.current) {
        navOverlayRef.current.style.transition = "opacity 0.5s ease";
      }
      if (nameImage1Ref.current && nameImage2Ref.current) {
        nameImage1Ref.current.style.transition = "opacity 1s ease-in-out"
        nameImage2Ref.current.style.transition = "opacity 1s ease-in-out"
      }
    }, 500);
  }

  const [currentImage, setCurrentImage] = useState("NAME-WHITE");
  useEffect(() => {
    const newImage = pageDark || navWhite || navTrue ? "NAME" : "NAME-WHITE";
    setCurrentImage(newImage);
  }, [navWhite, navTrue, pageDark]);

  return (
    <nav style={{ zIndex: 900 }} className="select-none">
      <div
        style={{
          height: "70px",
          width: "100vw",
          backgroundColor: navWhite ? "white" : "transparent",
          zIndex: 902,
          position: "fixed",
          transition: "background-color 0.8s ease",
        }}
      >
        {/* Hamburger Button */}
        <div
          className="absolute lg:hidden flex items-center select-none"
          style={{ height: 70, right: 23 }}
        >
          <button
            ref={openButtonRef}
            onClick={() => {
              toggleNav(true);

              closeIsOpen(true);
              if (closeButtonRef && closeButtonRef.current) {
                closeButtonRef.current.disabled = true;
                setTimeout(() => {
                  if (closeButtonRef && closeButtonRef.current)
                    closeButtonRef.current.disabled = false;
                }, 400);
              }
            }}
            style={{
              transition: "transform 0.4s ease, opacity 0.4s ease",
              transform:
                closeRef && closeRef.current
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              transformOrigin: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                opacity: closeRef && closeRef.current ? 0 : 1,
                display: closeRef && closeRef.current ? "none" : "block",
                transition: "opacity 0.4s ease",
              }}
            >
              <div className="w-[24px] flex flex-col" id="nav-hamburger">
                <div
                  style={{
                    height: "2px",
                    width: "100%",
                    backgroundColor: navWhite || pageDark ? "black" : "white",
                    transition: "background-color 1s ease-in-out",
                  }}
                ></div>
                <div
                  style={{
                    height: "2px",
                    width: "100%",
                    backgroundColor: navWhite || pageDark ? "black" : "white",
                    transition: "background-color 1s ease-in-out",
                  }}
                ></div>
                <div
                  style={{
                    height: "2px",
                    width: "100%",
                    backgroundColor: navWhite || pageDark ? "black" : "white",
                    transition: "background-color 1s ease-in-out",
                  }}
                ></div>
              </div>
            </div>
          </button>
        </div>

        {/* Close Button */}
        <div
          className="absolute lg:hidden flex items-center select-none"
          style={{ height: 70, right: 47 }}
        >
          <button
            ref={closeButtonRef}
            onClick={(event) => {
              toggleNav(false);

              closeIsOpen(false);
              if (openButtonRef && openButtonRef.current) {
                openButtonRef.current.disabled = true;
                setTimeout(() => {
                  if (openButtonRef && openButtonRef.current)
                    openButtonRef.current.disabled = false;
                }, 400);
              }
            }}
            className="absolute flex items-center"
            style={{
              transition: "transform 0.4s ease, opacity 0.4s ease",
              transform:
                closeRef && closeRef.current
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
              transformOrigin: "center",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                opacity: closeRef && closeRef.current ? 1 : 0,
                display: closeRef && closeRef.current ? "block" : "none",
                transition: "opacity 0.4s ease",
              }}
            >
              <TfiClose size={28} color="black" />
            </div>
          </button>
        </div>

        {/* NAME */}
        <Link href="/">
          <div
            style={{
              alignItems: "center",
              width: "210px",
              height: "70px",
              marginLeft: 20,
              display: "flex",
              cursor: "pointer",
              position: "relative",
            }}
            className="hover-dim"
          >
            {/* First Image */}
            <Image
              ref={nameImage1Ref}
              src={`${appData.S3_base_URL_2}NAME-WHITE.png`}
              className={`select-none image-transition ${
                currentImage === "NAME-WHITE" ? "image-visible" : ""
              }`}
              alt="signature"
              layout="relative"
              objectFit="cover"
              width={1000}
              height={123}
              draggable="false"
              style={{ position: "absolute" }}
            />

            {/* Second Image */}
            <Image
              ref={nameImage2Ref}
              src={`${appData.S3_base_URL_2}NAME.png`}
              className={`select-none image-transition ${
                currentImage === "NAME" ? "image-visible" : ""
              }`}
              alt="signature"
              layout="relative"
              objectFit="cover"
              width={1000}
              height={123}
              draggable="false"
              style={{ position: "absolute" }}
            />
          </div>
        </Link>

        {/* NAV SM+ */}
        <div
          className={`lg:flex hidden justify-center items-center absolute h-[70px]`}
          style={{
            width: "100vw",
            top: 0,
            gap: "calc(30px + 3vw)",
            pointerEvents: "none",
          }}
        >
          <Link href="/about">
            <div className="nav-link">
              <p
                style={{
                  color: `${navWhite || pageDark ? "black" : "white"}`,
                  transition: "color 0.8s ease",
                }}
                className="nav-link-text"
              >
                about
              </p>
            </div>
          </Link>
          <Link href="/projects">
            <div className="nav-link">
              <p
                style={{
                  color: `${navWhite || pageDark ? "black" : "white"}`,
                  transition: "color 0.8s ease",
                }}
                className="nav-link-text"
              >
                projects
              </p>
            </div>
          </Link>
          <a href="https://www.redbubble.com/people/jessshuly/shop?asc=u">
            <div className="nav-link">
              <p
                style={{
                  color: `${navWhite ? "black" : "white"}`,
                  transition: "color 0.8s ease",
                }}
                className="nav-link-text"
              >
                shop
              </p>
            </div>
          </a>
          <Link href="/contact">
            <div className="nav-link">
              <p
                style={{
                  color: `${navWhite ? "black" : "white"}`,
                  transition: "color 0.8s ease",
                }}
                className="nav-link-text"
              >
                contact
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* NAV OVERLAY */}
      <div
        ref={navOverlayRef}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          position: "fixed",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.5s ease",
          zIndex: 901,
        }}
      >
        {count >= 0 && isOpenRef && isOpenRef.current && (
          <ul
            style={{
              gap: 10,
              width: "100vw",
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
            }}
            className={`${isFading ? "fading-out" : ""}`}
          >
            <li className="slide-bottom-up-text overlay-link">
              {currentRoute === "/" && (
                <div className="nav-overlay-leaf">
                  <IoLeaf size={29} color="black" />
                </div>
              )}
              <Link href="/" onClick={handleClick}>
                <p
                  className={`nav-overlay-text lexend-tera ${
                    currentRoute === "/" ? "active-route" : ""
                  }`}
                >
                  HOME
                </p>
              </Link>
            </li>
            <li
              style={{ animationDelay: "0.075s" }}
              className="slide-bottom-up-text overlay-link"
            >
              {currentRoute === "/about" && (
                <div className="nav-overlay-leaf">
                  <IoLeaf size={29} color="black" />
                </div>
              )}
              <Link href="/about" onClick={handleClick}>
                <p
                  className={`nav-overlay-text lexend-tera  ${
                    currentRoute === "/about" ? "active-route" : ""
                  }`}
                >
                  ABOUT
                </p>
              </Link>
            </li>
            <li
              style={{ animationDelay: "0.15s" }}
              className="slide-bottom-up-text overlay-link"
            >
              {currentRoute === "/projects" && (
                <div className="nav-overlay-leaf">
                  <IoLeaf size={29} color="black" />
                </div>
              )}
              <Link href="/projects" onClick={handleClick}>
                <p
                  className={`nav-overlay-text lexend-tera ${
                    currentRoute === "/projects" ? "active-route" : ""
                  }`}
                >
                  PROJECTS
                </p>
              </Link>
            </li>
            <li
              style={{ animationDelay: "0.225s" }}
              className="slide-bottom-up-text overlay-link"
            >
              <a href="https://www.redbubble.com/people/jessshuly/shop?asc=u">
                <p className="nav-overlay-text lexend-tera">SHOP</p>
              </a>
            </li>
            <li
              style={{ animationDelay: "0.3s" }}
              className="slide-bottom-up-text overlay-link"
            >
              {currentRoute === "/contact" && (
                <div className="nav-overlay-leaf">
                  <IoLeaf size={29} color="black" />
                </div>
              )}
              <Link href="/contact" onClick={handleClick}>
                <p
                  className={`nav-overlay-text lexend-tera  ${
                    currentRoute === "/contact" ? "active-route" : ""
                  }`}
                >
                  CONTACT
                </p>
              </Link>
            </li>
          </ul>
        )}
      </div>

      {/* UNDER OVERLAY */}
      {/* <div
        ref={navWhiteOverlayRef}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.8s ease",
        }}
      ></div> */}
    </nav>
  );
};

export default Navbar;
