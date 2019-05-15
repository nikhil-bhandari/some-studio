import {getTimer} from './useCountdown';

it('timer function to return correct values', () => {
    expect(getTimer(3, 0)).toEqual(expect.objectContaining({
        countdown: 0,
        eta: 3,
        isTimerComplete: false,
        percentage: 0
    }));
      
    expect(getTimer(3, 1)).toEqual(expect.objectContaining({
        countdown: 1,
        eta: 3,
        isTimerComplete: false,
        percentage: 33.33333333333333,
    }));

    expect(getTimer(3, 2)).toEqual(expect.objectContaining({
        countdown: 2,
        eta: 2,
        isTimerComplete: false,
        percentage: 66.66666666666666
    }));

    expect(getTimer(3, 3)).toEqual(expect.objectContaining({
        countdown: 3,
        eta: 1,
        isTimerComplete: false,
        percentage: 100
    }));

    expect(getTimer(3, 4)).toEqual(expect.objectContaining({
        countdown: 4,
        eta: 0,
        isTimerComplete: true,
        percentage: 100
    }));
});
