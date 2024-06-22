import React from 'react';
import s from './FeedbackResults.module.css'
const FeedBackResults = ({Feedback}) => {

    const TotalFeedBack = Feedback.good+Feedback.neutral+Feedback.bad;
    const TotalPositiveFeedback = Feedback.good/TotalFeedBack*100
    return (
        <div>
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

export default FeedBackResults;
