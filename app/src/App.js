import { useState } from 'react';
import './App.css';
import Timer from './components/Timer';
import TimerLogs from './components/TimerLogs';

const App = () => {
  const [isUpdated, setIsUpdated] = useState(false);
  const isUpdatedHandler = () => { setIsUpdated(!isUpdated) }

  return (
    <>
      <header>
        <h1>Chronometer</h1>
        <h1>⚛️🔥⏲</h1>
      </header>
      <main>
        <Timer updateHandler={isUpdatedHandler} />
        <TimerLogs isUpdated={isUpdated} />
      </main>
    </>
  );
}

export default App;