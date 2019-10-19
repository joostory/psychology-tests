import React from 'react'
import Slide from './Slide'
import { Typography, Button, Fab } from '@material-ui/core'

export default function ResultSlide({scores, messages, onReset}) {

  const score = scores.length > 0? scores.reduce((a,b) => parseInt(a) + parseInt(b)) : 0
  const message = messages.find(item =>
    score <= item.score
  )

  return (
    <Slide>
      <Typography variant="h2" gutterBottom={true}>
        총 {score}점
      </Typography>
      
      {message &&
        <Typography variant="body1" gutterBottom={true}>
          {message.message}
        </Typography>
      }

      <Typography variant="body2" component="blockquote" gutterBottom={true}>
        이 결과는 당신의 심리적 문제의 진단이 아닙니다. 정신 건강이 좋지 않다고 우려되는 경우 가까운 심리전문가를 찾아주세요.
      </Typography>

      <Fab variant="extended" color="default" onClick={onReset}>다시하기</Fab>
    </Slide>
  )
}