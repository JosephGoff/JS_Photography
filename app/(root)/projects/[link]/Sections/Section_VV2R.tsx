import Image from "next/image";
import React from "react";

interface Section_VV2RProps {
  image1: string;
  image2: string;
}

const Section_VV2R: React.FC<Section_VV2RProps> = ({ image1, image2 }) => {
  return (
    <div className="flex flex-row justify-end gap-[28px] project-slide-up-text md:w-[calc(100%-6vw)] w-[calc(100%-90px)] md:ml-[6vw] ml-[45px] mb-[50px] h-[calc((100vw-90px)*0.55)] md:h-[calc((95vw-220px-6vw)*0.55)]">
      <div
        style={{
          height: "90%",
          backgroundColor: "blue",
          aspectRatio: "1/1.27",
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
      <div
        style={{
          height: "100%",
          backgroundColor: "blue",
          aspectRatio: "1/1.27",
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
    </div>
  );
};

export default Section_VV2R;
