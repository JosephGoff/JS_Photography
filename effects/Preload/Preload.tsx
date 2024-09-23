"use client";
import React, { useEffect } from "react";
import appData from "../../app-data.json";

interface PreloadProps {
  children: React.ReactNode;
}

// Preload a string of images
export const preloadImages = (images: string[]) => {
  images.forEach((imageUrl) => {
    const img = new Image();
    img.src = imageUrl;
  });
};

// Preload individual image
export const preloadImage = (image: string) => {
  const img = new Image();
  img.src = image;
};

const Preload: React.FC<PreloadProps> = ({ children }) => {
  
  // Preload images from all pages except home page
  const preloadAllPagesImages = () => {
    const pagesImages: string[] = [];
    function recurse(obj: any) {
      if (typeof obj === "object" && obj !== null) {
        for (const key in obj) {
          if (key.includes("image")) {
            if (typeof obj[key] === "string") {
              pagesImages.push(obj[key]);
            }
          }
          recurse(obj[key]);
        }
      }
    }
    recurse(appData.pages);
    preloadImages(pagesImages);
  };

  useEffect(() => {
    preloadAllPagesImages();
  }, []);

  return <>{children}</>;
};
export default Preload;
