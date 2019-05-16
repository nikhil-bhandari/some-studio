import React from 'react';
import useCountdown from '../ProgressBar/useCountdown';

interface TimerProps {
    refershInterval?: number;
    duration: number;
    onTimeout: (reset: () => void) => void;
    children: (props: any)=> any;
}

const Timer: React.FC<TimerProps> = ({ children, duration, onTimeout }) => {
    const data = {
        delta: 0,
    };

    const { countdown, reset } = useCountdown(duration / 1000);

    if (countdown.isTimerComplete) {
        onTimeout(reset);
    }

    return children({
        ...countdown,
        reset
    });
}

export default Timer;


/*

<Timer duration={3000} refershInterval={1000}>
    {(percentage, refershInterval)=>{
        <ProgressBar type="horizontal" percentage={percentage} interval={refershInterval} />
    }}
</Timer>

<Timer duration={3000} refershInterval={1000}>
    {(percentage, interval)=>{
        <ProgressBar type="vertical" percentage={percentage} interval={refershInterval} />
    }}
</Timer>

<Timer duration={3000} refershInterval={1000}>
    {(percentage, refershInterval)=>{
        <ProgressBar type="circular" percentage={percentage} interval={refershInterval} />
    }}
</Timer>

*/