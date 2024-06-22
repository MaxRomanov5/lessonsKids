import React from 'react';
import s from './FeedbackOptions.module.css'
const FeedbackOption = ({setFeedback,Feedback}) => {

    function handleFeedback (type) {
        const newFeedback = {...Feedback}
        newFeedback[type]= newFeedback[type]+1
        localStorage.setItem('Feedback',JSON.stringify(newFeedback))
        setFeedback(newFeedback)
    }
    return (
        <div>
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
        </div>
    );
}

export default FeedbackOption;
