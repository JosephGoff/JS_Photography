"use client";
import Hero from "@/components/home/Hero/Hero";
import { useEffect, useState } from "react";
import { RxChevronDown } from "react-icons/rx";
import { RxChevronUp } from "react-icons/rx";

export default function Home() {
  const [scrollDirection, setScrollDirection] = useState(0);
 const duration = 1200; // Duration in milliseconds (1.2 seconds)

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
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  // Scroll Down function (1.2 seconds long)
  const scrollDown = () => {
    customScroll(window.innerHeight); // Scroll down to the viewport height
  };

  // Scroll Up function (1.2 seconds long)
  const scrollUp = () => {
    customScroll(0); // Scroll up to the top of the page
  };



   useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY >= windowHeight && scrollDirection !== 1) {
        setScrollDirection(1); // Scrolled beyond 1x the window height
      } else if (scrollY < windowHeight && scrollDirection !== 0) {
        setScrollDirection(0); // Scrolled back to less than 1x the window height
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  return (
    <main>
      {scrollDirection === 0 && (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            zIndex: 101,
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
            paddingBottom: 20,
            pointerEvents: "none",
            position: "absolute",
            top: 0,
          }}
        >
          <button style={{ pointerEvents: "all" }} onClick={scrollDown}>
            <RxChevronDown color="white" size={35}/>
          </button>
        </div>
      )}

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
            <RxChevronUp color="white" size={35}/>
          </button>
        </div>
      )}

      <Hero />
    </main>
  );
}
