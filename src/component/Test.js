import React, { useEffect, useState, useRef } from 'react'
import Swiper from 'swiper'
import TitleSlide from './TitleSlide'
import ResultSlide from './ResultSlide'
import QuestionSlide from './QuestionSlide'

export default function Test({data}) {

  const container = useRef(null)
  const [swiper, setSwiper] = useState(null)
  const [scores, setScores] = useState(Array(data.questions.length).fill(false))
  const [index, setIndex] = useState(0)


  function handleAnswer(score) {
    setScores([
      ...scores.slice(0, index - 1),
      score,
      ...scores.slice(index)
    ])
    setTimeout(() => {
      setIndex(index + 1)
    }, 500)
  }

  function handleCancel() {
    setScores([
      ...scores.slice(0, index - 2),
      false,
      ...scores.slice(index - 1)
    ])
    setIndex(index - 1)
  }

  function handleReset() {
    setIndex(0)
    setScores(Array(data.questions.length).fill(false))
    formElm.current.reset()
  }
  
  useEffect(() => {
    if (swiper) {
      swiper.slideTo(index)
    }
  }, [index])

  useEffect(() => {
    setSwiper(new Swiper(container.current, {
      effect: "fade",
      allowTouchMove: false
    }))
  }, [])

  return (
    <div ref={container} className='swiper-container'>
      <div className="swiper-wrapper">
      
        <TitleSlide
          title={data.title}
          description={data.description}
          onStart={e => setIndex(index + 1)}
          disabled={data.questions.length == 0}
        />
        
          {data.questions.map((item, index) =>
            <QuestionSlide
              key={index}
              question={item}
              score={scores[index]}
              currentIndex={index + 1}
              totalCount={data.questions.length}
              type={data.answerType}
              onAnswer={handleAnswer}
              onCancel={handleCancel}
            />
          )}
        
        <ResultSlide
          scores={scores}
          messages={data.resultMessages}
          onReset={handleReset}
        />
      </div>
    </div>
  )
}
