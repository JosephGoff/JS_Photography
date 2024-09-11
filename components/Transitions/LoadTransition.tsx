"use client";

import { useEffect, useState } from 'react';
import './loadTransition.css'; // Import your transition CSS

const LoadTransition = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add the 'loaded' class when the page is fully loaded
    const handleLoad = () => {
      console.log('Page is fully loaded');
      setIsLoaded(true);
    }

    // Attach the event listener
    window.addEventListener('load', handleLoad);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
    {/* <div className={isLoaded ? 'loaded' : ''}> */}
      {children}
    {/* </div> */}
    </>
  );
};

export default LoadTransition;