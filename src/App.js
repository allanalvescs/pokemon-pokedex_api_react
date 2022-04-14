import { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [request, setRequest] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [pokemons, setPokemons] = useState([])

  const [prevPage, setPrevPage] = useState(null | '')
  const [nextPage, setNextPage] = useState(null | '')

  useEffect(() => {
    fetch(request).then(resp => resp.json()).then(resp => {
      setPokemons([...resp.results])
      setPrevPage(resp.previous)
      setNextPage(resp.next)
    })
  }, [request])

  const rendernextPage = () => {
    if (nextPage !== null) {
      setRequest(nextPage)
    }
  }

  const renderprevPage = () => {
    if (prevPage !== null) {
      setRequest(prevPage)
    } else {
      setRequest("https://pokeapi.co/api/v2/pokemon/")
    }
  }
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
