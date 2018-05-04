import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Player List</h1>
      <Link to="/">Home</Link> | <Link to="/newplayer">Add Player</Link> | <Link to="/playerinfo">Player Info</Link>
      <h2>{new Date().toLocaleTimeString(setInterval(1000))}</h2>

    </div>
  );
}

export default Header;
