import React from "react";
import SmoothScroll from "@/effects/SmoothScroll/SmoothScroll";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";

const page = () => {
  return (
    <>
      <SmoothScroll>
        <Gallery />
        <Footer />
      </SmoothScroll>
    </>
  );
};

export default page;
