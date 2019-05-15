import React, {useState} from 'react';
import useCountdown from './useCountdown';
import FxExpiryBarProps from './FxExpiryBarProps';
import { ExpiryHandling, Button, TimeRemaining, FxBarWrapper, Currency, ProgressBar, Spinner } from './styled';

function getRightComponent(isTimerComplete: boolean, eta: number, isRefreshing: boolean, onExpiry: () => void, onRefresh: () => void) {
  let rightComponent;

  if (isTimerComplete) {
    rightComponent = <ExpiryHandling>
      <span style={{ lineHeight: '50px' }}>Your session expired</span>
      <Button onClick={onRefresh}>
        Refresh
        {isRefreshing && <Spinner />}
      </Button>
    </ExpiryHandling>;
    if(!isRefreshing){
      onExpiry();
    }
  } else {
    rightComponent = <TimeRemaining> {eta} seconds remaining </TimeRemaining>;
  }

  return rightComponent;
}

const FxExpiryBar: React.FC<FxExpiryBarProps> = ({ timer, onExpiry, onRefresh, from, to }) => {
  const { countdown, reset } = useCountdown(timer);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { eta, percentage, isTimerComplete } = countdown;

  let rightComponent = getRightComponent(isTimerComplete, eta, isRefreshing, onExpiry, () => {
    setIsRefreshing(true);
    onRefresh(()=>{
      reset();
      setIsRefreshing(false);
    });
  });

  return (
    <FxBarWrapper>
      <Currency>
        {from.amount} {from.unit} = {to.amount} {to.unit}
      </Currency>
      {rightComponent}
      <ProgressBar className={isTimerComplete ? 'collapsed' : ''} percentage={percentage}>
        <div></div>
      </ProgressBar>
    </FxBarWrapper>
  );
}

export default FxExpiryBar;
