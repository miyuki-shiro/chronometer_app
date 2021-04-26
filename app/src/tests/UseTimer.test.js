import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom';
import App from '../App';

jest.useFakeTimers();

describe('Use timer hooks', () => {
  test('it should start, pause and resume the chronometer', () => {
    render(<App />);
    expect(screen.getByText('00:00:00')).toBeInTheDocument();
    fireEvent.click(screen.getByText('▶️ Start'));
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(screen.getByText('⏸️ Pause')).toBeInTheDocument();

    fireEvent.click(screen.getByText('⏸️ Pause'));
    expect(screen.getByText('⏹️ Resume')).toBeInTheDocument();

    fireEvent.click(screen.getByText('⏹️ Resume'));
    expect(screen.getByText('⏸️ Pause')).toBeInTheDocument();

    expect(screen.getByText('🔁 Reset')).not.toBeDisabled();
  });
})