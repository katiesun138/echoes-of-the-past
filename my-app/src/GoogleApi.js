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
            <form onSubmit={handleSearch}  >
                <input type="text" value={place} onChange={e => {setPlace(e.target.value); }}/>
                 
                 {/* <Link to={{
                    pathname:"Summary",
                    data:place
                }}> */}
                  <input type="submit" value="Search"/>
                    {/* </Link>  */}
                
                
            </form>
            {/* <button onClick={()=>navigate('summary')}></button> */}
        
        </div>
    )
}

export default GoogleApi;