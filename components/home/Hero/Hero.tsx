import React, { useState, useEffect } from "react";
import Image from "next/image";
import './hero.css'; 

const Hero = () => {
  const images = [
    "flower3.png",
    "flower2.png",
    "flower3.png",
    "flower3.png",
    "flower2.png",
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <Image
          key={index}
          src={`/assets/${image}`} 
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="cover"
          className={`slider-image ${currentIndex === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default Hero;