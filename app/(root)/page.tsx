"use client";
import Hero from "@/components/home/Hero/Hero";
import { useEffect, useRef, useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { RxChevronUp } from "react-icons/rx";
import { PiArrowDownThin } from "react-icons/pi";
import "./home.css";
import Slider from "@/components/home/Slider/Slider";
import Slider2 from "@/components/home/Slider2/Slider2";
import useStore from "../store/storage";

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState(0);
  const duration = 1200;
  const homeOverlayRef = useRef<HTMLDivElement>(null);
  const portfolioButtonRef = useRef<HTMLButtonElement>(null);
  const porfolioArrowButtonRef = useRef<HTMLButtonElement>(null);

  // On page load, fade in
  useEffect(() => {
    setTimeout(() => {
      if (portfolioButtonRef.current) {
        portfolioButtonRef.current.style.opacity = "1";
        setTimeout(() => {
          if (porfolioArrowButtonRef.current) {
            porfolioArrowButtonRef.current.style.opacity = "1";
          }
        }, 700);
      }
    }, 300);
  }, []);

  // Custom scroll function for any target position
  const customScroll = (targetY: any) => {
    const startY = window.pageYOffset;
    const distance = targetY - startY;
    const startTime = performance.now();

    const scroll = (currentTime: any) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Ensure it doesn't exceed 1
      const ease = easeInOutCubic(progress); // Apply easing

      window.scrollTo(0, startY + distance * ease); // Scroll to the appropriate Y position

      if (progress < 1) {
        requestAnimationFrame(scroll); // Continue scrolling until done
      }
    };

    requestAnimationFrame(scroll);
  };

  // Easing function for smooth acceleration and deceleration
  const easeInOutCubic = (t: any) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Scroll Down function (1.2 seconds long)
  const scrollDown = () => {
    customScroll(window.innerHeight); // Scroll down to the viewport height
  };

  // Scroll Up function (1.2 seconds long)
  const scrollUp = () => {
    customScroll(0); // Scroll up to the top of the page
  };

  const finalLineWidth = useRef<number>(300);
  const toggleSpacing = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY >= windowHeight && scrollDirection !== 1) {
        setScrollDirection(1); // Scrolled beyond 1x the window height
      } else if (scrollY < windowHeight && scrollDirection !== 0) {
        setScrollDirection(0); // Scrolled back to less than 1x the window height
      }

      // For spacing effect
      if (spacingEffectLine1.current && scrollStart.current) {
        let scrollDistance = 200;
        if (
          window.scrollY > scrollStart.current &&
          window.scrollY <= scrollStart.current + scrollDistance &&
          spacingEffectLine1.current &&
          finalLineWidth
        ) {
          const percentThere =
            (window.scrollY - scrollStart.current) / scrollDistance;
          const difference = window.innerWidth - finalLineWidth.current;
          spacingEffectLine1.current.style.width = `${
            finalLineWidth.current + (difference - percentThere * difference)
          }px`;
          if (toggleSpacing) toggleSpacing.current = true;
        } else if (
          window.scrollY <= scrollStart.current &&
          toggleSpacing &&
          toggleSpacing.current === true
        ) {
          spacingEffectLine1.current.style.width = `${window.innerWidth}px`;
          toggleSpacing.current = false;
        } else if (
          window.scrollY > scrollStart.current + scrollDistance &&
          toggleSpacing &&
          toggleSpacing.current === true
        ) {
          spacingEffectLine1.current.style.width = `${finalLineWidth.current}px`;
          toggleSpacing.current = false;
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  const spacingEffectLine1 = useRef<HTMLDivElement>(null);
  const scrollStart = useRef<number>(1);
  let pageLoaded = false;
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
      initializeSpacing();
    } else {
      initializeSpacing();
    }

    function initializeSpacing() {
      if (spacingEffectLine1.current && !pageLoaded) {
        pageLoaded = true;
        const spaceOffset = 0.5 * window.innerHeight;
        setOffset(spaceOffset);
        if (scrollStart.current)
          scrollStart.current =
            spacingEffectLine1.current.getBoundingClientRect().top -
            spaceOffset;
        if (finalLineWidth.current)
          finalLineWidth.current = spacingEffectLine1.current.clientWidth;
        spacingEffectLine1.current.style.width = `${window.innerWidth}px`;
        spacingEffectLine1.current.style.justifyContent = "space-between";
      }
    }
  }, [spacingEffectLine1]);

  return (
    <main>
      {/* Overlay */}
      {/* <div
        ref={homeOverlayRef}
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
          position: "fixed",
          top: 0,
          opacity: 0,
          pointerEvents: "none",
          transition: "opacity 0.8s ease",
          zIndex: 900,
        }}
      ></div> */}

      {/* Portfolio Scroll Down */}
      <div
        style={{
          height: "100vh",
          width: "100vw",
          zIndex: 101,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pointerEvents: "none",
          position: "absolute",
          flexDirection: "column",
          top: 0,
        }}
      >
        <button
          ref={portfolioButtonRef}
          onClick={scrollDown}
          style={{
            pointerEvents: "all",
            opacity: 0,
            transition: "opacity 1.8s ease",
          }}
        >
          <p
            style={{ color: "white", fontSize: "calc(30px + 5vw)" }}
            className="raleway"
          >
            PORTFOLIO
          </p>
        </button>

        <button
          ref={porfolioArrowButtonRef}
          onClick={scrollDown}
          style={{
            pointerEvents: "all",
            position: "absolute",
            bottom: 20,
            opacity: 0,
            transition: "opacity 1.8s ease",
          }}
        >
          <PiArrowDownThin color="white" size={46} />
        </button>
      </div>

      {scrollDirection === 1 && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            zIndex: 101,
            display: "flex",
            justifyContent: "flex-end",
            paddingRight: 20,
            paddingBottom: 15,
            alignItems: "flex-end",
            pointerEvents: "none",
            position: "fixed",
            top: 0,
          }}
        >
          <button style={{ pointerEvents: "all" }} onClick={scrollUp}>
            <RxChevronUp color="white" size={35} />
          </button>
        </div>
      )}

      <Hero />

      <Slider />
      <Slider2 />

      {/* Spaced Words */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            marginTop: 100,
            width: "100vw",
            height: "100px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            ref={spacingEffectLine1}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "auto",
            }}
          >
            <p className="spacing-effect-p">Your</p>
            <p className="spacing-effect-p">Brand</p>
            <p className="spacing-effect-p">Is</p>
            <p className="spacing-effect-p">Part</p>
            <p className="spacing-effect-p">Of</p>
          </div>
        </div>
      </div>
    </main>
  );
}
