"use client"

import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/animations/windfarm.json';

const WindFarmAnimation = () => {
  return <Lottie animationData={animationData} loop={true} />;
};

export default WindFarmAnimation;
