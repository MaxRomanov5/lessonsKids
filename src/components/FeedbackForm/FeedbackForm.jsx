import React from 'react';
import { useState } from 'react';
import s from './Feedback.module.css'
const FeedbackForm = () => {
    
    const [Feedback, setFeedback] = useState(() => {
        return JSON.parse(localStorage.getItem('Feedback')) || {good:0,bad:0, neutral:0}
    })
        function handleFeedback (type) {
            const newFeedback = {...Feedback}
            newFeedback[type]= newFeedback[type]+1
            localStorage.setItem('Feedback',JSON.stringify(newFeedback))
            setFeedback(newFeedback)
        }
    const TotalFeedBack = Feedback.good+Feedback.neutral+Feedback.bad;
    const TotalPositiveFeedback = Feedback.good/TotalFeedBack*100
    
    return (
        
        <div>
            <div >
            <h1 className={s.title}>Sip Happens Cafe</h1>
            <h2>Please leave your feedback about our service by selection one of options below.</h2>
            </div>
            <ul className={s.buttonList}>
                <li>
                    <button className={s.button} onClick={()=>{handleFeedback("good")}}>good</button>
                </li>
                <li>
                    <button className={s.button} onClick={()=>{handleFeedback("bad")}}>bad</button>
                </li>
                <li>
                    <button className={s.button} onClick={()=>{handleFeedback("neutral")}}>neutral</button>
                </li>
                <li>
                    <button className={s.buttonReset} onClick={()=>{setFeedback({good:0, neutral:0, bad:0})
                     localStorage.removeItem('Feedback')}}>reset</button>
                </li>
            </ul>
            <ul></ul>
            
            {TotalFeedBack?<ul className={s.totalList}>
                <li className={s.totalListItem}>
                <p>Good:{Feedback.good}</p>
                </li>
                <li className={s.totalListItem}>
                <p>Bad:{Feedback.bad}</p>
                </li>
                <li className={s.totalListItem}>
                <p>Neutral:{Feedback.neutral}</p>
                </li>
                <li className={s.totalListItem}>
                <p>TotalFeedBack:{TotalFeedBack}</p>
                </li>
                {Feedback.good>0 && <li className={s.totalListItem}>
                <p>Total Posetive FeedBack:{TotalPositiveFeedback.toFixed(2)}%</p>
                </li>}
            </ul> : "Not Feedback Yet" }
        </div>
    );
}

export default FeedbackForm;
