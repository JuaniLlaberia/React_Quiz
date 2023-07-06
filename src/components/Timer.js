import { useEffect } from 'react';

export const Timer = ({ secondsRemaining, dispatch }) => {
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);
    //CLEAN UP FUNCTION
    return () => clearInterval(timer);
  }, [dispatch]);

  return (
    <div className='timer'>
      {minutes < 10 && '0'}
      {minutes}:{seconds < 10 && '0'}
      {seconds}
    </div>
  );
};
