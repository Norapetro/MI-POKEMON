export function PokemonItem({ pokemonData }) {
  const { name, id, sprites } = pokemonData;
  return (
    <div className="card">
      <div className="photo">
        <img
          /*src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"*/
          src={sprites.other["official-artwork"].front_default} //nos traemos la imagen de la API con la ruta
          alt="pokemon photo"
        />
      </div>
      <div className="info">
        <div className="id">N° {id}</div>
        <div className="name">{name}</div>
        <div className="types">
          <div className="grass">Grass</div>
          <div className="poison">Poison</div>
        </div>
      </div>
    </div>
  );
}
