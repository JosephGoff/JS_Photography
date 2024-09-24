"use client";
import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import "./SmoothScroll.css";
import useWindowSize from "../../hooks/useWindowSize";
import useProjectSidebarFixed from "@/app/store/useProjectSidebarFixed";

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const windowSize = useWindowSize();
  const router = usePathname();
  const scrollingContainerRef = useRef<HTMLDivElement>(null);
  const data = {
    ease: 0.06,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    const handleResizeOrRouteChange = () => {
      setBodyHeight();
      data.current = window.scrollY;
      data.previous = window.scrollY;
    };

    handleResizeOrRouteChange();
    window.addEventListener("resize", handleResizeOrRouteChange);

    return () => {
      window.removeEventListener("resize", handleResizeOrRouteChange);
    };
  }, [windowSize.height, router]);

  const setBodyHeight = () => {
    if (scrollingContainerRef.current) {
      const contentHeight =
        scrollingContainerRef.current.getBoundingClientRect().height;
      document.body.style.height = `${contentHeight}px`;
    }
  };

  const {
    projectSidebarFixed,
    projectSidebarFirstTrigger,
    projectSidebarSecondTrigger,
    setProjectSidebarFixed,
  } = useProjectSidebarFixed();

  const projectSidebarFixedRef = useRef(projectSidebarFixed);
  useEffect(() => {
    projectSidebarFixedRef.current = projectSidebarFixed;
  }, [projectSidebarFixed]);

  const projectSidebarFirstTriggerRef = useRef(projectSidebarFirstTrigger);
  useEffect(() => {
    projectSidebarFirstTriggerRef.current = projectSidebarFirstTrigger;
  }, [projectSidebarFirstTrigger]);

  const projectSidebarSecondTriggerRef = useRef(projectSidebarSecondTrigger);
  useEffect(() => {
    projectSidebarSecondTriggerRef.current = projectSidebarSecondTrigger;
  }, [projectSidebarSecondTrigger]);

  useEffect(() => {
    const smoothScrollingHandler = () => {
      data.current = window.scrollY;
      data.previous += (data.current - data.previous) * data.ease;
      data.rounded = Math.round(data.previous * 100) / 100;
      if (
        data.previous >= projectSidebarFirstTriggerRef.current &&
        data.previous < projectSidebarSecondTriggerRef.current &&
        !projectSidebarFixedRef.current
      ) {
        setProjectSidebarFixed(true);
      } else if (
        data.previous < projectSidebarFirstTriggerRef.current && 
        projectSidebarFixedRef.current
      ) {
        setProjectSidebarFixed(false);
      } else if (
        data.previous >= projectSidebarSecondTriggerRef.current &&
        projectSidebarFixedRef.current
      ) {
        setProjectSidebarFixed(false);
      }

      // Smooth scroll effect
      if (scrollingContainerRef.current) {
        scrollingContainerRef.current.style.transform = `translateY(-${data.previous}px)`;
      }

      requestAnimationFrame(smoothScrollingHandler);
    };

    requestAnimationFrame(smoothScrollingHandler);
  }, []);

  return (
    <div className="parent">
      <div ref={scrollingContainerRef}>{children}</div>
    </div>
  );
};

export default SmoothScroll;
