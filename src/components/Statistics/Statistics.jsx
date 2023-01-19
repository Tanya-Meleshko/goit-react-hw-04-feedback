import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ state: statistics, total: totalFeedbacks }) => {
  const feedbackNames = Object.keys(statistics);

  const countPositiveFeedbackPercentage = totalFeedbacks => {
    const goodFeedbacks = statistics['good'];
    return (goodFeedbacks * 100) / totalFeedbacks;
  };

  return (
    <>
      {feedbackNames.map(name => (
        <p key={name} className={s.feedbackCount}>
          {`${name}: ${statistics[name]}`}
        </p>
      ))}
      <p className={s.feedbackCount}>total: {totalFeedbacks}</p>
      <p className={s.feedbackCount}>
        {`positive: ${Math.trunc(
          countPositiveFeedbackPercentage(totalFeedbacks)
        )}%`}
      </p>
    </>
  );
};

export default Statistics;
