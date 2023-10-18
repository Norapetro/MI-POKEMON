import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { PokemonItem } from "./components/PokemonItem/PokemonItem";
//import mockData from "./assets/mockData.json";
import axios from "axios";

import "./App.css";

function App() {
  const [pokemonList, setPokemonList] = useState([]);

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

      /*await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=13&offset=0",
      );*/
    };

    const fetchPokemonList = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=13&offset=0",
        );
        const pokemonObjects = response?.data?.results; //si existe la lista llamamos al metodo que pide lo demas
        solicitarDetallePokemon(pokemonObjects);
      } catch (error) {
        console.log(error);
      }
    };

    /*const lista = [];
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=13&offset=0")
      .then((resp) =>
        resp?.data?.results.map((pokemonObject) => {
          // console.log(pokemonObject.name); treamos los nombres
          axios.get(pokemonObject.url).then(
            //traemos toda la data de pokemon
            (pokemon) => lista.push(pokemon.data),
          );
        }),
      );
      pokemonList.length > 0 && setPokemonList(lista);*/
    fetchPokemonList();
  }, []);

  return (
    <>
      <div className="container">
        <Header />
        {pokemonList !== [] &&
          pokemonList.map((pokemon, index) => (
            <PokemonItem key={index} pokemonData={pokemon} />
          ))}
      </div>
    </>
  );
}

export default App;
