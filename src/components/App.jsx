import React, { useState } from 'react';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackNames = { good, neutral, bad };

  const totalFeedbacks = () => {
    let total = 0;
    Object.values(feedbackNames).forEach(element => {
      total += element;
    });
    return total;
  };

  const onAddFeedback = event => {
    switch (event.target.textContent) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div
      style={{
        height: '100%',
        padding: 30,
      }}
    >
      <Section title="Please leave feedback">
        <FeedbackButtons
          feedbackButtons={Object.keys(feedbackNames)}
          onLeaveFeedback={onAddFeedback}
        />
      </Section>

      <Section title="Statistics">
        {totalFeedbacks() > 0 ? (
          <Statistics state={feedbackNames} total={totalFeedbacks()} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
