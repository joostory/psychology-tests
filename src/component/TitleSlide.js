import React from 'react'
import Slide from './Slide'

export default function TitleSlide({title, description, disabled, onStart}) {
  return (
    <Slide>
      <h3>{title}</h3>
      <p>{description}</p>
      {!disabled &&
        <button onClick={onStart}>시작하기</button>
      }
    </Slide>
  )
}
