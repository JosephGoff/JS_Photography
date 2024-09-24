import Image from "next/image";
import React from "react";

interface Section_HMProps {
  image1: string;
}

const Section_HM: React.FC<Section_HMProps> = ({ image1 }) => {
  return (
    <div className="project-slide-up-text w-[calc(100%-90px)] md:w-[calc(100%-12vw)] lg:w-[calc(100%-6vw)] md:ml-[6vw] ml-[45px] h-[calc((100vw-90px)*0.55)] md:h-[calc((100vw-12vw)*0.55)] lg:h-[calc((95vw-220px-12vw)*0.55)]">
      <Image
        src={image1}
        alt="project image"
        style={{
          objectFit: "cover",
          width: "90%",
          height: "100%",
          float: "right"
        }}
        width={1000}
        height={1000}
        priority
      />
    </div>
  );
};

export default Section_HM;
