"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import React, {
  useEffect,
  useRef,
  useState,
  memo,
  forwardRef,
  LegacyRef,
} from "react";
import appData from "../../../app-data.json";
import "./contact.css";

const SVGAnimation = memo(
  forwardRef((props, ref) => {
    const htmlContent = `
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="hi_there" height="100%" stroke-miterlimit="10" style="fill-rule:nonzero;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;" version="1.1" viewBox="0 0 5000 5000" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:vectornator="http://vectornator.io" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs/>
<g id="Layer-1" vectornator:layerName="Layer 1">
<path id="svg_hi" d="M245.343 2480.88C245.343 2480.88 414.584 2240.8 481.391 2083.67C548.199 1926.54 527.84 1851.55 512.792 1840.99C497.743 1830.42 414.101 1806.2 296.633 2194.79C231.114 2411.54 234.237 2703.69 234.237 2703.69C234.237 2703.69 328.088 2349.14 473.212 2348.19C618.337 2347.25 412.404 2703.93 599.315 2718.15C658.82 2722.68 743.713 2688.65 818.725 2583.34C891.648 2480.96 913.379 2315.81 913.379 2315.81C913.379 2315.81 871.372 2480.6 888.465 2594.85C900.726 2676.8 956.039 2723.31 1020.41 2708.19C1174.52 2671.99 1266.39 2493.91 1266.39 2493.91" fill="none" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="45" vectornator:layerName="Line 1"/>
<path id="svg_there" d="M1764.67 2483.79C1764.67 2483.79 1949.34 2233.27 2012.59 2071.63C2075.85 1909.99 2061.17 1824.62 2012.07 1833.3C1962.97 1841.99 1858.66 2045.56 1801.86 2284.7C1745.07 2523.84 1738.91 2714.24 1879.4 2710.04C2048.88 2704.98 2233.56 2355.09 2322.21 2198.45C2432.38 2003.78 2453.67 1853.29 2403.73 1836.13C2353.79 1818.98 2267.93 1951.27 2192.83 2220.81C2117.72 2490.34 2134.57 2705.18 2134.57 2705.18C2134.57 2705.18 2231.46 2335.88 2377.5 2349.37C2523.53 2362.86 2312.33 2690.29 2487.3 2715.56C2662.28 2740.83 2766.96 2497.14 2789.1 2446.95C2798.52 2425.59 2850.47 2327.55 2952 2332.44C3033.91 2336.38 3097.04 2432.76 2983.67 2494.31C2918.26 2529.82 2863.22 2490.65 2863.22 2490.65C2863.22 2490.65 2916.16 2525.7 2981.1 2499.71C3028.79 2480.62 3105.1 2368.17 2959.13 2335.37C2899.06 2321.87 2815.86 2397.27 2786.95 2456.17C2766.6 2497.63 2698.4 2716.49 2999.7 2710.27C3132.65 2707.52 3317.23 2539.32 3319.98 2342.66C3320.74 2288.84 3349.04 2327.46 3406.33 2337.67C3463.62 2347.87 3494.92 2326.89 3475.26 2362.49C3453.17 2402.49 3391.29 2470.32 3378.85 2529.65C3353.84 2648.92 3424.85 2727.98 3511.19 2703.48C3597.54 2678.98 3693.55 2570.41 3748.03 2431.71C3765.36 2387.59 3829.87 2316.86 3906.5 2323.5C3983.13 2330.14 4047.27 2410.14 3949.33 2480.36C3882.05 2528.59 3820.78 2482.4 3820.78 2482.4C3820.78 2482.4 3886.09 2530.02 3949.96 2477.32C4084.82 2366.05 3906.66 2322.28 3906.66 2322.28C3818.81 2323.66 3767.99 2390.04 3753.17 2422.12C3715.58 2503.47 3680.02 2661.41 3881.73 2704.95C4095.37 2751.06 4248.9 2495.81 4248.9 2495.81" fill="none" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="45" vectornator:layerName="Line 3"/>

<path id="svg_i" d="M932.008 2195.15C932.008 2195.15 938.94 2179.88 935.365 2176.77C933.457 2175.11 914.548 2184.19 913.869 2195.21C913.484 2201.46 929.104 2198.49 929.104 2198.49" fill="none" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="45" vectornator:layerName="Line 2"/>
<path id="svg_ex" d="M4557.38 1891.6L4381.46 2525.95" fill="none" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="45" vectornator:layerName="Line 4"/>
<path id="svg_ex_dot" d="M4337.12 2676.59C4354.47 2690.06 4369.2 2677.73 4363.56 2659.29C4357.92 2640.85 4338.07 2672.97 4338.07 2672.97" fill="none" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="45" vectornator:layerName="Line 5"/>
<path id="svg_cross" d="M1540.11 2077.6C1540.11 2077.6 1727.83 2125.34 1895.89 2107.48C2063.95 2089.62 2253.99 2026.8 2253.99 2026.8" fill="none" opacity="1" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="45" vectornator:layerName="Line 6"/>

</g>
</svg>
`;

    return (
      <div
        ref={ref as LegacyRef<HTMLDivElement>}
        style={{
          width: "100%",
          transition: "none",
          minWidth: "530px",
          minHeight: "530px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: 0,
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      ></div>
    );
  })
);

const Contact = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const hiThereRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardContainerRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const inputNameRef = useRef<HTMLDivElement>(null);
  const inputEmailRef = useRef<HTMLDivElement>(null);
  const inputMessageRef = useRef<HTMLDivElement>(null);
  const emailButtonRef = useRef<HTMLDivElement>(null);
  const locationButtonRef = useRef<HTMLDivElement>(null);
  const sendButtonRef = useRef<HTMLDivElement>(null);

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  useEffect(() => {
    if (hiThereRef.current) {
      if (window.innerWidth < 1024) {
        hiThereRef.current.style.marginTop = "-36vh"
      }
    }
    setTimeout(() => {
      if (bgRef.current && cardContainerRef.current && cardRef.current && hiThereRef.current) {
        bgRef.current.style.opacity = "1";
        hiThereRef.current.style.transition = "1.5s ease"
        if (window.innerWidth < 1024) {
          cardContainerRef.current.style.width = "100vw";
          cardContainerRef.current.style.marginLeft = "0";
          cardRef.current.style.transition = "1.5s ease";
          cardRef.current.style.marginTop = "100px";
          cardRef.current.style.zIndex = "101";
          cardRef.current.style.width = "80vw";
        }
        setTimeout(() => {
          if (bgRef.current && hiThereRef.current) {
            bgRef.current.style.margin = "0";
            bgRef.current.style.width = "100vw";
            bgRef.current.style.height = "100%";
            setTimeout(() => {
              if (
                bgRef.current &&
                hiThereRef.current &&
                containerRef.current &&
                cardRef.current &&
                gradientRef.current
              ) {
                containerRef.current.style.backgroundColor = "#E3DACF";
                cardRef.current.style.opacity = "1";
                if (window.innerWidth > 1024) {
                  gradientRef.current.style.marginLeft = "50vw";
                  bgRef.current.style.width = "50vw";
                  hiThereRef.current.style.width = "50vw";
                } else {
                  hiThereRef.current.style.marginTop = "calc(-56vw - 70px)"
                  cardRef.current.style.marginTop = "40px";
                }
              }
              setTimeout(() => {
                if (
                  bgRef.current &&
                  hiThereRef.current &&
                  gradientRef.current &&
                  cardRef.current &&
                  inputNameRef.current &&
                  inputEmailRef.current &&
                  inputMessageRef.current &&
                  emailButtonRef.current &&
                  locationButtonRef.current &&
                  sendButtonRef.current
                ) {
                  inputNameRef.current.style.opacity = "1";
                  inputEmailRef.current.style.opacity = "1";
                  inputMessageRef.current.style.opacity = "1";
                  bgRef.current.style.transition = "none";
                  hiThereRef.current.style.transition = "none";
                  gradientRef.current.style.transition = "none";
                  cardRef.current.style.transition = "none";
                  emailButtonRef.current.style.zIndex = "104";
                  locationButtonRef.current.style.zIndex = "104";
                  sendButtonRef.current.style.zIndex = "104";
                }
              }, 1500);
            }, 1500);
          }
        }, 2500);
      }
    }, 150);
  }, [isImageLoaded]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        if (
          bgRef.current &&
          bgRef.current.style.width === "100vw" &&
          hiThereRef.current &&
          cardContainerRef.current &&
          cardRef.current
        ) {
          bgRef.current.style.width = "50vw";
          hiThereRef.current.style.width = "50vw";
          hiThereRef.current.style.marginTop = "0"
          cardContainerRef.current.style.width = "50vw";
          cardContainerRef.current.style.marginLeft = "50vw";
          cardRef.current.style.width = "calc(50vw - 60px)";
        }
      } else {
        if (
          bgRef.current &&
          bgRef.current.style.width === "50vw" &&
          hiThereRef.current &&
          cardContainerRef.current &&
          cardRef.current
        ) {
          bgRef.current.style.width = "100vw";
          hiThereRef.current.style.width = "100vw";
          hiThereRef.current.style.marginTop = "calc(-56vw - 70px)"
          cardContainerRef.current.style.width = "100vw";
          cardContainerRef.current.style.marginLeft = "0";
          cardRef.current.style.marginTop = "40px";
          cardRef.current.style.zIndex = "101";
          cardRef.current.style.width = "80vw";
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSendNewEmailClick = () => {
    const sendEmail = "jessshul27@gmail.com";
    window.location.href = `mailto:${sendEmail}`;
  };

  const handleLocationClick = () => {
    window.open("https://www.google.com/maps/place/East+Hampton,+NY", "_blank");
  };

  return (
    <>
      <Navbar />
      <div
        className="flex lg:block"
        style={{
          zIndex: 101,
          position: "absolute",
          width: "100vw",
          height: "calc(100vh - 60px)",
          top: "60px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SVGAnimation ref={hiThereRef} />
      </div>

      <div
        ref={containerRef}
        style={{
          backgroundColor: "#F5F1EC",
          width: "100vw",
          height: "calc(100vh - 60px)",
          top: 60,
          position: "absolute",
        }}
      >
        <div
          ref={cardContainerRef}
          style={{
            width: "50vw",
            height: "100%",
            marginLeft: "50vw",
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "none",
          }}
        >
          <div
            ref={cardRef}
            style={{
              width: "calc(50vw - 60px)",
              aspectRatio: "1.4 / 1",
              backgroundColor: "#F8F6F0",
              opacity: 0,
              transition: "none",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              src={appData.S3_base_URL + "contact/contact-card.png"}
              alt="contact card"
              layout="responsive"
              objectFit="cover"
              width={300}
              height={300}
            />

            {/* Email Button */}
            <div
              ref={emailButtonRef}
              onClick={handleSendNewEmailClick}
              className="hover-dim2"
              style={{
                width: "31%",
                height: "8%",
                position: "absolute",
                bottom: "13.6%",
                left: "6.6%",
                cursor: "pointer",
                zIndex: 100,
              }}
            >
              <Image
                src={appData.S3_base_URL + "contact/contact-card-email.png"}
                alt="email"
                layout="responsive"
                objectFit="cover"
                width={300}
                height={300}
              />
            </div>

            {/* Location Button */}
            <div
              onClick={handleLocationClick}
              ref={locationButtonRef}
              className="hover-dim2"
              style={{
                width: "31%",
                height: "8%",
                position: "absolute",
                bottom: "13.6%",
                left: "41.6%",
                cursor: "pointer",
                zIndex: 100,
              }}
            >
              <Image
                src={appData.S3_base_URL + "contact/contact-card-location.png"}
                alt="email"
                layout="responsive"
                objectFit="cover"
                width={300}
                height={300}
              />
            </div>

            {/* Send Button */}
            <div
              ref={sendButtonRef}
              className="hover-dim2"
              style={{
                width: "18%",
                height: "8%",
                position: "absolute",
                bottom: "13.6%",
                right: "6%",
                cursor: "pointer",
                zIndex: 100,
              }}
            >
              <Image
                src={appData.S3_base_URL + "contact/contact-card-send.png"}
                alt="contact card"
                layout="responsive"
                objectFit="cover"
                width={300}
                height={300}
              />
            </div>

            {/* Name Input */}
            <div
              ref={inputNameRef}
              style={{
                width: "38%",
                height: "5%",
                position: "absolute",
                top: "31.7%",
                right: "8%",
                zIndex: 104,
                opacity: 0,
              }}
            >
              <input
                className="input_fonts"
                type="text"
                value={name}
                spellCheck="false"
                onChange={handleNameChange}
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  border: "none",
                  outline: "none",
                  color: "black",
                  fontSize: "calc(10px + 0.3vw)",
                  whiteSpace: "nowrap",
                }}
                maxLength={80}
              />
            </div>

            {/* Email Input */}
            <div
              className="input_fonts"
              ref={inputEmailRef}
              style={{
                zIndex: 104,
                width: "38%",
                height: "5%",
                position: "absolute",
                top: "45.6%",
                right: "8%",
                opacity: 0,
              }}
            >
              <input
                type="text"
                value={email}
                spellCheck="false"
                onChange={handleEmailChange}
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  border: "none",
                  outline: "none",
                  color: "black",
                  fontSize: "0.91em",
                  whiteSpace: "nowrap",
                  backgroundColor: "transparent",
                }}
                maxLength={80}
              />
            </div>

            {/* Message Input */}
            <div
              ref={inputMessageRef}
              style={{
                zIndex: 104,
                width: "37.4%",
                height: "10.6%",
                position: "absolute",
                top: "60.8%",
                right: "8.6%",
                opacity: 0,
              }}
            >
              <textarea
                className="input_fonts"
                value={message}
                onChange={handleMessageChange}
                style={{
                  backgroundColor: "transparent",
                  width: "100%",
                  height: "100%",
                  border: "none",
                  outline: "none",
                  color: "black",
                  fontSize: "0.91em",
                  marginTop: "-2px",
                  resize: "none",
                }}
              />
            </div>
          </div>
        </div>

        <div
          ref={gradientRef}
          style={{
            width: "30px",
            height: "100%",
            marginLeft: "100vw",
            position: "absolute",
            transition: "1.5s ease",
          }}
        >
          <Image
            src={appData.S3_base_URL + "contact/contact-gradient.png"}
            alt="gradient"
            objectFit="cover"
            objectPosition="left"
            layout="fill"
          />
        </div>

        <div
          ref={bgRef}
          style={{
            opacity: 0,
            transition: "1.5s ease",
            zIndex: 100,
            width: "calc(100vw - 60px)",
            height: "calc(100% - 60px)",
            display: "flex",
            overflow: "hidden",
            position: "relative",
            margin: "30px",
          }}
        >
          <Image
            className="hidden lg:block"
            src={appData.S3_base_URL + "contact/contact-bg2.png"}
            alt="header"
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              minHeight: "calc(100% - 60px)",
            }}
            objectFit="cover"
            objectPosition="center"
            layout="fill"
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
          <Image
            className="block lg:hidden"
            src={appData.S3_base_URL + "contact/contact-bg2.png"}
            alt="header"
            style={{
              minHeight: "calc(100vh - 60px) ",
              maxHeight: "calc(100vh - 60px) ",
            }}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
