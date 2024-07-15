"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React from "react";
import appData from "../../../app-data.json";

const Services = () => {
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
          backgroundColor: "#EEE9E3",
          minHeight: "120vh"
          // backgroundColor: "#D7CDBE",
        }}
      >
        {/* Left Image LG */}
        <div
          className="hidden lg:block"
          style={{
            height: "100%",
            width: "40vw",
            overflow: "hidden",
          }}
        >
         <Image
            className="hidden lg:block "
            style={{maxHeight: "calc(100vh - 60px)", maxWidth: "calc((100vh - 60px) * (602 / 917))"}}
            src={appData.S3_base_URL + "services/services-left.png"}
            alt="photos"
            layout="responsive"
            width={1000}
            height={1000}
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        {/* Right Image LG */}
        <div
          className="hidden lg:block"
          style={{
            height: "100%",
            width: "60vw",
            marginLeft: "40vw",
            overflow: "hidden",
            position: "absolute",
          }}
        >
          <Image
            className="hidden lg:block "
            src={appData.S3_base_URL + "services/services-right.png"}
            style={{maxHeight: "calc(100vh - 60px)", maxWidth: "calc((100vh - 60px) * (886 / 853))" }}
            alt="photos"
            layout="responsive"
            width={1000}
            height={1000}
            objectFit="cover"
            objectPosition="center"
          />
        </div>

        {/* Small screen */}
        <Image
          className="block lg:hidden"
          style={{marginTop: "20px"}}
          src={appData.S3_base_URL + "services/services-half.png"}
          alt="photos"
          layout="responsive"
          width={1000}
          height={1000}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
    </>
  );
};

export default Services;
