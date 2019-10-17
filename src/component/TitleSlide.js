import React from 'react'
import { Fab, Typography } from '@material-ui/core'
import Slide from './Slide'

export default function TitleSlide({title, description, disabled, onStart}) {
  return (
    <Slide>
      <Typography variant="h3" gutterBottom={true}>
        {title}
      </Typography>
      <Typography variant="body1" component="p" paragraph={true}>
        {description}
      </Typography>

      {!disabled &&
        <Fab variant="extended" color="primary" onClick={onStart}>
          시작하기
        </Fab>
      }
    </Slide>
  )
}
