import React, { useState } from 'react';
import FeedbackButtons from './FeedbackButtons/FeedbackButtons';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackNames = { good, neutral, bad };

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
      <Section title="Please, leave feedback">
        <FeedbackButtons
          feedbackButtons={Object.keys(feedbackNames)}
          onLeaveFeedback={onAddFeedback}
        />
      </Section>

      <Section title="Statistics">
        <Statistics state={feedbackNames} />
      </Section>
    </div>
  );
};
