import React, { ReactElement, useContext, useEffect, useState } from 'react';
import './App.css';
import { HttpClient } from './core/services/HttpClient';

const HttpModule = React.createContext(HttpClient.getInstance());

function App(): ReactElement {
  const [games, setGames] = useState([]);
  const http = useContext(HttpModule);

  useEffect(() => {
    http.get('https://api.rawg.io/api/games?key=80c95efc92c642f1a869a9e0937be512').subscribe(
      { next: (res: any) => setGames(res.results) }
    );
  }, [])

  function loopGames(games: any[]): any {

    const loop = games.map(game => {
      const style = {
        backgroundImage: `url(${game.background_image})`
      }
      return (
        <div key={game.id}>
          <div className='game' style={style}>
          </div>
          <div className='game-info'>
            {game.name}
          </div>
        </div>)
    });
    return <div className='game-container'>{loop}</div>;
  }

  return (
    <div className="App">
      {loopGames(games)}
    </div>
  );
}

export default App;
