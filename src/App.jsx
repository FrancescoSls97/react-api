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
      <div className="container text-center m-2">
        <h1>Actors</h1>
          <div className="row row-cols-4 g-0">
            <div className="col">
              <div className="card">
                <div className="row g-0">
                  <div className="col md-4">
                    <img src="" className="img-fluid rounded-start" alt="card img here" />
                    <div className="col md-8">
                      <div className="cardbody">
                        <h5 className="card-title">Actor Name</h5>
                        <p className="card-text">Birth Year</p>
                        <p className="card-text">Nationality</p>
                        <p className="card-text">Biography</p>
                        <p className="card-text">Accomplishments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
