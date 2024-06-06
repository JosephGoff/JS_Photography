"use client"
import "./letters.scss"
import React, { useState } from 'react'

const Letters = () => {
  const [openTab, setOpenTab] = useState(1)

  return (
    <div className="letters_container">
      <div 
        className="letters_object letters_object1" 
        style={{marginLeft: openTab === 1? 0 : "calc(-100vw + 120px"}}
        onClick={()=>{setOpenTab(1)}}
      >
        Meet Jess
      </div>

      <div 
        className="letters_object letters_object2" 
        style={{marginLeft: openTab === 3? "calc(-100vw + 160px":  "40px"}}
        onClick={()=>{setOpenTab(2)}}
      >
        Stories I Tell
      </div>

      <div 
        className="letters_object letters_object3" 
        style={{marginLeft: "80px"}}
        onClick={()=>{setOpenTab(3)}}
      >
        What Inspires Me
      </div>

    </div>
  )
}

export default Letters