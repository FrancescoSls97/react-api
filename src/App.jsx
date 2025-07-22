import { useEffect, useState } from 'react'





function App() {
  
  const [actors, setActors] = useState([])
  
  
  //fetching dati actors
  function fetchActors () {
    fetch("https://lanciweb.github.io/demo/api/actors")
    .then((res) => res.json())
    .then(data => {
      console.log(data);
      setActors(data)
      
    }); 
  }
  //caricare la lista solo alll'avvio dell'applicazione con useEffect
  useEffect(fetchActors, [])

  return (
    <>
        <h1 className='text-center m-5'>Attori</h1>
      <div className="container">
              {actors.map((actor) =>(
                <div key={actor.id} className="card m-4">
                  <div className="row g-0">
                   <div className="col-md-4">
                    <img src={actor.image} alt={actor.name} />
                   </div>
                   <div className="col-md-8">
                  <div className="card-body">
                    <h3>{actor.name}</h3>
                    <p>Anno di Nascita: {actor.birth_year}</p>
                    <p>Nazionalità: {actor.nationality}</p>
                    <p>Biografia: {actor.biography} </p>
                    <p>Riconoscimenti: {actor.awards}</p>
                  </div>
                  </div>
                  </div>
                </div>
              ))}
      </div>
    </>
  )
}

export default App
