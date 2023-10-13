import { useState } from 'react';

const TIME_TO_LIFE = 3000;

export function useNotification() {
  const [notification, setNotification] = useState(null);

  const clear = () => {
    setNotification(null);
  };
  const notify = (text) => {
    setNotification(text);
    setTimeout(clear, TIME_TO_LIFE);
  };

  return { notify, clear, notification };
}
