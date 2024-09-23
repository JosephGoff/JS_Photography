import Image from "next/image";
import React from "react";

interface Section_VBOXProps {
  image1: string;
}

const Section_VBOX: React.FC<Section_VBOXProps> = ({ image1 }) => {
  return (
    <div className="project-slide-up-text md:w-[calc(100%-6vw)] w-[calc(100%-90px)] md:ml-[6vw] ml-[45px] mb-[50px] h-[calc((100vw-90px)*0.55)] md:h-[calc((95vw-220px-6vw)*0.55)]">
      <div
        style={{
          
          height: "100%",
          float: "right",
          aspectRatio: "1/1"
        }}
      >
        <Image
          src={image1}
          alt="project image"
          style={{
            width: "100%", 
            height: "100%",
            objectFit: "cover",
          }}
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
  );
};

export default Section_VBOX;
