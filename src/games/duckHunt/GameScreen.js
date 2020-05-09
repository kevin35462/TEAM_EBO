import React from "react";
import { DuckSprite } from "./DuckSprite.js";

// a React "function component"
const GameScreen = (props) => {
  return (
    <div className="screen gameScreen">
      <DuckSprite />
    </div>
  )
};

export {
  GameScreen
}