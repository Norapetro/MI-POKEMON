import "./styles.scss";

export default function Header({ action }) {
  return (
    <div className="header">
      <img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" />
      <div className="search">
        <input type="text" className="searchbox" onChange={action} />
      </div>
    </div>
  );
}
