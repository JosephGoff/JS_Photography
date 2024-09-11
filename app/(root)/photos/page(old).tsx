"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import appData from "../../../app-data.json";

const Photos = () => {
  return <></>
  
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100vw",
          height: "calc(100vh - 60px)",
          display: "flex",
          overflow: "hidden",
          zIndex: 101,
          position: "relative",
          backgroundColor: "white",
          // backgroundColor: "#E4E2DD",
        }}
      >
        {/* Left Image LG */}
        <div
          className="hidden lg:block"
          style={{
            height: "100%",
            width: "50vw",
            overflow: "hidden",
          }}
        >
          <Image
            src={appData.S3_base_URL + "photos/photos-bg.png"}
            alt="photos"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            width={1000}
            height={1000}
          />
        </div>

        {/* Right Image LG */}
        <div
          className="hidden lg:block"
          style={{
            height: "100%",
            width: "50vw",
            marginLeft: "50vw",
            overflow: "hidden",
            position: "absolute",
            padding: "33px"
          }}
        >
          <Image
            src={appData.S3_base_URL + "photos/photos-spider.png"}
            alt="photos"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
            width={1000}
            height={1000}
          />
        </div>

        {/* My Photos  Header*/}
        <div
          style={{
            width: "100vw",
            height: "100%",
            display: "flex",
            alignItems: "center",
            position: "absolute",
          }}
        >
          <div
            className="lg:ml-[57vw] ml-[10vw] w-[80vw] lg:w-[36vw]"
            style={{
              aspectRatio: 1522 / 1032,
              // backgroundColor: "#E4E2DD",
              backgroundColor: "white",
              overflow: "hidden",
              zIndex: 103,
            }}
          >
            <Image
            src={appData.S3_base_URL + "photos/photos-right-header.png"}
            alt="photos header"
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              padding: "22px",
            }}
            width={1000}
            height={1000}
          />
          </div>
        </div>

        {/* Small screen */}
        <Image
          className="block lg:hidden"
          src={appData.S3_base_URL + "photos/photos-bg.png"}
          alt="photos"
          style={{
            minHeight: "calc(100vh - 60px) ",
            maxHeight: "calc(100vh - 60px) ",
            zIndex: 101,
          }}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </>
  );
};

export default Photos;
