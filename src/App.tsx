import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { HttpClient } from './core/services/HttpClient';

function App() {
  const httpClient = new HttpClient();
  let games: any[] = [];

  useEffect(() => {
    httpClient.get('https://api.rawg.io/api/games?key=80c95efc92c642f1a869a9e0937be512').subscribe(
      {
        next: (res: any) => {
          console.log(res.results);
          games.push(res.results);
        }
      }
    );
  }, [])

  function loopGames(): any {
    const loop = games.map(game => {
      const style = {
        backgroundImage: `url(${game.background_image})`
      }
      return (<div className='game' style={style} />)
    });
    return <div className='game-container'>{loop}</div>;
  }

  return (
    <div className="App">
      {loopGames()}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
