import React from "react";

const Footer = () => {
  return (
    <div
      className="pl-[50px] md:pl-[6.5vw]"
      style={{
        width: "100vw",
        borderTop: "1px solid black",
        paddingBottom: "30px",
      }}
    >
      <div className="pt-[calc(30px+(768px*.03))] pb-[calc(20px+(768px*.02))] md:pt-[calc(30px+3vw)] md:pb-[calc(20px+2vw)]
        w-[calc(650px*0.55)] sm:w-[calc(768px*0.55)] md:w-[55vw] lg:w-[calc(1024px*0.55)] 
        text-[calc(630px*.02)] sm:text-[calc(768px*.02)] md:text-[2vw] lg:text-[calc(1024px*.02)]">
        <p>
          <strong>In the Woods.</strong> Some seek their good or happiness in
          power; others in science, and others in the pleasures of the flesh.
          But those who come truly close to the good understand that it cannot
          consist in what can only be mastered by a few.
        </p>
      </div>

      <div
        className="flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between
        w-[calc(650px*0.55)] sm:w-[calc(768px*0.55)] md:w-[55vw] lg:w-[calc(1024px*0.55)] 
        text-[calc(630px*.02)] sm:text-[calc(768px*.02)] md:text-[2vw] lg:text-[calc(1024px*.02)]"
      >
        <div className="details-block">
          <p className="location">get in touch</p>
          <a href="mailto:jessshul27@gmail.com"

           className="dim location-value">
            jessshulman27@gmail.com
          </a>
        </div>

        <div className="details-block">
          <p className="location">social media</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "22px" }}>
            <a href="/" className="dim location-value">
              Facebook
            </a>
            <a href="/" className="dim location-value">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <p
        className="pt-[calc(30px+(768px*.03))] md:pt-[calc(30px+3vw)] text-[calc(630px*.015)] sm:text-[calc(768px*.013)] md:text-[1.3vw] lg:text-[calc(1024px*.013)]"
        style={{
          fontWeight: 100,
          color: "#444",
        }}
      >
        ©2024. Jessisca Shulman the goat
      </p>
    </div>
  );
};

export default Footer;
