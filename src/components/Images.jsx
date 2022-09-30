import React from 'react';

export default function Images({imgpath}) {
  return (
    <div className='w-[70%] sm:w-[250px] md:w-[300px] lg:w-[350px] relative z-10 after-image before-image'>
        <img className='w-full h-auto rounded-lg 'src={imgpath} alt="hero_image" />
    </div>
  )
}
