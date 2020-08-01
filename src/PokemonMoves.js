import React, { useState, useEffect } from "react";

function PokemonMoves() {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/1/")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPokemonData(data);
      });
  }, []);

  return pokemonData ? (
    <div>
      <p>{pokemonData.name}'s moves:</p>
      <ul>
        {pokemonData.moves.map((move, index) => {
          return <li key={index}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  ) : null;
}

export default PokemonMoves;
