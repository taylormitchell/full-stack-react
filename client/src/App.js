import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [things, setThings] = useState([]);

  console.log('derp')

  useEffect(() => {
    fetch('/api/movies')
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setThings(data)
      });
  }, []);

  return (
    <div className="App">
      <h1>Movies</h1>
      {things.map(thing => (
        <div key={thing.id}>
          <h2>{thing.title}</h2>
          <p>{thing.description}</p>
          </div>
      ))}
    </div>
  );
}

export default App;
