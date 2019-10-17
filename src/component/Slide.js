import React from 'react'

export default function Slide({children}) {
  return (
    <div className="swiper-slide">
      <div className="swiper-slide-inner">
        {children}
      </div>
    </div>
  )
}