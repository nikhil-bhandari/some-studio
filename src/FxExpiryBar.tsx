import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components';

const TopItem = styled.div`
  flex: 1;
  font-size: 25px;
  line-height: 45px;
`;

const Currency = styled(TopItem)`
  text-align: left;
`;

const TimeRemaining = styled(TopItem)`
  text-align: right;
`;

const ExpiryHandling = styled(TopItem)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Collapsable = styled.div`
  max-height: 1000px;
  transition: max-height 0.1s linear, margin 0.3s linear;
  height: auto;
  &.collapsed {
    margin: 0;
    max-height: 0;
  }
`;

const ProgressBar = styled(Collapsable)`
  margin-top: 10px;
  width: 100%;
  background-color: #DDD;
  border-radius: 10px;
  overflow: hidden;

`;

const Progress = styled.div<{ percentage: Number }>`
  width: ${props => (props.percentage > 0 ? props.percentage : 0) + `%`};
  background-color: ${(props) => {
    let color;
    if (props.percentage > 66) {
      color = 'red';
    } else if (props.percentage > 33) {
      color = 'orange';
    } else {
      color = 'green';
    }
    return color;
  }};
  max-width: 100%;
  transition: width 1s linear, background-color  1s linear;
  height: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  font-size: 15px;
  margin-left: 10px;
  border: 0;
  outline: 0;
  border-radius: 10px;
  width: 100px;
  height: 50px;
  line-height: 50px;
  background-color: red;
  color: #FFF;
  display: inline-block;
`;

const FxBarWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  box-shadow: 0 0 11px 1px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background-color: darkblue;
  color: #FFF;
  border-radius: 5px;
  overflow: hidden;
`;

interface FxExpiryBarProps {
  timer: number
}

function useCountdown(timer: number) {
  // Count down should start from 0 so that inital progressbar renders with 0 width
  const [countdown, setCountdown] = useState(0);

  useEffect(() => {
    const pid = setTimeout(() => {
      if (countdown <= timer) {
        setCountdown(countdown + 1);
      }
    }, 1000);

    return function cleanup() {
      clearTimeout(pid);
    };
  });

  return countdown;
}

const FxExpiryBar: React.FC<FxExpiryBarProps> = ({ timer }) => {
  const countdown = useCountdown(timer);

  //Elapsed time starts with 0 but the count down starts with 1
  const elapsedTime = Math.max(countdown - 1, 0);

  // ETA should not be greater than the timer.
  const eta = timer - Math.min(elapsedTime, timer);

  // For UI Percentage should always be one step ahead because it takes one second for a smooth transition
  const percentage = (countdown) / timer * 100;

  const isTimerComplete = timer === elapsedTime;

  console.log('TimerComplete', isTimerComplete, countdown, 'Elapsed Time', elapsedTime, 'eta', eta, 'percentage', percentage);

  let rightComponent;

  if (isTimerComplete) {
    rightComponent = <ExpiryHandling>
      <span style={{lineHeight: '50px'}}>Your session expired</span>
      <Button>Refresh</Button>
    </ExpiryHandling>;
  } else {
    rightComponent = <TimeRemaining> {eta} seconds remaining </TimeRemaining>;
  }

  return (
    <FxBarWrapper>
      <Currency>
        1 SGD = 50 INR
      </Currency>
      {rightComponent}
      <ProgressBar className={isTimerComplete ? 'collapsed' : ''}>
        <Progress percentage={percentage} />
      </ProgressBar>
    </FxBarWrapper>
  );
}

export default FxExpiryBar;
