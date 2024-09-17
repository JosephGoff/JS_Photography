"use client"
import Image from "next/image";
import React, { useState } from 'react'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { EmblaOptionsType } from 'embla-carousel'
import './css/embla.css'
import EmblaSlider from "./EmblaSlider";

const Slider = () => {
  const [images, setImages] = useState(["/assets/img1.jpg", "/assets/img2.jpg", "/assets/img1.jpg"])
  const OPTIONS: EmblaOptionsType = { loop: false }

  return (
    <EmblaSlider slides={images} options={OPTIONS} /> 
  )
}

export default Slider