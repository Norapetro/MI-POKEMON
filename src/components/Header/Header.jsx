import "./styles.scss";

export default function Header({ action }) {
  return (
    <div className="header">
      <div className="title">Pokemon</div>
      <div className="search">
        <input type="text" className="searchbox" onChange={action} />
      </div>
    </div>
  );
}
