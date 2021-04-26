import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import axios from 'axios';

afterEach(() => jest.clearAllMocks());

describe('Main view', () => {
  test('it should renders without crashing', () => {
    const div = document.createElement('div');
    render(<h1>Chronometer ⚛️🔥⏲</h1>, div);
    expect(screen.getByText('Chronometer ⚛️🔥⏲')).toBeInTheDocument();
  });

  test('it should render the chronometer and the logs from the api', async () => {
    axios.get = jest.fn(() => Promise.resolve({ data: [
      { "id": 2, "time": 3.10, "createdAt": "2021-04-20T19:18:26.764Z", "updatedAt": "2021-04-20T19:18:26.764Z" },
      { "id": 1, "time": 1.62, "createdAt": "2021-04-20T00:31:18.304Z", "updatedAt": "2021-04-20T00:31:18.304Z" }
    ]}));
    render(<App />);
    const timer = await screen.findByText('2 ➡️ 00:03:10');
    expect(timer).toBeInTheDocument();
    expect(screen.getByText('Chronometer')).toBeInTheDocument();
    expect(screen.getByText('00:00:00')).toBeInTheDocument();
    expect(screen.getByText('▶️ Start')).toBeInTheDocument();
    expect(screen.getByText('🔁 Reset')).toBeDisabled();
  });

  test('it should render the chronometer and an error', async () => {
    axios.get = jest.fn(() => Promise.reject({message: '❌ Error ❌ Network Error'}));
    render(<App />);
    const timer = await screen.findByText('😰 Something happened! Nothing found!');
    expect(timer).toBeInTheDocument();
    expect(screen.getByText('Chronometer')).toBeInTheDocument();
    expect(screen.getByText('00:00:00')).toBeInTheDocument();
    expect(screen.getByText('▶️ Start')).toBeInTheDocument();
    expect(screen.getByText('🔁 Reset')).toBeDisabled();
  });
});
