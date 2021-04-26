export const formatTime = (timer) => {
  const pad = (num) => ('00' + num).slice(-2);
  const time = parseFloat(timer).toFixed(2);
  const minutes = Math.floor(time / 60) % 60;
  const seconds = Math.floor(time - minutes * 60);
  const milliseconds = time.slice(-2);
  return pad(minutes) + ':' + pad(seconds) + ':' + pad(milliseconds);
}