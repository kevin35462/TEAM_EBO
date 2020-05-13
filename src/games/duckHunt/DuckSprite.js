import React from 'react';


const DuckSprite = () => {

  const duckClick = () => {
        console.log("I was Clicked");
    }

    return (
        <div className="DuckSprite" onClick = {duckClick}>

        </div>
    
    )
}
/*keyFrames
*/
export {
    DuckSprite
}