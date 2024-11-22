import './App.css';
import PhaserComponent from './Phaser';

function App() {
  const handleButtonClick = (position) => {
    window.dispatchEvent(new CustomEvent('moveBall', { detail: position }));
  };

  return (
    <div className="App">
      <div className="grid">
        <button onClick={() => handleButtonClick('top-left')}>Top Left</button>
        <button onClick={() => handleButtonClick('top')}>Top</button>
        <button onClick={() => handleButtonClick('top-right')}>Top Right</button>
        <button onClick={() => handleButtonClick('left')}>Left</button>
        <div className="phaser-container">
          <PhaserComponent />
        </div>
        <button onClick={() => handleButtonClick('right')}>Right</button>
        <button onClick={() => handleButtonClick('bottom-left')}>Bottom Left</button>
        <button onClick={() => handleButtonClick('bottom')}>Bottom</button>
        <button onClick={() => handleButtonClick('bottom-right')}>Bottom Right</button>
      </div>
    </div>
  );
}

export default App;
