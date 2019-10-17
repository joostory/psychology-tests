import React from 'react'
import Slide from './Slide'
import { Typography } from '@material-ui/core'

export default function ResultSlide({scores, messages}) {

  const score = scores.length > 0? scores.reduce((a,b) => parseInt(a) + parseInt(b)) : 0
  const message = messages.find(item =>
    score <= item.score
  )

  return (
    <Slide>
      <Typography variant="h2" gutterBottom={true}>
        총 {score}점
      </Typography>
      
      {message && <p>{message.message}</p>}
    </Slide>
  )
}