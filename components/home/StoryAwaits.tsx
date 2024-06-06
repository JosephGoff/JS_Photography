import Image from 'next/image'
import React from 'react'
import "./storyawaits.scss"

const StoryAwaits = () => {
  return (
    <div className="container"></div>
    // <div className="w-[100vw] flex flex-col md:flex-row">
    //   <div className="w-[100%] md:w-[50%] h-[50vw] md:h-[50vw]" style={{border: "1.5px solid black", borderRadius: "30px"}}>
    //     <div style={{width: "calc(100% - 20px)", height: "calc(100% - 20px)", margin: "10px", borderRadius: "22px"}} className="bg-slate-300 relative">
    //       <Image
    //         src="/assets/img1.jpg" 
    //         alt="story awaits"
    //         layout="fill"
    //         objectFit="cover"
    //         style={{borderRadius: "22px"}}
    //       />
    //     </div>
    //   </div>

    //   <div className="w-[100%] md:w-[50%] flex justify-center items-center flex-col py-10">
    //     <p className="text-3xl text-center">YOUR <br /> STORY <br /> AWAITS</p>
    //     <div style={{margin: "40px", width: "2.3px", height: "50px", backgroundColor: "black", borderRadius: "10px"}}></div>
    //     <button style={{fontSize: "19px", border: "1.5px solid black", borderRadius: "30px", padding: "4px 32px"}}>GET IN TOUCH</button>
    //   </div>

    // </div>
  )
}

export default StoryAwaits