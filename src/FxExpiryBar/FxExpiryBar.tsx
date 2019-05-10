import React from 'react';
import useCountdown from './useCountdown';
import FxExpiryBarProps from './FxExpiryBarProps';
import { ExpiryHandling, Button, TimeRemaining, FxBarWrapper, Currency, ProgressBar, Progress } from './styled';

function getRightComponent(isTimerComplete: boolean, onExpiry: () => void, eta: number) {
  let rightComponent;

  if (isTimerComplete) {
    rightComponent = <ExpiryHandling>
      <span style={{ lineHeight: '50px' }}>Your session expired</span>
      <Button onClick={onExpiry}>Refresh</Button>
    </ExpiryHandling>;
  } else {
    rightComponent = <TimeRemaining> {eta} seconds remaining </TimeRemaining>;
  }

  return rightComponent;
}

const FxExpiryBar: React.FC<FxExpiryBarProps> = ({ timer, onExpiry, from, to }) => {
  const countdown = useCountdown(timer);

  //Elapsed time starts with 0 but the count down starts with 1
  const elapsedTime = Math.max(countdown - 1, 0);

  // ETA should not be greater than the timer.
  const eta = timer - Math.min(elapsedTime, timer);

  // For UI Percentage should always be one step ahead because it tetaakes one second for a smooth transition
  const percentage = (countdown) / timer * 100;

  const isTimerComplete = timer === elapsedTime;

  // console.log('TimerComplete', isTimerComplete, countdown, 'Elapsed Time', elapsedTime, 'eta', eta, 'percentage', percentage);

  let rightComponent = getRightComponent(isTimerComplete, onExpiry, eta);

  return (
    <FxBarWrapper>
      <Currency>
        {from.amount} {from.unit} = {to.amount} {to.unit}
      </Currency>
      {rightComponent}
      <ProgressBar className={isTimerComplete ? 'collapsed' : ''}>
        <Progress percentage={percentage} />
      </ProgressBar>
    </FxBarWrapper>
  );
}

export default FxExpiryBar;
