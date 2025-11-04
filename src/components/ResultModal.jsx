import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, timeRemaining, onReset },
  ref
) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const youLost = timeRemaining <= 0;

  const formattedRemaingTime = (timeRemaining / 1000).toFixed(2);
  return (
    <dialog ref={dialog} className="result-modal">
      {youLost ? <h2>You lost</h2> : <h2>You won</h2>}
      <p>
        The target time was <strong>{targetTime} seconds</strong>
      </p>
      <p>
        You stopped timer with{" "}
        <strong>{formattedRemaingTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
