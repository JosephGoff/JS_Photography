import Navbar from "@/components/Navbar/Navbar";
import ContactHero from "@/components/contact/ContactHero";
import React, { useEffect } from "react";
import "./contact.css";

const Contact = () => {
  const htmlContent2 = `
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="h" height="100%" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 5000 5000" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:vectornator="http://vectornator.io" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs/>
<g id="Layer-1" vectornator:layerName="Layer 1">
<path id="h" d="M393.067 3157.01C393.067 3157.01 1098.73 2152.33 1380.69 1489.17C1662.65 826 1576.73 509.524 1513.21 464.924C1449.7 420.324 1096.69 318.117 600.909 1958.18C324.381 2872.95 337.563 4105.99 337.563 4105.99C337.563 4105.99 733.665 2609.61 1346.17 2605.61C1958.67 2601.62 1089.52 4107.01 1878.39 4167.03C2129.54 4186.13 2487.83 4042.53 2804.42 3598.06C3112.19 3165.97 3203.91 2468.95 3203.91 2468.95C3203.91 2468.95 3026.62 3164.42 3098.76 3646.63C3150.51 3992.51 3383.96 4188.8 3655.64 4124.99C4306.08 3972.22 4693.81 3220.62 4693.81 3220.62" fill="none" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="150" vectornator:layerName="Line 1"/>
</g>
</svg>
  `

  return (
    <div className="contacts_page">
      <div dangerouslySetInnerHTML={{ __html: htmlContent2 }} />
    </div>
  );

  // return (
  //   <>
  //     <Navbar />
  //     <div
  //       style={{ height: "calc(100vh - 60px)" }}
  //       className="w-[100vw] flex items-center justify-center md:flex-row flex-col bg-background1"
  //     >
  //       {/* <div className="mt-[100px] md:w-[50vw] w-[80vw]" style={{height: "calc(100% - 100px)", backgroundColor: "green"}}></div>
          
  //       <div className="mt-[100px] md:w-[50vw] w-[80vw]" style={{height: "calc(100% - 100px)", backgroundColor: "pink"}}></div> */}
  //       {/* <ContactHero /> */}
  //       {/* <Image src={hithere} alt="Hi There" width={3000} height={300} /> */}
  //     </div>
  //   </>
  // );
};

export default Contact;
