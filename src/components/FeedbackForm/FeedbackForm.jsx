import React from 'react';
import { useState } from 'react';
const FeedbackForm = () => {
    const [good, setGood] = useState(0);
    const [bad, setBad] = useState(0);
    const [neutral, setNeutral] = useState(0);
    return (
        <div>
            <ul>
                <li>
                    <button onClick={()=>{setGood(good +1)}}>good</button>
                </li>
                <li>
                    <button onClick={()=>{setBad(bad +1)}}>bad</button>
                </li>
                <li>
                    <button onClick={()=>{setNeutral(neutral +1)}}>neutral</button>
                </li>
            </ul>
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
                <p>Total Posetive FeedBack</p>
                </li>
            </ul>
        </div>
    );
}

export default FeedbackForm;
