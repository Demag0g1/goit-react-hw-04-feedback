import { useState } from 'react';
import {SectionWrap} from './section/Section';
import {FeedbackOptions} from './feedback/FeedbackOption';
import {Notification} from './notification/Notification';
import {Statistics} from './statistic/statistic';
import css from './App.module.css';

export function App () {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (name) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: prevFeedback[name] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return feedback.good + feedback.neutral + feedback.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor(
      (feedback.good / countTotalFeedback()) * 100 || 0
    );
  };

  return (
    <div className={css.container}>
      <SectionWrap title="Please, leave your feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeavefeedback={updateFeedback}
        />
      </SectionWrap>

      <SectionWrap title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There's no feedback yet..." />
        ) : (
          <Statistics
            options={Object.keys(feedback)}
            statistic={feedback}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </SectionWrap>
    </div>
  );
};



