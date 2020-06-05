import React from "react";

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
    </div>
  );
}

function Logo() {
  return (
    <header>
      <h1>Welcome to the Pokedex</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokedex"
      />
    </header>
  );
}

function BestPokemon() {
  return <p>My favourite Pokemon is Squirtle</p>;
}

export default App;
