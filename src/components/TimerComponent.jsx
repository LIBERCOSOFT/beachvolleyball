import { useEffect, useState } from 'react';

const TimerComponent = () => {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setMinutes(minutes + 1);
    setSeconds(0);
  };

  const handleIncrease = () => {
    if (minutes >= 1 && minutes < 99) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }
  };

  const handleDecrease = () => {
    if (minutes > 1 && minutes < 100) {
      setMinutes(minutes - 1);
      setSeconds(0);
    }
  };

  const handleTimer = () => {
    if (seconds > 0) {
      setSeconds(seconds - 1);
    } else if (seconds === 0 && minutes > 0) {
      setSeconds(59);
      setMinutes(minutes - 1);
    } else if (seconds === 0 && minutes === 0) {
      setIsActive(false);
      setMinutes(1);
    }
  };

  useEffect(() => {
    let intervalId;
    if (isActive) {
      intervalId = setInterval(() => {
        handleTimer();
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  });

  return (
    <div style={{ padding: '10px', border: '1px solid black' }}>
      <div>
        <button type="button" onClick={handleIncrease}>
          +
        </button>
        <button type="button" onClick={handleDecrease}>
          -
        </button>
      </div>
      <h2>
        {minutes < 10 ? `0${minutes}` : minutes}
        :
        {seconds < 10 ? `0${seconds}` : seconds}
      </h2>
      <div>
        <button type="button" onClick={startTimer}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button type="button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerComponent;
