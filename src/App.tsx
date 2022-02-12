import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HttpClient } from './core/services/HttpClient';

export class App extends React.Component {
  public games: any[] = [];
  private httpClient: HttpClient = new HttpClient();

  public componentDidMount(): void {
    this.httpClient.get('https://api.rawg.io/api/games?key=80c95efc92c642f1a869a9e0937be512').subscribe(
      { next: (res: any) => { this.games = res.results; this.forceUpdate() } }
    );
  }

  public loopGames(): any {
    const loop = this.games.map(game => {
      const style = {
        backgroundImage: `url(${game.background_image})`
      }
      return (<div className='game' style={style} />)
    });
    return <div className='game-container'>{loop}</div>;
  }

  public render() {
    return (
      <div className="App">
        {this.loopGames()}
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

}

export default App;
