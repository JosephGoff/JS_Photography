"use client";
import Navbar from '@/components/Navbar/Navbar';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import appData from "../../../app-data.json";
import "../../globals.css"

const Designs = () => {
  const navHeight = 60
  const imageRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const tabletImageRef = useRef<HTMLImageElement>(null);
  const fixedViewRef = useRef<HTMLImageElement>(null);
  const fixedViewImageRef = useRef<HTMLImageElement>(null);

  const imageWidth = 2157
  const imageHeight = 2467

  const tabletWidth = 803
  const tabletHeight = 560

  const whratio = imageWidth / imageHeight
  const [whiteTabletWidth, setWhiteTabletWidth] = useState(200)
  const [percentThereValue, setPercentThereValue] = useState(0)
  const [page2, setPage2] = useState(false)
  const [page, setPage] = useState(0)
  const page2Ref = useRef(false)
  const [showPage2, setShowPage2] = useState(false)
  const lastScrollRef = useRef(0)
  const fixedRef = useRef(false)

  useEffect(() => {
    // When page loads
    window.scrollTo(0, 0);
    const screenHeight = window.innerHeight - 60;
    const image1 = imageRef.current
    const tablet1 = tabletRef.current
    const tabletImage1 = tabletImageRef.current

    // Set min width, min height, and max width of tablet
    if (tablet1) {
      const currentImageWidth = window.innerWidth / screenHeight > whratio ? window.innerWidth : (screenHeight * whratio)

      const finalTabletWidth = screenHeight * (tabletWidth / tabletHeight)
      const currentWidthOfTablet = (currentImageWidth * (tabletWidth / imageWidth))
      const tabletDifferenceToMakeUp = finalTabletWidth - (currentImageWidth * (tabletWidth / imageWidth))
      const newTabletWidth = currentWidthOfTablet + (percentThereValue * tabletDifferenceToMakeUp)

      tablet1.style.width = `${newTabletWidth}px`
      tablet1.style.height = `${newTabletWidth * (tabletHeight / tabletWidth)}px`
      setWhiteTabletWidth(newTabletWidth)

      tablet1.style.minWidth = `${currentWidthOfTablet}px`
      tablet1.style.minHeight = `${currentWidthOfTablet * (tabletHeight / tabletWidth)}px`
      tablet1.style.maxHeight = `${screenHeight}px`
    }

    // Set min width of image
    if (image1) {
      image1.style.minWidth = "100vw"
    }
  }, [])

  useEffect(() => {
    if (imageRef && imageRef.current) {
      imageRef.current.style.minWidth = "100vw"
    }
  }, [page2])

  useEffect(() => {
    const handleResize = () => {
      const tablet1 = tabletRef.current
      const screenHeight = window.innerHeight - 60;

      if (imageRef.current) {
        // Set the image width
        const finalHeight = ((imageHeight / tabletHeight) * screenHeight)
        const finalWidthPercent = ((whratio * finalHeight) / window.innerWidth) * 100
        const currentWidthPercent = window.innerWidth / screenHeight > whratio ? 100 : ((screenHeight * whratio) / window.innerWidth) * 100
        const differenceToMakeUp = finalWidthPercent - currentWidthPercent
        imageRef.current.style.width = `${currentWidthPercent + (percentThereValue * differenceToMakeUp)}vw`
      }

      // Set the tablet width and height
      if (tablet1) {
        const currentImageWidth = window.innerWidth / screenHeight > whratio ? window.innerWidth : (screenHeight * whratio)
        const finalTabletWidth = screenHeight * (tabletWidth / tabletHeight)
        const currentWidthOfTablet = (currentImageWidth * (tabletWidth / imageWidth))
        const tabletDifferenceToMakeUp = finalTabletWidth - currentWidthOfTablet
        const newTabletWidth = currentWidthOfTablet + (percentThereValue * tabletDifferenceToMakeUp)

        tablet1.style.width = `${newTabletWidth}px`
        tablet1.style.height = `${newTabletWidth * (tabletHeight / tabletWidth)}px`
        setWhiteTabletWidth(newTabletWidth)

        // Set new min width and height
        tablet1.style.minWidth = `${currentWidthOfTablet}px`
        tablet1.style.minHeight = `${currentWidthOfTablet * (tabletHeight / tabletWidth)}px`

      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [percentThereValue]);


  useEffect(() => {
    const screenHeight = window.innerHeight - 60;
    const image1 = imageRef.current
    const tablet1 = tabletRef.current

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 150

      if (scrollY < 10 && page2Ref && page2Ref.current) {
        if (fixedViewRef.current) {
          fixedViewRef.current.style.position = "fixed"
          fixedViewRef.current.style.marginTop = "0px"
        }
        setPage2(false)
        if (lastScrollRef) {
          window.scrollTo(0, lastScrollRef.current);
        }
        setTimeout(() => {
          setShowPage2(false)
          setPage(0)
          if (fixedViewRef.current) {
            fixedViewRef.current.style.position = "relative"
            fixedViewRef.current.style.marginTop = "10px"
          }
          page2Ref.current = false
        }, 800);
      }

      if (image1 && page2Ref && page2Ref.current === false) {
        let percentThere = scrollY / maxScroll
        setPercentThereValue(percentThere)

        // Set the image width
        const finalHeight = ((imageHeight / tabletHeight) * screenHeight)
        const finalWidthPercent = ((whratio * finalHeight) / window.innerWidth) * 100
        const currentWidthPercent = window.innerWidth / screenHeight > whratio ? 100 : ((screenHeight * whratio) / window.innerWidth) * 100
        const differenceToMakeUp = finalWidthPercent - currentWidthPercent
        image1.style.width = `${currentWidthPercent + (percentThere * differenceToMakeUp)}vw`

        // Set the tablet width and height
        if (tablet1) {
          let currentImageWidth = window.innerWidth / screenHeight > whratio ? window.innerWidth : (screenHeight * whratio)
          let finalTabletWidth = screenHeight * (tabletWidth / tabletHeight)
          let currentWidthOfTablet = (currentImageWidth * (tabletWidth / imageWidth))
          let tabletDifferenceToMakeUp = finalTabletWidth - (currentImageWidth * (tabletWidth / imageWidth))
          let newTabletWidth = currentWidthOfTablet + (percentThere * tabletDifferenceToMakeUp)
          tablet1.style.width = `${newTabletWidth}px`
          tablet1.style.height = `${newTabletWidth * (tabletHeight / tabletWidth)}px`
          setWhiteTabletWidth(newTabletWidth)

          if (percentThere > 1 && newTabletWidth > window.innerWidth) {
            let testValidScroll = scrollY
            while (percentThere > 1 && newTabletWidth > window.innerWidth) {
              testValidScroll -= 0.1
              percentThere = testValidScroll / maxScroll
              currentImageWidth = window.innerWidth / screenHeight > whratio ? window.innerWidth : (screenHeight * whratio)
              finalTabletWidth = screenHeight * (tabletWidth / tabletHeight)
              currentWidthOfTablet = (currentImageWidth * (tabletWidth / imageWidth))
              tabletDifferenceToMakeUp = finalTabletWidth - (currentImageWidth * (tabletWidth / imageWidth))
              newTabletWidth = currentWidthOfTablet + (percentThere * tabletDifferenceToMakeUp)
            }
            if (lastScrollRef) { lastScrollRef.current = testValidScroll }


            if (page2Ref && !page2Ref.current) {
              page2Ref.current = true
              setShowPage2(true)
              setTimeout(() => {
                window.scrollTo(0, 10);
                setPage2(true)
                setPage(1)
              }, 800);
            }
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const smoothScrollTo = (endY: any, duration: any) => {
    const startY = window.scrollY;
    const distanceY = endY - startY;
    let startTime: any = null;

    const step = (currentTime: any) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = progress * (2 - progress); // easeInOut

      window.scrollTo(0, startY + distanceY * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      } else {
        setShowPage2(true)

        setTimeout(() => {
          window.scrollTo(0, 10);
          setPage2(true)
        }, 1000);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const tabletImage1 = tabletImageRef.current;

    const handleClick = () => {
      console.log(1)
      if ((window.innerHeight - 60) / window.innerWidth >= tabletHeight / tabletWidth) {
        smoothScrollTo(151, 1000);
      } else {
        // y = 0.215x - 107.21
        // y = 0.257x - 157.727
        const newScroll = (0.257 * window.innerWidth) - 157.727
        smoothScrollTo(newScroll, 1000);
      }
    };

    if (tabletImage1) {
      tabletImage1.addEventListener('click', handleClick);
    }

    return () => {
      if (tabletImage1) {
        tabletImage1.removeEventListener('click', handleClick);
      }
    };
  }, [page2, showPage2]);

  return (
    <>
      <Navbar />
      {/* Background Ipad Image */}
      {!page2 && <div style={{ display: "flex", opacity: page === 0 ? 1 : 0, zIndex: 101 }} className="h-[calc(100vh-60px)] w-[100vw] flex items-center justify-center md:flex-row flex-col bg-background1">
        <div ref={imageRef} style={{ position: 'fixed', width: '100vw', height: 'calc(100vh - 60px)' }}>
          <Image
            src={appData.baseURL + 'designs/ipad.png'}
            alt="contact"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>}

      {/* BG Scrollable  */}
      {!page2 && <div style={{ opacity: page === 0 ? 1 : 0, width: "100vw", height: "700px" }}></div>}

      {/* Tablet */}
      {!page2 && <div style={{ display: "flex", opacity: page === 0 ? 1 : 0, width: "100vw", height: "calc(100vh - 60px)", position: "fixed", top: 60, justifyContent: "center", alignItems: "center" }}>
        <div
          ref={tabletRef}
          style={{
            zIndex: 102,
            width: `${whiteTabletWidth}px`,
            height: `${whiteTabletWidth * (tabletHeight / tabletWidth)}px`,
            backgroundColor: "white",
            borderRadius: `${whiteTabletWidth * 10 / tabletWidth}px`,
            transition: "border-radius 0.8s ease",
          }}>
          <div style={{
            width: "100%",
            height: "100%",
            padding: percentThereValue > 1 ? whiteTabletWidth < window.innerWidth ? "10px" : 0 : "10px",
            transition: "padding 0.55s ease",
          }}>
            <div style={{ width: "100%", height: "100%", position: "relative" }}>
              <Image
                className={percentThereValue > 0.9 ? "dim" : "hover-dim"}
                ref={tabletImageRef}
                style={{
                  cursor: page2 ? "auto" : "pointer",
                  borderRadius: percentThereValue > 1 ? whiteTabletWidth < window.innerWidth ? `${whiteTabletWidth * 8 / tabletWidth}px` : 0 : `${whiteTabletWidth * 8 / tabletWidth}px`,
                  transition: "border-radius 0.8s ease",
                }}
                src={appData.baseURL + 'designs/ipad_background.png'}
                alt="contact"
                layout="fill"
                objectFit="cover"
              />
              <div style={{
                position: "absolute",
                pointerEvents: "none",
                zIndex: 103,
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}>
                <Image
                  style={{ maxWidth: "90%" }}
                  src={appData.baseURL + 'designs/my_designs.png'}
                  alt="contact"
                  layout="responsive"
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>}

      {/* Page 2 */}
      {showPage2 && <>
        <div
          style={{ position: "absolute", top: 60, opacity: page === 0 ? 0 : 1, width: "100vw", backgroundColor: "white", height: "calc(100vh - 60px)", }}>
          <div
            ref={fixedViewRef}
            style={{
              width: "100vw",
              height: "calc(100vh - 60px)",
              marginTop: "10px",
              position: "relative",
              padding: "10px"
            }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              height: "100%",
              padding: "10px"
            }}>
              <Image
                ref={fixedViewImageRef}
                className="dim"
                style={{
                  // padding: page2 === false && page2Ref && page2Ref.current === false ? "10px" : 0,
                  // borderRadius: page2 === false && page2Ref && page2Ref.current === false ? `${whiteTabletWidth * 14 / tabletWidth}px` : 0,
                  transition: "padding 0.8s ease, border 0.8s ease",
                }}
                src={appData.baseURL + 'designs/ipad_background.png'}
                alt="designs"
                layout="fill"
                objectFit="cover"
                objectPosition='center'
              />
              <div style={{ zIndex: 104, height: "100%", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div style={{ pointerEvents: "none", maxWidth: "90vw", position: "absolute", zIndex: 103, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <Image
                    style={{ maxWidth: "90vw" }}
                    src={appData.baseURL + 'designs/my_designs.png'}
                    alt="contact"
                    layout="responsive"
                    objectFit="cover"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "100vw", height: "2000px" }}></div>
      </>
      }


    </>
  );
};

export default Designs;
