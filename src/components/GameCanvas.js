import React, { useEffect } from "react";
import Phaser from "phaser";

const GameCanvas = ({ setMoveBallCallback }) => {
  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: 300,
      height: 300,
      physics: {
        default: "arcade",
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false,
        },
      },
      scene: {
        preload,
        create,
        update,
      },
    };

    const game = new Phaser.Game(config);

    let ball;
    let direction = { x: 150, y: 150 };

    function preload() {
      this.load.image("ball", "path_to_red_ball.png"); // Or use Phaser's built-in graphics
    }

    function create() {
      // Add red ball
      ball = this.physics.add.sprite(150, 150, "ball").setCollideWorldBounds(true).setBounce(1);

      // Set initial velocity for bouncing
      ball.setVelocity(direction.x, direction.y);

      // Pass moveBall function to parent
      setMoveBallCallback((dir) => {
        switch (dir) {
          case "top":
            ball.setVelocity(0, -200);
            break;
          case "bottom":
            ball.setVelocity(0, 200);
            break;
          case "left":
            ball.setVelocity(-200, 0);
            break;
          case "right":
            ball.setVelocity(200, 0);
            break;
          default:
            break;
        }
      });
    }

    function update() {
      // Bouncing behavior is already handled by Phaser physics.
    }

    return () => {
      game.destroy(true);
    };
  }, [setMoveBallCallback]);

  return <div id="phaser-container"></div>;
};

export default GameCanvas;
