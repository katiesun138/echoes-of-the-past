import React from "react";

function Start(){
    return(
        <div>
            <div>
                <h3 className="header">echoes of the past</h3>
                <h2 className="subHeader">a new way to learn, explore, and connect with your city</h2>
            </div>

            <div>
                <h2 id="blurb">Explore the historical roots of your local community with suggested music.<br/>
                    Choose a location or get updates as you move. </h2>
            </div>

            <div>
                <a href="./GoogleApi">
                    <button>Input Location</button>
                </a>
                
                <a href="./Summary">
                    <button>Live Location</button>
                </a>
            </div>
        </div>
    )
}

export default Start;