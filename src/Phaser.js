import React, { useEffect, useRef } from 'react';
import Phaser from 'phaser';

const PhaserComponent = () => {
  const phaserRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: phaserRef.current,
      width: 300,
      height: 300,
      backgroundColor: '#87CEEB',
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { x: 0, y: 0 },
          debug: false,
        },
      },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const game = new Phaser.Game(config);

    let ball;

    function preload() {
      this.load.image('ball', 'assets/red_ball.png');
    }

    function create() {
        
        ball = this.add.circle(150, 150, 15, 0xff0000); 
        this.physics.add.existing(ball);
      
        
        ball.body.setCollideWorldBounds(true);
        ball.body.setBounce(1);
        ball.body.setVelocity(100, 100);
      
        
        window.addEventListener('moveBall', (event) => {
          const { detail } = event;
      
         
          switch (detail) {
            case 'top-left':
              ball.body.setVelocity(-150, -150);
              break;
            case 'top':
              ball.body.setVelocity(0, -150);
              break;
            case 'top-right':
              ball.body.setVelocity(150, -150);
              break;
            case 'left':
              ball.body.setVelocity(-150, 0);
              break;
            case 'right':
              ball.body.setVelocity(150, 0);
              break;
            case 'bottom-left':
              ball.body.setVelocity(-150, 150);
              break;
            case 'bottom':
              ball.body.setVelocity(0, 150);
              break;
            case 'bottom-right':
              ball.body.setVelocity(150, 150);
              break;
            default:
              break;
          }
        });
      }
      
    function update() {
      
    }

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={phaserRef}></div>;
};

export default PhaserComponent;
