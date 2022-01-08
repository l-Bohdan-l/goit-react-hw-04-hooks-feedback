import './App.scss';
import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Section } from './components/Section/Section';
import { Statistics } from './components/Statistics/Statistics';
import { useState } from 'react';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedbackNum = value => {
    if (value === 'good') {
      setGood(good + 1);
    }
    if (value === 'neutral') {
      setNeutral(neutral + 1);
    }
    if (value === 'bad') {
      setBad(bad + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    let total = countTotalFeedback();
    const percent = Math.round((good * 100) / total);
    return percent;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={addFeedbackNum}
          />
        </Section>
        <Section>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </header>
    </div>
  );
}

export default App;
