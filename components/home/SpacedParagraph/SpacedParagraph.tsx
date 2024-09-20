import React, { useEffect, useRef, useState } from "react";
import "./spacedParagraph.css"

const SpacedParagraph = () => {
  const finalLineWidth = useRef<number>(300);
  const toggleSpacing = useRef<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // For spacing effect
      if (spacingEffectLine1.current && scrollStart.current) {
        let scrollDistance = 300;
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
          if (toggleSpacing) {
            toggleSpacing.current = true;
          }
          spacingEffectLine1.current.style.opacity = `${percentThere}`;
        } else if (
          window.scrollY <= scrollStart.current &&
          toggleSpacing &&
          toggleSpacing.current === true
        ) {
          spacingEffectLine1.current.style.width = `${window.innerWidth}px`;
          toggleSpacing.current = false;
          spacingEffectLine1.current.style.opacity = "0";
        } else if (
          window.scrollY > scrollStart.current + scrollDistance &&
          toggleSpacing &&
          toggleSpacing.current === true
        ) {
          spacingEffectLine1.current.style.width = `${finalLineWidth.current}px`;
          toggleSpacing.current = false;
          spacingEffectLine1.current.style.opacity = "1";
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        const spaceOffset = window.innerHeight - 50;
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
    <div
      style={{
        width: "100vw",
        height: "300px",
        backgroundColor: "#eee",
      }}
    >
      <div
        style={{
          paddingTop: 100,
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
            opacity: 0,
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
  );
};

export default SpacedParagraph;
