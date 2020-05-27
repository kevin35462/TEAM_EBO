import React from "react";
import { DuckSprite } from "./DuckSprite.js";


const getDuckPosition = () => {
  const newGrassArea = 331;
  return newGrassArea*Math.random();
}

// a React "function component"
const GameScreen = (props) => {
  console.log(props)
  let duckShouldMove= false;
  setTimeout(
    ()=>{
      duckShouldMove= true;
    },
    0.2
  ) 
  return (
    <div className="screen gameScreen">
      <DuckSprite className={duckShouldMove ? "duckMove":""}
      duckClick={props.duckClick}
      style={{
        top: getDuckPosition(),
        }}
      />
      <div className= "duckhuntscore">{props.currentScore}</div>
  </div>
  )
};

export {
  GameScreen
}