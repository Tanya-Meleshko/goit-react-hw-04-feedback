import React from 'react';
import s from './Statistics.module.css';
import Notification from 'components/Notification/Notification';

const Statistics = ({ state: statistics }) => {
  const feedbackNames = Object.keys(statistics);
  const feedbackStats = Object.values(statistics);

  const countTotalFeedback = values => {
    let total = 0;
    values.forEach(value => {
      total += value;
    });
    return total;
  };

  const countPositiveFeedbackPercentage = totalFeedbacks => {
    const goodFeedbacks = statistics['good'];
    return (goodFeedbacks * 100) / totalFeedbacks;
  };

  const totalFeedbacks = countTotalFeedback(feedbackStats);

  return totalFeedbacks === 0 ? (
    <Notification message="There is no feedback" />
  ) : (
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
