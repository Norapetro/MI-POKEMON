import Header from "./components/Header/Header";
import PokemonList from "./components/PokemonList/PokemonList";
import mockData from "./assets/mockData.json";
import "./App.css";

function App() {
  console.log(mockData)
  return (
    <>
      <div className="container">
        <Header />
        <PokemonList />
      </div>
    </>
  );
}

export default App;
