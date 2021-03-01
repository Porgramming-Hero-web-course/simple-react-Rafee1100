import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import fakeData from './data/fakeData.json'
import Player from './Component/Player/Player';
import Singleplayer from './Component/Singleplayer/Singleplayer';

function App() {
  const [players,setPlayer]= useState([]);

  useEffect(()=>{
    setPlayer(fakeData)
  },[])
  
  const [playerCart,setPlayerCart]=useState([]);


  const handleAddPlayer = (play) =>{
    // console.log("player Added",play)
    const newPlayerCart = [...playerCart,play]
    setPlayerCart(newPlayerCart)
  }
  return (
    <div className="App">
      <h2 className="title">BPL 2021 Player Auction </h2>
      <nav>
        <a href="/Players">Player list</a>
        <a href="/Seasons">BPL All Time</a>
        <a href="/Pricing">Pricing</a>
        <a href="/Contact">Contact us</a>
        </nav>
      <div className="single-player">
      {
        players.map(player => <Player handleAddPlayer={handleAddPlayer} player={player} key={player.id}></Player>)
      }
      </div>
      <div className="added-player">
       <Singleplayer playerCart={playerCart}></Singleplayer>
      </div>
    </div>
  );
}

export default App;
