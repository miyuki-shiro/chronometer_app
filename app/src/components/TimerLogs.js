import { useState, useEffect } from 'react';
import axios from 'axios';
import { formatTime } from '../utils';
import '../App.css';

const TimerLogs = (props) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/api/timers')
    .then((response) => setList(response.data))
    .catch((error) => setError(true));

  }, [props.isUpdated])

  return (
    <>
      <h2 className='logs-title'>Chronometer Logs</h2>
      { error === false
        ? <div className='logs-card'>
            {list.map(item => <h3 key={item.id}>{item.id} ➡️ {formatTime(item.time)}</h3>)}
          </div>
        : <h3 className='logs-error'>😰 Something happened! Nothing found!</h3>
      }
    </>
  );
}

export default TimerLogs;