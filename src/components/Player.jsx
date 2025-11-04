import { useRef, useState } from "react";

export default function Player() {
  const [enteredPlayerName, setEnterPlayerName] = useState(null);
  const playerName = useRef();

  // const [submitted, setSubmitted] = useState(false);
  function handleChange(event) {
    setEnterPlayerName(event.target.value);
  }

  function handleClick() {
    setEnterPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text"
          // onChange={(event) => handleChange(event)}
          // value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
