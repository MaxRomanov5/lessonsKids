import React from 'react'
import { useState } from 'react'
import s from './Feedback.module.css'
import FeedbackOption from '../FeedBackOptions/FeedbackOption'
import FeedbackResults from '../FeedbackResults/FeedBackResults'
const FeedbackForm = () => {
  const [Feedback, setFeedback] = useState(() => {
    return (
      JSON.parse(localStorage.getItem('Feedback')) || {
        good: 0,
        bad: 0,
        neutral: 0,
      }
    )
  })

  return (
    <div>
      <div>
        <h1 className={s.title}>Sip Happens Cafe</h1>
        <h2>
          Please leave your feedback about our service by selection one of
          options below.
        </h2>
      </div>

      <FeedbackOption setFeedback={setFeedback} Feedback={Feedback} />

      <FeedbackResults Feedback={Feedback} />
    </div>
  )
}

export default FeedbackForm
