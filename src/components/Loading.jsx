import React from 'react';
import Lottie from 'lottie-react';
import loading from '../assets/animations/loading.json';

export const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Lottie autoPlay loop={true} animationData={loading} className="w-1/2 h-1/2" />
    </div>
  );
};
