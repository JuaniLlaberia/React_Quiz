export const Progress = ({ points, numQuestions, index, maxPoints }) => {
  return (
    <header className='progress'>
      <progress value={index + 1} max={numQuestions} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints}
      </p>
    </header>
  );
};
