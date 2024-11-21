import React, { useState } from "react";
import GameCanvas from "./components/GameCanvas";

function App() {
  const [moveBallCallback, setMoveBallCallback] = useState(() => () => {});

  const handleButtonClick = (direction) => {
    if (moveBallCallback) {
      moveBallCallback(direction);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
      <h1 style={{ textAlign: "center" }}>Bouncing Ball Game</h1>
      <div style={{ position: "relative", width: "600px", height: "600px" }}>
        {/* Phaser canvas in the center */}
        <div style={{ position: "absolute", top: "25%", left: "25%" }}>
          <GameCanvas setMoveBallCallback={setMoveBallCallback} />
        </div>
        {/* Buttons */}
        <button style={{ position: "absolute", top: "-20px", left: "50%", transform: "translateX(-50%)" }} onClick={() => handleButtonClick("top")}>
          Button 1
        </button>
        <button style={{ position: "absolute", top: "10%", left: "90%" }} onClick={() => handleButtonClick("top-right")}>
          Button 2
        </button>
        <button style={{ position: "absolute", top: "50%", left: "90%", transform: "translateY(-50%)" }} onClick={() => handleButtonClick("right")}>
          Button 3
        </button>
        <button style={{ position: "absolute", bottom: "10%", left: "90%" }} onClick={() => handleButtonClick("bottom-right")}>
          Button 4
        </button>
        <button style={{ position: "absolute", bottom: "-20px", left: "50%", transform: "translateX(-50%)" }} onClick={() => handleButtonClick("bottom")}>
          Button 5
        </button>
        <button style={{ position: "absolute", bottom: "10%", left: "-20px" }} onClick={() => handleButtonClick("bottom-left")}>
          Button 6
        </button>
        <button style={{ position: "absolute", top: "50%", left: "-20px", transform: "translateY(-50%)" }} onClick={() => handleButtonClick("left")}>
          Button 7
        </button>
        <button style={{ position: "absolute", top: "10%", left: "-20px" }} onClick={() => handleButtonClick("top-left")}>
          Button 8
        </button>
      </div>
    </div>
  );
}

export default App;
