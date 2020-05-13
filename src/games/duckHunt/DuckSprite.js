import React from 'react';


const DuckSprite = (props) => {
    console.log(props);
    return (
        <div className="DuckSprite" onClick={props.duckClick}>

        </div>

    )
}
/*keyFrames
*/
export {
    DuckSprite
}