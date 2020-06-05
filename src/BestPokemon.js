import React from "react";

const BestPokemon = () => {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];

  return (
    <div>
      <p>My favourite Pokemon is Squirtle</p>
      <ul>
        {abilities.map((ability, index) => {
          return <li key={index}>{ability}</li>;
        })}
      </ul>
    </div>
  );
};

export default BestPokemon;
