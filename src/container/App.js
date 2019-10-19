import React from 'react'
import Test from '../component/Test'

export default function App() {

  const data = window.__INITIAL_STATE__? window.__INITIAL_STATE__ : {
    title: "안녕하세요",
    description: "심리검사를 준비 중입니다",
    questions: [],
    answerType: 'choice5',
  }

  return (
    <Test data={data} />
  )
}
