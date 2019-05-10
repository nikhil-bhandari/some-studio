import { useEffect, useState } from "react";

export default function useCountdown(timer: number) {
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