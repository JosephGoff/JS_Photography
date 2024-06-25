"use client"

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { TfiClose } from 'react-icons/tfi';
import appData from "../../app-data.json"
import "./navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav style={{position: "fixed", zIndex: 999, width: "100%"}}>
        <div className="flex justify-between items-center pr-4 bg-background1" style={{height: "60px", borderBottom: "1px solid black"}}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-6 absolute md:hidden flex items-center"
            style={{
              transition: 'transform 0.4s ease, opacity 0.4s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transformOrigin: 'center',
            }}
          >
            <div
              style={{
                opacity: isOpen ? 0 : 1,
                transition: 'opacity 0.4s ease',
              }}
            >
              <div className="w-[37px] flex flex-col gap-[4.1px]">
                <div style={{height: "2px", width: "100%", backgroundColor: "black"}}></div>
                <div style={{height: "2px", width: "100%", backgroundColor: "black"}}></div>
                <div style={{height: "2px", width: "100%", backgroundColor: "black"}}></div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="ml-6 absolute md:hidden flex items-center"
            style={{
              transition: 'transform 0.4s ease, opacity 0.4s ease',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
              transformOrigin: 'center',
            }}
          >
            <div
              style={{
                opacity: isOpen ? 1 : 0,
                transition: 'opacity 0.4s ease',
              }}
            >
              <TfiClose size={29} color="black"/>
            </div> 
          </button>
          
          <div className={`hidden md:flex`}>
            <Link className="text-black nav-link" href="/jess">
              Jess
            </Link>
            <Link className="text-black nav-link" href="/designs">
              Designs
            </Link>
            <Link className="text-black nav-link" href="/photos">
              Photos
            </Link>
          </div>

          <div className={`justify-center items-center absolute flex h-[60px] sm:h-[65px] md:h-[70px] lg:h-[75px]`} style={{width: "100vw", pointerEvents: "none"}}>
            <Link href="/">
              <div style={{width: "130px", height: "60px", position: "relative", pointerEvents: "all"}}>
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
            <a className="text-black nav-link" href="https://www.redbubble.com/people/jessshuly/shop?asc=u">
              Shop
            </a>
            <Link className="text-black nav-link" href="/services">
              Services
            </Link>
            <Link className="text-black nav-link" href="/contact">
              Contact
            </Link>
          </div>
        
        </div>

       {isOpen && (
          <div style={{zIndex: 900}} className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            {/* <TfiClose color="#6493A8" fontSize={27} className="overlay__close" onClick={() => setIsOpen(false)} /> */}
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#" onClick={() => setIsOpen(false)}>Home</a></li>
              <li><a href="#" onClick={() => setIsOpen(false)}>About</a></li>
              <li><a href="#" onClick={() => setIsOpen(false)}>Awards</a></li>
              <li><a href="#" onClick={() => setIsOpen(false)}>Contact</a></li>
            </ul>
          </div>
        )}
        {/* <div style={{zIndex: 999, pointerEvents: isOpen? "all" : "none", opacity: isOpen? 1 : 0, transition: 'opacity 0.8s ease'}} className="w-[100vw] h-[100px] absolute bg-red-400"></div> */}
      </nav>

      <div style={{opacity: 0, width: "100%", height: 60}}>
      </div>
    </>
  );
};

export default Navbar;
