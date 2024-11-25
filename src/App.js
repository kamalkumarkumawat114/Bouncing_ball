import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';
import { gameConfig } from './config';
import './App.css';

function App() {
  const gameRef = useRef(null);

  useEffect(() => {
    gameRef.current = new Phaser.Game(gameConfig);

    return () => {
      if (gameRef.current) {
        gameRef.current.destroy(true);
      }
    };
  }, []);

  const handleButtonClick = (direction) => {
    const scene = gameRef.current?.scene.scenes[0];
    if (scene) {
      scene.bounceTowards(direction);
    }
  };

  return (
    <div className="game-container">
      <div className="top-buttons">
        <button onClick={() => handleButtonClick('topLeft')}>Top 1</button>
        <button onClick={() => handleButtonClick('topRight')}>Top 2</button>
      </div>

      <div className="middle-section">
        <div className="side-buttons left">
          <button onClick={() => handleButtonClick('leftTop')}>Left 1</button>
          <button onClick={() => handleButtonClick('leftBottom')}>Left 2</button>
        </div>

        <div id="phaser-container" className="phaser-container"></div>

        <div className="side-buttons right">
          <button onClick={() => handleButtonClick('rightTop')}>Right 1</button>
          <button onClick={() => handleButtonClick('rightBottom')}>Right 2</button>
        </div>
      </div>

      <div className="bottom-buttons">
        <button onClick={() => handleButtonClick('bottomLeft')}>Bottom 1</button>
        <button onClick={() => handleButtonClick('bottomRight')}>Bottom 2</button>
      </div>
    </div>
  );
}

export default App;
