import React, { useEffect, useState } from "react";
import DelayLink from "./testing";
import {Link, useLocation, useHistory, useNavigate} from "react-router-dom";

function GoogleApi(set){ 

    function componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }

  useEffect(() => componentDidMount());


    const [place, setPlace] = useState('');
    const [pid, setPid] = useState('');
    const [results, setResults] = useState([]);
    const history = useHistory();
    const [show, setShow] = useState(false);
    const [placeholder, setPlaceholder] = useState('');


    const handleSearch = async e => {
        set(place);
        e.preventDefault();
        if (place === '') return ;
        console.log("Search is actvated")

        //set the response to place (global)
        // setResponse(place);

        history.push('/summary');
    }
   

    return(
        <body>
            <header >
                <img class="image" src={require('./Picture1.png')}  alt="photo of logo" />
            </header>
            <div id="parent">
                <div>
                    <h1 id="blurb" className="shorten" >We are excited that you want to learn 
                        more about your surroundings!</h1>
                    <div>
                        <h3 id="blurbsmaller" className="shorten">To start, please enter a location or use your current location:</h3>
                    </div>
                    <br />
                    <form onSubmit={handleSearch}  id="blurbsmallerForm" >
                        <input type="text" class="inputText" value={place} placeholder={placeholder} onChange={e => {setPlace(e.target.value); }}/>
                        
                        {/* <Link to={{
                            pathname:"Summary",
                            data:place
                        }}> */}
                        <input type="submit" id="inputLoc" value="Set to Current Location..." onClick={()=>{setShow(!show); 
                            setPlaceholder('UBC')}}/>
                            {/* </Link>  */}
                        
                        
                    </form>
                </div>
                    
                <div>
                    <img src={require("./location.png")} className="photoImageMap" alt="image of map" />
                </div>
            </div>
          
            <p id="horiz"></p>
<hr />
            {show && <div >
                <h1>Here is a list of places to explore near you:</h1>
                <div>
                    <h2>Sun Tower</h2>
                    <button id="buttonList" value={place} onClick={e => { const value = 'sun tower'; setPlace("sun tower"); console.log(value); set(value); history.push('/summary');}}>Learn More</button>
                </div>

                <div id="listGroup">
                    <h2>Dominion Building</h2>
                    <button id="buttonList" value={place} onClick={e => { const value = 'dominion building'; setPlace('dominion building'); console.log(value); set(value); history.push('/summary');}}>Learn More</button>
                </div>

                <div id="listGroup">
                    <h2>Pacific Central Station</h2>
                    <button id="buttonList" value={place} onClick={e => { const value = 'pacific central station'; setPlace('pacific central station'); console.log(value); set(value); history.push('/summary');}}>Learn More</button>
                </div>

                <div id="listGroup">
                    <h2>Bessborough Armoury</h2>
                    <button id="buttonList" value={place} onClick={e => { const value = 'bessborough armoury'; setPlace('bessborough armoury'); console.log(value); set(value); history.push('/summary');}}>Learn More</button>
                </div>
            </div>}

        </body>
    )
}

export default GoogleApi;