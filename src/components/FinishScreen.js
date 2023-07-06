export const FinishScreen = ({ points, maxPoints, highscore, dispatch }) => {
  const percentage = (points / maxPoints) * 100;

  return (
    <>
      <p className='result'>
        You scored <strong>{points}</strong> out of {maxPoints} (
        {Math.round(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'reset' })}
      >
        Restart game
      </button>
    </>
  );
};
