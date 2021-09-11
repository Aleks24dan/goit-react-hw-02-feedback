import React from 'react';
import FeedbackBtn from '../FeedbackBtn/FeedbackBtn';
import Statistics from '../Statistics/Statistics';
import SectionTitle from '../SectionTitle/SectionTitle';
import NotificationMes from '../Notification/Notification';
import { Container } from './App.styled';
import './App.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onFeedbackBtn = event => {
    this.setState(prevState => ({
      [event]: prevState[event] + 1,
    }));
  };
  TotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  positiveFeedbackPercent = (total) => {
    const{good}=this.state
      return Math.round((good * 100) / total);
  };
  render() {
    const { good, neutral, bad } = this.state;
  const total = this.TotalFeedback()

    return (
      <Container>
        <SectionTitle title="Please leave feedback">
          <FeedbackBtn
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onFeedbackBtn}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
               total={total}
              positivePercentage={this.positiveFeedbackPercent(total)}
            />
          ) : (
            <NotificationMes message="No feedback" />
          )}
        </SectionTitle>
      </Container>
    );
  }
}

export default App;
