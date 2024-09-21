"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import appData from "../../../app-data.json";
import Link from "next/link";
import "./embla.css";

const Slider2: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, []);
  const [currentSlide, setCurrentSlide] = useState(0);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentSlide(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(); // Initial selection
    emblaApi.on("select", onSelect); // Update on select

    // Cleanup function
    return () => {
      if (emblaApi) {
        emblaApi.off("select", onSelect); // Cleanup
      }
    };
  }, [emblaApi, onSelect]);

  const SliderRef = useRef<HTMLDivElement>(null)
  const SliderControlsRef = useRef<HTMLDivElement>(null)
  const SliderTitleRef = useRef<HTMLDivElement>(null)
  const SliderTitleRef2 = useRef<HTMLDivElement>(null)
  let itemsLoaded = false;

  useEffect(() => {
    const handleSlideInEffect = () => {
      if (!itemsLoaded && SliderTitleRef.current && SliderTitleRef2.current && SliderRef.current && SliderControlsRef.current) {
        if (window.scrollY > 195) {
          SliderTitleRef.current.style.opacity = "1";
          SliderTitleRef2.current.style.opacity = "1";
          SliderTitleRef.current.style.paddingTop = "0";
          SliderTitleRef2.current.style.marginTop = "0";
        }
        if (window.scrollY > 285) {
          SliderRef.current.style.opacity = "1";
          SliderControlsRef.current.style.opacity = "1";
          SliderRef.current.style.marginTop = "0";
          SliderControlsRef.current.style.marginTop = "0";
          itemsLoaded=true
        }
      }
    }

    window.addEventListener('scroll', handleSlideInEffect);
    window.addEventListener('resize', handleSlideInEffect);
    return () => {
      window.removeEventListener('scroll', handleSlideInEffect);
      window.removeEventListener('resize', handleSlideInEffect);
    };
  }, []);
  return (
    <section className="embla-md md:block hidden mb-[125px]">
      <div ref={SliderTitleRef} style={{opacity: 0, paddingTop: "8px", transition: "opacity 1.5s ease, padding-top 1.5s ease"}}
        className="leading-[1.18] mb-[33px] slider-header-text flex flex-col sm:flex-row gap-0 sm:gap-0 justify-between
        w-[calc(768px*0.45)] sm:w-[calc(768px*0.45)] md:w-[45vw] lg:w-[calc(1024px*0.45)] 
        text-[calc(768px*.0308)] sm:text-[calc(768px*.0308)] md:text-[3.08vw] lg:text-[calc(1024px*.0308)]"
      >
        Auckland-based residential architectural practice by Evelyn McNamara.
      </div>

      <div ref={SliderTitleRef2} style={{opacity: 0, marginTop: "8px", transition: "opacity 1.5s ease, margin-top 1.5s ease"}}
        className="underline absolute underline-offset-[4px] slider-header-text 
          w-[calc(768px*0.45)] sm:w-[calc(768px*0.45)] md:w-[45vw] lg:w-[calc(1024px*0.45)] 
          left-[calc(768px*0.30)] sm:left-[calc(768px*0.30)] md:left-[30vw] lg:left-[calc(1024px*0.30)] 
          top-[calc(768px*0.078)] sm:top-[calc(768px*0.078)] md:top-[7.8vw] lg:top-[calc(1024px*0.078)] 
          text-[calc(768px*.018)] sm:text-[calc(768px*.018)] md:text-[1.8vw] lg:text-[calc(1024px*.018)]"
      >
        <Link href={"/projects"} className="dim">All projects</Link>
      </div>

      <div className="md:block hidden" style={{zIndex: 102, right: 0, width: "1vw", height: "38vw", position: "absolute", backgroundColor: "white" }}></div>
      <div className="embla__viewport-md" ref={emblaRef}>
        <div className="embla__container-md" ref={SliderRef}  style={{opacity: 0, marginTop: "8px", transition: "opacity 1.5s ease, margin-top 1.5s ease"}}>
          {appData.projects.map((item, index) => (
            <Link
              href={`/projects/${item.link}`}
              className="embla__slide-md"
              key={index}
            >
              <div className="embla__slide__number-md">
                <Image
                  src={item.imageUrl}
                  alt="section1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="dim flex flex-row w-[100%] justify-between pt-[9px] pl-[1px] pr-[1px] slider-item-text-md">
                <p className="decoration-black-100 underline underline-offset-[4px]">
                  {item.name}
                </p>
                <p>{item.year}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div
        ref={SliderControlsRef} 
        style={{opacity: 0, marginTop: "8px", transition: "opacity 1.5s ease, margin-top 1.5s ease"}}
        className="embla__controls
        right-[4.9vw]
        pt-[calc(768px*.073)] sm:pt-[calc(768px*.073)] md:pt-[7.3vw] lg:pt-[calc(1024px*.073)]"
      >
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Slider2;
