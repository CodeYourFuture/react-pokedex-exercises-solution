import React from "react";

function App() {
  return (
    <div>
      <Logo />
      <BestPokemon />
      <CaughtPokemon />
    </div>
  );
}

const Logo = () => {
  const appName = "Pokedex";

  return (
    <header>
      <h1>Welcome to the {appName}</h1>
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="Pokedex"
      />
    </header>
  );
};

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

function CaughtPokemon() {
  const date = new Date().toLocaleDateString();

  return <p>Caught 0 Pokemon on {date}</p>;
}

export default App;
