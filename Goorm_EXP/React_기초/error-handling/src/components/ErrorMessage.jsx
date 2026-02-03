function ErrorMessage({ message, onRetry }) {
  return (
    <div>
      <h2>문제가 발생했습니다.</h2>
      <p>{message}</p>
      <button onClick={onRetry}>다시 시도하시겠습니까?</button>
    </div>
  );
}

export default ErrorMessage;
