import { useEffect, useState } from 'react'


function App() {
 
  const [actors, setActors] = useState([])
  const [actressess, setActressess] = useState ([])

  //fetching dati actors
  function fetchActors () {
    fetch("https://lanciweb.github.io/demo/api/actors/")
    .then((res) => res.json())
    .then(setActors); 
  }

  //fetching dati actressess
  function fetchActressess() {
    fetch ("https://lanciweb.github.io/demo/api/actresses/")
    .then((res) => res.json())
    .then(setActressess)
  }

  //caricare la lista solo alll'avvio dell'applicazione con useEffect
  useEffect(fetchActors, [])

  useEffect(fetchActressess, [])

  return (
    <>
      <div>
        <h1>Attori</h1>
        <ul>
         {actors.map((actor) => (
          <li key={actor.id}>{actor.name}</li>          
         ))}       
        </ul>
      </div>
    </>
  )
}

export default App
