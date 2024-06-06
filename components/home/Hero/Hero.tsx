import React from 'react'
import { Button } from '../../ui/button'
import Image from 'next/image'
import appData from "../../../app-data.json"

// const Hero = () => {
//   return (
//     <div className="h-[calc(100vh-60px)] sm:h-[calc(100vh-65px)] md:h-[calc(100vh-67px)] lg:h-[calc(100vh-75px)] w-[100vw] flex items-center justify-center bg-background1">
//       <div 
//         className="h-[70vh]" 
//         style={{aspectRatio: "2/3", borderRadius: "50%"}}
//       >
//         <div style={{ width: '100%', height: '100%', position: 'relative' }}>
//           <Image
//             style={{borderRadius: "50%"}}
//             src="/assets/img1.jpg" 
//             alt="header"
//             layout="fill"  
//             objectFit="cover"  
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

const Poloroid = ({ rotation, left, top }: { rotation: number, left: number, top: number }) => {
  return (
    <div style={{ 
      width: '140px', 
      height: "150px", 
      position: 'absolute', 
      marginLeft: left,
      marginTop: top,
      overflow: "hidden",
      transform: `rotate(${rotation}deg)`,
      zIndex: 102,
    }}>
      <Image
        style={{zIndex: 101}}
        src="/assets/poloroid.png" 
        alt="header"
        layout="fill"  
        objectFit="cover"  
      />
      <div style={{ 
        position: "absolute",
        zIndex: 102,
        marginTop: "14px",
        marginLeft: "17.5px",
        width: '99px', 
        height: "98.5px",
        backgroundColor: "red"}}>
        <Image
          style={{zIndex: 101}}
          src="/assets/img1.jpg" 
          alt="header"
          layout="fill"  
          objectFit="cover"  
      />
      </div>
    </div>
  )
}

const Hero = () => {
  return (
    <div 
      className="h-[calc(100vh-60px)] sm:h-[calc(100vh-65px)] md:h-[calc(100vh-70px)] lg:h-[calc(100vh-75px)] w-[100vw] flex justify-center bg-background1" 
      style={{ overflowX: 'hidden', position: 'relative' }} 
    >
       <Image
          style={{zIndex: 101}}
          src={appData.baseURL + "home/wall.png"}
          alt="header"
          layout="fill"  
          objectFit="cover"  
      />
      {/* <Poloroid rotation={4} left={-450} top={570}/>
      <Poloroid rotation={1} left={-200} top={300}/> */}
    </div>
  )
}

export default Hero