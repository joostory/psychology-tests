import React from 'react'
import Slide from './Slide'

export default function ResultSlide({scores, messages}) {

  const score = scores.length > 0? scores.reduce((a,b) => a + b) : 0
  const message = messages.find(item =>
    score <= item.score
  )

  return (
    <Slide>
      <h3>총 {score}점</h3>
      <p>{message.message}</p>
    </Slide>
  )
}