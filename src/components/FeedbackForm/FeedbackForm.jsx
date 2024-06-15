import React from 'react';
import { useState } from 'react';
import s from './Feedback.module.css'
const FeedbackForm = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const TotalFeedBack = good+bad+neutral
    const TotalPositiveFeedback = good/TotalFeedBack
    return (
        <div>
            <ul className={s.buttonList}>
                <li>
                    <button className={s.button} conClick={()=>{setGood(good +1)}}>good</button>
                </li>
                <li>
                    <button className={s.button} onClick={()=>{setBad(bad +1)}}>bad</button>
                </li>
                <li>
                    <button className={s.button} onClick={()=>{setNeutral(neutral +1)}}>neutral</button>
                </li>
                <li>
                    <button className={s.buttonReset} onClick={()=>{setGood(0)
                        setBad(0)
                        setNeutral(0)
                    }}>reset</button>
                </li>
            </ul>
            <ul></ul>
            <ul>
                <li>
                <p>Good:{good}</p>
                </li>
                <li>
                <p>Bad:{bad}</p>
                </li>
                <li>
                <p>Neutral:{neutral}</p>
                </li>
                <li>
                <p>TotalFeedBack:{TotalFeedBack}</p>
                </li>
                {good>0 && <li>
                <p>Total Posetive FeedBack:{TotalPositiveFeedback}</p>
                </li>}
            </ul>
        </div>
    );
}

export default FeedbackForm;
