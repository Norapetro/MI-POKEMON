import { PokemonItem } from "../PokemonItem/PokemonItem";

export function PokemonList({ data }) {
  

  return (
    <div className="contenido">
      {data !== [] &&
        data.map((pokemon, index) => (
          <PokemonItem key={index} pokemonData={pokemon} />
        ))}
    </div>
  );
}
