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

  // Initialize the router
  useEffect(() => {
    setCurrentRoute(router);
  }, [router]);

  useEffect(()=>{
    if (navWhiteOverlayRef.current) {
      navWhiteOverlayRef.current.style.opacity = "0"
    }
  }, [navWhiteOverlayRef])

  // Handle window resizes
  useEffect(() => {
    const handleNavResize = () => {
      if (window.innerWidth >= 760 && isOpenRef && isOpenRef.current === true) {
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

  // Toggle the nav overlay display
  function toggleNav(toggleOpen: boolean) {
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
    e.preventDefault();
    
    // FROM NAV OVERLAY
    if (e.target.tagName === "P") {
      let newRoute = e.target.textContent.toLowerCase()
      if (newRoute === "about") { newRoute = ""}
      setIsFading(true);
      setTimeout(() => {
        closeIsOpen(false)
      }, 300);
      setTimeout(() => {
        window.location.href = "/" + newRoute; 
        setIsFading(false);
      }, 600);
    } else if (e.target.tagName === "IMG" && e.target.alt === "signature") {
      if (navWhiteOverlayRef.current) {
        navWhiteOverlayRef.current.style.opacity = "1"
      }
      setTimeout(() => {
        window.location.href = "/"
      }, 600);
    }
  };

  return (
    <nav style={{ zIndex: 900 }} className="select-none">
      <div
        style={{
          height: "70px",
          width: "100vw",
          backgroundColor: "transparent",
          zIndex: 902,
          position: "fixed",
        }}
      >
        {/* Hamburger Button */}
        <div
          className="absolute md:hidden flex items-center select-none"
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
                    backgroundColor: "black",
                  }}
                ></div>
                <div
                  style={{
                    height: "2px",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                ></div>
                <div
                  style={{
                    height: "2px",
                    width: "100%",
                    backgroundColor: "black",
                  }}
                ></div>
              </div>
            </div>
          </button>
        </div>

        {/* Close Button */}
        <div
          className="absolute md:hidden flex items-center select-none"
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
            className="absolute md:hidden flex items-center"
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

        {/* NAME SM */}
        <div
          className="md:hidden flex"
          style={{
            alignItems: "center",
            width: "210px",
            height: "70px",
            marginLeft: 20,
            display: "flex"
          }}
        >
          <Link href="/" onClick={handleClick}>
            <Image
              src={appData.S3_base_URL_2 + "NAME.png"}
              className="select-none"
              alt="signature"
              layout="relative"
              objectFit="cover"
              width={1000}
              height={123}
              draggable="false"
            />
          </Link>
        </div>

        {/* 
          <div className={`hidden md:flex`}>
            <div className="nav-link playfair-display">
              <Link href="/jess">JESS</Link>
            </div>
            <div className="nav-link playfair-display">
              <Link href="/designs">DESIGNS</Link>
            </div>
            <div className="nav-link playfair-display">
              <Link href="/photos">PHOTOS</Link>
            </div>
          </div>

          <div className={`justify-center items-center absolute flex h-[60px]`} style={{ width: "100vw", pointerEvents: "none" }}>
            <Link href="/">
              <div style={{ width: "130px", height: "60px", position: "relative", pointerEvents: "all" }}>
                <Image
                  src={appData.S3_base_URL + "nav/jessshulman.png"}
                  alt="signature"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </Link>
          </div>

          <div className={`hidden md:flex`}>
            <div className="nav-link playfair-display">
              <a href="https://www.redbubble.com/people/jessshuly/shop?asc=u">SHOP</a>
            </div>
            <div className="nav-link playfair-display">
              <Link href="/services">SERVICES</Link>
            </div>
            <div className="nav-link playfair-display">
              <Link href="/contact">CONTACT</Link>
            </div>
          </div> */}
      </div>

      {/* NAV OVERLAY */}
      <div
        ref={navOverlayRef}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          top: 0,
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.5s ease",
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
              <Link
                href="/"
                onClick={handleClick}
              >
                <p
                  className={`nav-overlay-text lexend-tera ${
                    currentRoute === "/" ? "active-route" : ""
                  }`}
                >
                  ABOUT
                </p>
              </Link>
            </li>
            <li
              style={{ animationDelay: "0.075s" }}
              className="slide-bottom-up-text overlay-link"
            >
              {currentRoute === "/designs" && (
                <div className="nav-overlay-leaf">
                  <IoLeaf size={29} color="black" />
                </div>
              )}
              <Link
                href="/designs"
                onClick={handleClick}
              >
                <p
                  className={`nav-overlay-text lexend-tera  ${
                    currentRoute === "/designs" ? "active-route" : ""
                  }`}
                >
                  DESIGNS
                </p>
              </Link>
            </li>
            <li
              style={{ animationDelay: "0.15s" }}
              className="slide-bottom-up-text overlay-link"
            >
              {currentRoute === "/photos" && (
                <div className="nav-overlay-leaf">
                  <IoLeaf size={29} color="black" />
                </div>
              )}
              <Link
                href="/photos"
                onClick={handleClick}
              >
                <p
                  className={`nav-overlay-text lexend-tera ${
                    currentRoute === "/photos" ? "active-route" : ""
                  }`}
                >
                  PHOTOS
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
              <Link
                href="/contact"
                onClick={handleClick}
              >
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
      <div
        ref={navWhiteOverlayRef}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          position: "absolute",
          top: 0,
          opacity: 1,
          pointerEvents: "none",
          transition: "opacity 0.8s ease",
        }}
      >
      </div>
    </nav>
  );
};

export default Navbar;
