import React, { useState } from 'react';
import { ProgressBar } from './styled';
import ProgressBarProps from './ProgressBarProps';
import useCountdown from './useCountdown';

const ProgressBarComponent: React.FC<ProgressBarProps> = ({ percentage, timer }) => {
    const p = 0;
    if (timer) {
      const { countdown, reset } = useCountdown(timer);  
      const { eta, percentage, isTimerComplete } = countdown;
    }

    return (
        <ProgressBar percentage={0}>
            <div />
        </ProgressBar>
    )
}

export default ProgressBarComponent;