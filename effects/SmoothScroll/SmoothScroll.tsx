"use client";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "./SmoothScroll.css";
import useWindowSize from "../../hooks/useWindowSize";
import useScrollDataState from "@/app/store/scrollDataState"; // Zustand store

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const windowSize = useWindowSize();
  const router = usePathname();
  const scrollingContainerRef = useRef<HTMLDivElement>(null);

  const { setScrollData } = useScrollDataState(); // Access Zustand setter
  const dataRef = useRef({
    ease: 0.06,
    current: 0,
    previous: 0,
    rounded: 0,
  });

  // Set body height based on content
  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      const contentHeight = scrollingContainerRef.current.getBoundingClientRect().height;
      document.body.style.height = `${contentHeight}px`;
    }
  };

  useEffect(() => {
    const handleResizeOrRouteChange = () => {
      setBodyHeight();
      const data = dataRef.current;
      data.current = window.scrollY;
      data.previous = window.scrollY;
    };

    handleResizeOrRouteChange();
    window.addEventListener("resize", handleResizeOrRouteChange);

    return () => {
      window.removeEventListener("resize", handleResizeOrRouteChange);
    };
  }, [windowSize.height, router]);

  // Smooth scroll handler
  useEffect(() => {
    const smoothScrollingHandler = () => {
      const data = dataRef.current;
      data.current = window.scrollY;
      data.previous += (data.current - data.previous) * data.ease;
      data.rounded = Math.round(data.previous * 100) / 100;

      if (scrollingContainerRef.current) {
        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
      }

      // Store the smooth scroll data in Zustand state
      setScrollData({
        current: data.current,
        previous: data.previous,
        rounded: data.rounded,
      });

      requestAnimationFrame(smoothScrollingHandler);
    };

    requestAnimationFrame(smoothScrollingHandler);
  }, [setScrollData]);

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;