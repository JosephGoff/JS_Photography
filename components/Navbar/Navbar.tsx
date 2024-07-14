"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import { IoLeaf } from "react-icons/io5";
import appData from "../../app-data.json"
import "./navbar.css"
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(0);
  const isOpenRef = useRef(false)
  const slideInRef = useRef(true)
  const closeRef = useRef(false)
  const [leaf, setLeaf] = useState(false)

  const openButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  const [currentRoute, setCurrentRoute] = useState("/");
  const router = usePathname()

  // useEffect(() => {
  //   setCurrentRoute(router)
  // }, [router])

  // useEffect(() => {
  //   const handleNavResize = () => {
  //     if (window.innerWidth >= 760) {
  //       closeIsOpen(false)
  //     }
  //   };

  //   window.addEventListener('resize', handleNavResize); // Fix typo here
  //   return () => {
  //     window.removeEventListener('resize', handleNavResize);
  //   };
  // }, []);

  function closeIsOpen(newVal: boolean) {
    if (newVal) {
      if (isOpenRef) { isOpenRef.current = true }
      if (closeRef) { closeRef.current = true }
      setCount((prevCount: number) => prevCount + 1)
      setTimeout(() => {
        if (slideInRef) { slideInRef.current = false }
      }, 400)
    } else {
      if (closeRef) { closeRef.current = false }
      setCount((prevCount: number) => prevCount + 1)
      setTimeout(() => {
        if (slideInRef) { slideInRef.current = true }
        if (isOpenRef) { isOpenRef.current = false }
        setCount((prevCount: number) => prevCount + 1)
      }, 400)
    }
  }

  return (
    <>
      <div style={{ zIndex: 999, position: "fixed", top: "0", marginTop: "-300px", height: 300, width: "100vw", backgroundColor: "grey" }}></div>
      <nav style={{ position: "fixed", zIndex: 998, width: "100%" }}>
        <div className="flex justify-between  pl-1 pr-1 bg-background1" style={{ height: "60px", borderBottom: "1px solid black" }}>
          <button
            ref={openButtonRef}
            onClick={() => {
              closeIsOpen(true);
              if (closeButtonRef && closeButtonRef.current) {
                closeButtonRef.current.disabled = true;
                setTimeout(() => { if (closeButtonRef && closeButtonRef.current) closeButtonRef.current.disabled = false; }, 400);
              }
            }}
            className="absolute md:hidden flex items-center"
            style={{
              right: 0,
              marginRight: "3.2vw",
              marginTop: "22px",
              transition: 'transform 0.4s ease, opacity 0.4s ease',
              transform: closeRef && closeRef.current ? 'rotate(180deg)' : 'rotate(0deg)',
              transformOrigin: 'center',
              cursor: "pointer",
            }}
          >
            <div
              style={{
                opacity: closeRef && closeRef.current ? 0 : 1,
                display: closeRef && closeRef.current ? "none" : "block",
                transition: 'opacity 0.4s ease',
              }}
            >
              <div className="w-[33px] flex flex-col gap-[4.1px]">
                <div style={{ height: "2px", width: "100%", backgroundColor: "black" }}></div>
                <div style={{ height: "2px", width: "100%", backgroundColor: "black" }}></div>
                <div style={{ height: "2px", width: "100%", backgroundColor: "black" }}></div>
              </div>
            </div>
          </button>

          <button
            ref={closeButtonRef}
            onClick={(event) => {
              closeIsOpen(false);
              if (openButtonRef && openButtonRef.current) {
                openButtonRef.current.disabled = true;
                setTimeout(() => { if (openButtonRef && openButtonRef.current) openButtonRef.current.disabled = false; }, 400);
              }
            }}
            className="absolute md:hidden flex items-center"
            style={{
              right: 0,
              marginRight: "3.2vw",
              marginTop: "16px",
              transition: 'transform 0.4s ease, opacity 0.4s ease',
              transform: closeRef && closeRef.current ? 'rotate(180deg)' : 'rotate(0deg)',
              transformOrigin: 'center',
              cursor: "pointer",
            }}
          >
            <div
              style={{
                opacity: closeRef && closeRef.current ? 1 : 0,
                display: closeRef && closeRef.current ? "block" : "none",
                transition: 'opacity 0.4s ease',
              }}
            >
              <TfiClose size={29} color="black" />
            </div>
          </button>

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
                  src={appData.baseURL + "jessshulman.png"}
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
          </div>

        </div>


        {count >= 0 && isOpenRef && isOpenRef.current && (
          <div
            style={{ zIndex: 900 }}
            className={`bg-background1 app__navbar-smallscreen_overlay 
            ${slideInRef.current ? 'slide-bottom-in' : 'slide-bottom-out'
              }`}
          >
            <ul className="app__navbar-smallscreen_links">
              <li className="slide-bottom-in-text" style={{ animationDelay: "0.05s" }}>
                {currentRoute === "/" && <div style={{ position: "absolute", marginTop: "6px" }}><IoLeaf size={29} color="black" /></div>}
                <Link style={{ marginLeft: "40px" }} href="/" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>Home</Link>
              </li>
              <li className="slide-bottom-in-text" style={{ animationDelay: "0.075s" }}>
                {currentRoute === "/jess" && <div style={{ position: "absolute", marginTop: "6px" }}><IoLeaf size={29} color="black" /></div>}
                <Link style={{ marginLeft: "40px" }} href="/jess" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>Jess</Link>
              </li>
              <li className="slide-bottom-in-text" style={{ animationDelay: "0.1s" }}>
                {currentRoute === "/designs" && <div style={{ position: "absolute", marginTop: "6px" }}><IoLeaf size={29} color="black" /></div>}
                <Link style={{ marginLeft: "40px" }} href="/designs" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>Designs</Link>
              </li>
              <li className="slide-bottom-in-text" style={{ animationDelay: "0.125s" }}>
                {currentRoute === "/photos" && <div style={{ position: "absolute", marginTop: "6px" }}><IoLeaf size={29} color="black" /></div>}
                <Link style={{ marginLeft: "40px" }} href="/photos" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>Photos</Link>
              </li>
              <li className="slide-bottom-in-text" style={{ animationDelay: "0.150s" }}>
                <a style={{ marginLeft: "40px" }} href="https://www.redbubble.com/people/jessshuly/shop?asc=u">Shop</a></li>
              <li className="slide-bottom-in-text" style={{ animationDelay: "0.175s" }}>
                {currentRoute === "/services" && <div style={{ position: "absolute", marginTop: "6px" }}><IoLeaf size={29} color="black" /></div>}
                <Link style={{ marginLeft: "40px" }} href="/services" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>Services</Link>
              </li>
              <li className="slide-bottom-in-text" style={{ animationDelay: "0.2s" }}>
                {currentRoute === "/contact" && <div style={{ position: "absolute", marginTop: "6px" }}><IoLeaf size={29} color="black" /></div>}
                <Link style={{ marginLeft: "40px" }} href="/contact" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>Contact</Link>
              </li>
            </ul>

            <div style={{ width: "80%", height: "1px", borderRadius: "3px", margin: "35px 40px", backgroundColor: "#999" }}></div>

            <ul style={{ marginLeft: "40px", display: "flex", flexDirection: "column", gap: "5px" }}>
              <li><a className="overlay-link playfair-display" href="https://instagram.com" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>INSTAGRAM</a></li>
              <li><a className="overlay-link playfair-display" href="https://instagram.com" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>BEHANCE</a></li>
              <li><a className="overlay-link playfair-display" href="https://instagram.com" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>DRIBBBLE</a></li>
              <li><a className="overlay-link playfair-display" href="https://instagram.com" onClick={() => { setIsOpen(false); if (isOpenRef) { isOpenRef.current = false } }}>LINKEDIN</a></li>
            </ul>
          </div>
        )}

        {/* <div style={{zIndex: 999, pointerEvents: isOpen? "all" : "none", opacity: isOpen? 1 : 0, transition: 'opacity 0.8s ease'}} className="w-[100vw] h-[100px] absolute bg-red-400"></div> */}
      </nav>

      <div style={{ opacity: 0, width: "100%", height: 60 }}>
      </div>
    </>
  );
};

export default Navbar;
