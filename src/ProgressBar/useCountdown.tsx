import { useEffect, useState } from "react";

export default function useCountdown(timer: number, interval: number = 1000) {
  // Count down should start from 0 so that inital progressbar renders with 0 width
  const [data, setData] = useState(getTimer(timer, 0));

  useEffect(() => {
    if (data.countdown === 0) {
      setData(getTimer(timer, data.countdown + 1));
    }

    let pid: any;

    if (data.countdown <= timer) {
      pid = setTimeout(() => {
        setData(getTimer(timer, data.countdown + 1));
      }, interval);
    }

    return function cleanup() {
      clearTimeout(pid);
    };
  }, [data.countdown]);

  return {
    countdown: data,
    reset: () => {
      setData(getTimer(timer, 0))
    }
  };
}

export function getTimer(timer: number, countdown: number) {
  //Elapsed time starts with 0 but the count down starts with 1  
  const elapsedTime = Math.max(countdown - 1, 0);

  // ETA should not be greater than the timer.
  const eta = timer - Math.min(elapsedTime, timer);

  // For UI Percentage should always be one step ahead because it tetaakes one second for a smooth transition
  const percentage = Math.min((countdown) / timer * 100, 100);

  const isTimerComplete = timer === elapsedTime;

  return {
    countdown,
    eta,
    isTimerComplete,
    percentage
  };

}