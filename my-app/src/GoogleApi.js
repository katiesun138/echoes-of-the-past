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
        <div>
            <h1>Welcome to the GoogleApi page</h1>
            <div>
                <h3>Tracking your location...</h3>
            </div>
            <br />
            <form id="currLoc" onSubmit={handleSearch} >
                <input type="text" value={place} placeholder={placeholder} onChange={e => {setPlace(e.target.value); }}/>
                 
                 {/* <Link to={{
                    pathname:"Summary",
                    data:place
                }}> */}
                  <input type="submit" value="Set to Current Location..." onClick={()=>{setShow(!show); 
                    setPlaceholder('UBC')}}/>
                    {/* </Link>  */}
                
                
            </form>

<hr />
            {show && <div >
                <div id="listGroup">
                    <h2 >Sun Tower</h2>
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

        </div>
    )
}

export default GoogleApi;