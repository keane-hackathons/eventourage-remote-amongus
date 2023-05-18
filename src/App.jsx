import React, { useEffect, useRef } from "react";
import Phaser from 'phaser'
import MyGame from './phaser/scene'

export default function App() {
  const isFirstLoad = useRef(true);

  const config = {
    type: Phaser.AUTO,
    parent: "amongus",
    width: 800,
    height: 600,
    scene: MyGame
  };

  useEffect(() => {
    if (isFirstLoad.current === true) {
      new Phaser.Game(config);
    }

    return () => {
      isFirstLoad.current = false;
    };
  }, []);

  return <div id="amongus" />;
}
