import React from 'react'

export default function Slide({children}) {
  return (
    <div className="swiper-slide">
      {children}
    </div>
  )
}