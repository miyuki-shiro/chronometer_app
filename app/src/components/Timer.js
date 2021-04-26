import useTimer from '../hooks/UseTimer';
import { formatTime } from '../utils';

const Timer = (props) => {
  const { timer, isActive, isPaused, handleInit, handlePause, handleReset } = useTimer(0);

  return (
    <div className='chrono-card'>
      <h3>{formatTime(timer)}</h3>
      <div>
        { !isActive && !isPaused
          ? <button onClick={handleInit}>▶️ Start</button>
          : ( isPaused
            ? <button onClick={handleInit}>⏹️ Resume</button>
            : <button onClick={handlePause}>⏸️ Pause</button>
            )
        }
        <button disabled={!isActive} onClick={() => handleReset(props.updateHandler)}>🔁 Reset</button>
      </div>
    </div>
  );
}

export default Timer;