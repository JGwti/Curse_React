import imageRickMorty from './img/rick-morty.png'; //import img
import './App.css';
import { useState } from 'react';
import Character from './components/Characters';

function App() {
  const [characters, setCharacter] = useState(null);

  const reqApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character')
    const characterApi = await api.json();

    setCharacter(characterApi.results);
  };
  //console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick and morty</h1>
        {characters ? (
          <Character characters={characters} setCharacter={ setCharacter } />
        ) : (
          <>
            <img src={imageRickMorty} alt="Rick and Morty" className='img-home' ></img>
            <button onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )
        }
      </header>
    </div>
  );
}

export default App;
