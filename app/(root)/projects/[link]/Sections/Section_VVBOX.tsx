import Image from "next/image";
import React from "react";

interface Section_VVBOXProps {
  image1: string;
  image2: string;
}

const Section_VVBOX: React.FC<Section_VVBOXProps> = ({ image1, image2 }) => {
  return (
    <div className="flex flex-row gap-[28px] project-slide-up-text w-[calc(100%-90px)] md:w-[calc(100%-12vw)] lg:w-[calc(100%-6vw)] md:ml-[6vw] ml-[45px] h-[calc((100vw-90px)*0.55)] md:h-[calc((100vw-12vw)*0.55)] lg:h-[calc((95vw-220px-12vw)*0.55)]">
      <div
        style={{
          height: "90%",
          backgroundColor: "blue",
        }}
      >
        <Image
          src={image2}
          alt="project image"
          style={{
            objectFit: "cover",
            height: "100%",
          }}
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div
        style={{
          height: "100%",
          backgroundColor: "blue",
          aspectRatio: "1/1",
        }}
      >
        <Image
          src={image1}
          alt="project image"
          style={{
            objectFit: "cover",
            height: "100%",
          }}
          width={1000}
          height={1000}
          priority
        />
      </div>
    </div>
  );
};

export default Section_VVBOX;
