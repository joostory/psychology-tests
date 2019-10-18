import React, { useState } from 'react'
import Slide from './Slide'
import {
  Typography, FormControl, FormControlLabel, RadioGroup, Radio, Button, Paper, makeStyles
} from '@material-ui/core'

function Choice5({onSelect}) {
  return (
    <FormControl component="fieldset">
      <RadioGroup onChange={e => onSelect(e.target.value)}>
        <FormControlLabel value="0" control={<Radio />} label="전혀 그렇지 않다." />
        <FormControlLabel value="1" control={<Radio />} label="대체로 그렇지 않다." />
        <FormControlLabel value="2" control={<Radio />} label="중간이다." />
        <FormControlLabel value="3" control={<Radio />} label="대체로 그렇다." />
        <FormControlLabel value="4" control={<Radio />} label="전적으로 그렇다." />
      </RadioGroup>
    </FormControl>
  )
}

function Choice2({onSelect}) {
  return (
    <FormControl component="fieldset">
      <RadioGroup onChange={e => onSelect(e.target.value)}>
        <FormControlLabel value="1" control={<Radio />} label="예" />
        <FormControlLabel value="0" control={<Radio />} label="아니오" />
      </RadioGroup>
    </FormControl>
  )
}

function Answer({type, onAdd}) {
  if (type == "choice2") {
    return <Choice2 onSelect={onAdd} />
  } else {
    // default choice5
    return <Choice5 onSelect={onAdd} />
  }
}

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    margin: theme.spacing(0, 0, 2),
    boxSizing: "border-box",
    width: "100%"
  }
}))

export default function QuestionSlide({
  question, type, onAnswer, onCancel,
  currentIndex, totalCount
}) {

  const classes = useStyles()

  return (
    <Slide>
      <Typography align="right" variant="subtitle1" component="p">
        {currentIndex} / {totalCount}
      </Typography>
      <Paper className={classes.paper} elevation={2}>
        <Typography variant="h4" gutterBottom={true}>
          {question}
        </Typography>

        <Answer
          type={type}
          onAdd={onAnswer}
        />
      </Paper>

      <Button onClick={onCancel}>
        &lt; 이전으로
      </Button>
    </Slide>
  )
}
