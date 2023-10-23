import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { PokemonList } from "./components/PokemonList/PokemonList";
import axios from "axios";
import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonFilterList, setPokemonFilterList] = useState([]);

  useEffect(() => {
    const solicitarDetallePokemon = async (pokemonObjects) => {
      //const list = [];
      const detailedPokenonList = await Promise.all(
        //se espera que las promesas se resuelban
        pokemonObjects.map(async (pokemosObject) => {
          const pokemonDetail = await axios.get(pokemosObject.url);
          return pokemonDetail.data; //promesas resueltas me retorna el resultado
        }),
      );
      setPokemonList(detailedPokenonList); //Setemos el resultado en el ESTADO.
      setPokemonFilterList(detailedPokenonList);
    };

    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=500&offset=0",
        );
        const pokemonObjects = response?.data?.results; //si existe la lista llamamos al metodo que pide lo demas
        solicitarDetallePokemon(pokemonObjects);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPokemonList();
  }, []);

  function search(event) {
    const namePokemon = event.target.value.toLowerCase();
    if (namePokemon == "") {
      setPokemonFilterList(pokemonList);
    } else {
      let pokemon = pokemonList.filter(function (element) {
        return element.name == namePokemon;
      });
      setPokemonFilterList(pokemon);
    }
  }

  return (
    <>
      <div className="container">
        <Header action={search} />
        <PokemonList data={pokemonFilterList} />
      </div>
    </>
  );
}

export default App;
