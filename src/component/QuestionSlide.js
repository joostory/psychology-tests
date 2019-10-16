import React from 'react'
import Slide from './Slide'

function Choice5({onSelect}) {
  return (
    <>
      <label>
        <input type='radio' onChange={e => onSelect(0)} />
        전혀 그렇지 않다.
      </label>
      <label>
        <input type='radio' onChange={e => onSelect(1)} />
        대체로 그렇지 않다.
      </label>
      <label>
        <input type='radio' onChange={e => onSelect(2)} />
        중간이다.
      </label>
      <label>
        <input type='radio' onChange={e => onSelect(3)} />
        대체로 그렇다.
      </label>
      <label>
        <input type='radio' onChange={e => onSelect(4)} />
        전적으로 그렇다.
      </label>
    </>
  )
}

function Choice2({onSelect}) {
  return (
    <>
      <label>
        <input type='radio' onChange={e => onSelect(1)} />
        예
      </label>
      <label>
        <input type='radio' onChange={e => onSelect(0)} />
        아니오
      </label>
    </>
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

export default function QuestionSlide({question, type, onAdd, onCancel}) {
  return (
    <Slide>
      {question}

      <Answer
        type={type}
        onAdd={onAdd}
      />
      <button type='button' onClick={onCancel}>이전으로</button>
    </Slide>
  )
}
