import Image from "next/image";
import React from "react";

interface Section_HProps {
  image1: string;
}

const Section_H: React.FC<Section_HProps> = ({ image1 }) => {
  return (
    <div className="project-slide-up-text md:w-[calc(100%-6vw)] w-[calc(100%-90px)] md:ml-[6vw] ml-[45px] mb-[50px] h-[calc((100vw-90px)*0.55)] md:h-[calc((95vw-220px-6vw)*0.55)]">
      <Image
        src={image1}
        alt="project image"
        style={{
          objectFit: "cover",
        }}
        layout="fill"
        priority
      />
    </div>
  );
};

export default Section_H;
