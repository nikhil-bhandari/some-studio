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
  const { eta, percentage, isTimerComplete } = countdown;
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
