import React from 'react'
import WindFarmAnimation from '../../effects/animations/WindFarmAnimation'
import Image from 'next/image'

const ContactHero = () => {
  return (
      <>
        <div style={{position: "relative", width: "100vw", height: "100%" }}>
          <Image
            src="/assets/bg-contact2.png" 
            alt="contact"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            className="block md:hidden"
          />
           <Image
            src="/assets/bg-contact.png" 
            alt="contact"
            layout="fill"
            objectFit="cover"
            objectPosition="right"
            className="hidden md:block"
          />
          <div className="flex items-center justify-center" style={{width: "100vw", height: "100%", position: "absolute"}}>
            <div style={{width: "60vw", height: "60vh", backgroundColor: "white", borderRadius: "50px"}}>
              <WindFarmAnimation />
            </div>
          </div>

        </div>
        {/* <div style={{position: "relative", width: "100vw", height: "100%"}}>
                <WindFarmAnimation />
        </div> */}
    </>
  )
}

export default ContactHero