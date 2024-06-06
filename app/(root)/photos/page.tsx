import Navbar from '@/components/Navbar/Navbar'
import { HeroParallax } from '@/components/ui/hero-parallax'
import React from 'react'
import appData from "../../../app-data.json"

const Photos = () => {
  const products = [
    {title: "item 1", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 2", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 3", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 4", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 5", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 6", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 7", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 8", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 9", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 10", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 11", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 12", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 13", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 14", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
    {title: "item 15", link: "https://ui.aceternity.com/components/hero-parallax", thumbnail: appData.baseURL + "img1.jpg"},
  ]

  return (
    <>
      <Navbar/>
      <HeroParallax products={products}/>
      <div className="flex justify-center items-center" style={{height: "200px", backgroundColor: "green"}}>
        <p>Hi</p>
      </div>
      <div className="flex justify-center items-center" style={{height: "500px", backgroundColor: "white"}}>
        <p>Hi</p> 
      </div>
    </>
  )
}

export default Photos