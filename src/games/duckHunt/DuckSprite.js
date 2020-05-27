import React from 'react';


const DuckSprite = (props) => {
    console.log(props);
    return (
        <div className="DuckSprite" onClick={props.duckClick} style= {props.style}>

        </div>

    )
}
/*keyFrames
*/
export {
    DuckSprite
}