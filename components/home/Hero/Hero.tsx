import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./hero.css";
import appData from "../../../app-data.json"

const Hero = () => {
  const images = [
    "ipad-bg.png",
    "ipad-bg.png",
    "ipad-bg.png",
  ].map(image => appData.S3_base_URL + "designs/" + image);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload Images
  useEffect(() => {
    images.forEach((src) => {
      const img = new (window as any).Image() as HTMLImageElement;
      img.src = src;
    });

    // Image slider logic
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);

  }, [images]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <Image
          style={{
            objectFit: "cover",
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`slider-image ${currentIndex === index ? "active" : ""}`}
          width={1000}
          height={1500}
          priority={currentIndex === index} // Load the current image with priority
        />
      ))}
    </div>
  );
};

export default Hero;