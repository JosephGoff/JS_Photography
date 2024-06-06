"use client"
import Image from "next/image";
import React, { useState } from 'react'
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import './css/embla.css'

const Carousel = () => {
  const [images, setImages] = useState(["/assets/img1.jpg", "/assets/img2.jpg", "/assets/img1.jpg", "/assets/img2.jpg", "/assets/img1.jpg", "/assets/img2.jpg"])
  const OPTIONS: EmblaOptionsType = { loop: true }

  return (
    <EmblaCarousel slides={images} options={OPTIONS} /> 
  )
}

export default Carousel