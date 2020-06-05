import React, { useState } from "react";

function CaughtPokemon(props) {
  const [caught, setCaught] = useState(0);

  function catchPokemon() {
    setCaught((caught) => {
      return caught + 1
    });
  }

  return (
    <p>
      Caught {caught} Pokemon on {props.date}
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </p>
  );
}

export default CaughtPokemon;
