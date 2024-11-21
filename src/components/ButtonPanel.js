const ButtonPanel = ({ onButtonClick }) => {
    const buttonPositions = [
      { id: 1, x: 180, y: -50 }, // Top center
      { id: 2, x: 380, y: 50 },  // Top right
      { id: 3, x: 380, y: 180 }, // Right center
      { id: 4, x: 380, y: 310 }, // Bottom right
      { id: 5, x: 180, y: 410 }, // Bottom center
      { id: 6, x: -50, y: 310 }, // Bottom left
      { id: 7, x: -50, y: 180 }, // Left center
      { id: 8, x: -50, y: 50 },  // Top left
    ];
  
    return (
      <div style={{ position: 'relative', width: '400px', height: '400px', margin: '0 auto' }}>
        {buttonPositions.map((button) => (
          <button
            key={button.id}
            onClick={() => onButtonClick({ x: button.x + 200, y: button.y + 200 })}
            style={{
              position: 'absolute',
              left: `${button.x + 200}px`,
              top: `${button.y + 200}px`,
              width: '60px',
              height: '30px',
            }}
          >
            Button {button.id}
          </button>
        ))}
      </div>
    );
  };
  
  export default ButtonPanel;
  