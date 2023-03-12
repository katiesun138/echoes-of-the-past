import React from "react";

function Start(){
    return(
        <body>
            
            <div>
                <h3 className="title">echoes of the past</h3>
                <h2 className="subTitle">a new way to learn, explore, and connect with your city</h2>
            </div>

            <div>
                <h2 id="blurb">Explore the historical roots of your local community with suggested music.<br/>
                    Choose a location or get updates as you move. </h2>
            </div>

            <div className="button-grp">
                <a href="./Summary">
                    <button id="inputLoc">Input Location</button>
                </a>
                
                <a href="./GoogleApi">
                    <button id="liveLoc">Live Location</button>
                </a>
            </div>
        </body>
    )
}

export default Start;