import React from "react";
import { DuckSprite } from "./DuckSprite.js";

// a React "function component"
const GameScreen = (props) => {
  console.log(props)
  return (
    <div className="screen gameScreen">
      <DuckSprite 
      duckClick={props.duckClick}
      />
    </div>
  )
};

export {
  GameScreen
}