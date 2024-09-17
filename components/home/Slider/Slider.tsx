"use client";
import React, { useCallback, useEffect, useState } from "react";
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

const Slider: React.FC = () => {
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

  return (
    <section className="embla md:hidden mb-[125px]">
      <div
        className="leading-[1.18] pb-[28px] slider-header-text flex flex-col sm:flex-row gap-0 sm:gap-0 justify-between
          w-[calc(768px*0.45)] sm:w-[calc(768px*0.45)] md:w-[45vw] lg:w-[calc(1024px*0.45)] 
          text-[calc(768px*.03)] sm:text-[calc(768px*.03)] md:text-[3vw] lg:text-[calc(1024px*.03)]"
      >
        Auckland-based residential architectural practice by Evelyn McNamara.
      </div>

      <div
        className="underline absolute underline-offset-[4px] slider-header-text 
          w-[calc(768px*0.45)] sm:w-[calc(768px*0.45)] md:w-[45vw] lg:w-[calc(1024px*0.45)] 
          left-[calc(768px*0.30)] sm:left-[calc(768px*0.30)] md:left-[30vw] lg:left-[calc(1024px*0.30)] 
          top-[calc(768px*0.078)] sm:top-[calc(768px*0.078)] md:top-[7.8vw] lg:top-[calc(1024px*0.078)] 
          text-[calc(768px*.018)] sm:text-[calc(768px*.018)] md:text-[1.8vw] lg:text-[calc(1024px*.018)]"
      >
        <Link href={"/projects"} className="dim">
          All projects
        </Link>
      </div>

      <div className="md:hidden" style={{zIndex: 102, right: 0, width: "1.8vw", height: "119vw", position: "absolute", backgroundColor: "white" }}></div> 
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {appData.projects.map((item, index) => (
            <Link
              href={`/projects/${item.link}`}
              className={`${
                currentSlide === appData.projects.length - 1 &&
                index === appData.projects.length - 1
                  ? "last_slide"
                  : ""
              } embla__slide`}
              key={index}
            >
              <div className="embla__slide__number">
                <Image
                  src={item.imageUrl}
                  alt="section1"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <div className="dim flex flex-row w-[100%] justify-between pt-[9px] pl-[1px] pr-[1px] slider-item-text">
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
        className="embla__controls
        right-[33px]
        mt-[calc(650px*.08)] sm:mt-[calc(768px*.08)] md:mt-[8vw] lg:mt-[calc(1024px*.08)]"
      >
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Slider;
