import { useState, useRef } from 'react';
import axios from 'axios';

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleInit = () => {
    if (timer === 0) { setIsActive(true); }
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 0.01)
    }, 10);
  }

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(true);
  }

  const handleReset = (updateHandler) => {
    if (timer !== 0) {
      clearInterval(countRef.current);
      setIsActive(false);
      setIsPaused(false);
      setTimer(0);

      axios.post('http://localhost:4000/api/timer', { time: parseFloat(timer).toFixed(2) })
      .then((response) => { console.log(`👍 Success 👍 ${response.data}`); updateHandler(); })
      .catch((error) => console.log(`❌ Error ❌ ${error.message}`));
    }
  }

  return { timer, isActive, isPaused, handleInit, handlePause, handleReset }
}

export default useTimer;