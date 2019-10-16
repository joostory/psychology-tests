import React, { useEffect, useState, useRef } from 'react'
import Swiper from 'swiper'
import TitleSlide from './TitleSlide'
import ResultSlide from './ResultSlide'
import QuestionSlide from './QuestionSlide'

export default function Slides({data}) {

  const container = useRef(null)
  const [swiper, setSwiper] = useState(null)
  const [scores, setScores] = useState([])
  const [index, setIndex] = useState(0)


  function handleAdd(score) {
    setScores([...scores, score])
    setIndex(index + 1)
  }

  function handleCancel() {
    setScores(scores.slice(0, scores.length - 1))
    setIndex(index - 1)
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
            type={data.answerType}
            onAdd={handleAdd}
            onCancel={handleCancel}
          />
        )}
        <ResultSlide
          scores={scores}
          messages={data.resultMessages}
        />
      </div>
    </div>
  )
}
