import React from "react";

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();

  return <p>Caught 0 Pokemon on {date}</p>;
}

export default CaughtPokemon;
