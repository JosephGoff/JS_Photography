import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./section1.css";

const Section1 = () => {
  return (
    <div
      className="flex justify-center items-center mb-[100px]"
      style={{ width: "100vw" }}
    >
      <div
        className="md:min-w-[300px] max-w-[70%] lg:max-w-[720px] flex md:flex-row flex-col"
        style={{
          width: "100%",
        }}
      >
        <div className="w-[100%] md:w-[48%] md:mb-0 mb-[28px] mr-0 md:mr-[45px]">
          <div
            className="montserrat-text"
            style={{ fontSize: 23, lineHeight: 1.2, fontWeight: 400 }}
          >
            TALENTED <br className="hidden md:block" />
            PHOTOGRAPHERS <br />
            MAKE YOU <span style={{ color: "rgb(255, 208, 36)" }}>LOOK</span>
            <br />
            BUT GREAT <br className="hidden md:block" />
            PHOTOGRAPHERS <br />
            MAKE YOU <span style={{ color: "rgb(255, 208, 36)" }}>FEEL</span>
          </div>
          <br />
          <div
            className="raleway-text"
            style={{
              fontSize: 13,
              lineHeight: 1.35,
              color: "black",
              fontWeight: 300,
            }}
          >
            I strongly believe that your wedding images should evoke the
            incredible feelings that took place — not showcase current trends in
            wedding photography. As they say, timelessness never goes out of
            style.
            <br />
            <br />
            My images are best described as organic and evocative because I
            firmly believe great photography is about depth of feeling.
            <br />
            <br />
            Photography is the simplest thing in the world, but it is incredibly
            complicated to make it really work. Every frame I take is created
            with heart and intention.
            <br />
            <br />
            The eyes make the heart feel.
            <br />
            <br />
            <Link href="/about">
              <p className="hover-yellow">— Get to know me</p>
            </Link>
          </div>
        </div>
        <Link
          href="/about"
          className="section1-image w-[100%] md:w-[52%]"
          style={{ height: "100%", aspectRatio: "1 / 1.4" }}
        >
          <Image
            style={{
              objectFit: "cover",
            }}
            src={"/assets/flower2.png"}
            alt="Section 1"
            width={1000}
            height={1000}
            priority={true}
          />
        </Link>
      </div>
    </div>
  );
};

export default Section1;
