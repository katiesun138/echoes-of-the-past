import './App.css';
import Summary from './Summary';
import GoogleApi from './GoogleApi';
import Start from './Start';
import {useState} from "react";
import {Route, Link, Router} from 'react-router-dom';

function App() {
  const [response, setResponse] = useState('');

  function setState(data){
    setResponse(data);
    console.log(data);
  }

  return (
    <div className="App">
      {/* <Router> */}
        <Route exact path='/' component={Start}/>
        <Route exact path='/summary' component={() => Summary(response)}/>
        <Route exact path='/googleapi' component={()=>GoogleApi(setState) } />
        {/* <Route exact path='/googleapi' component={()=>GoogleApi(setResponse) }/> */}
{/* {console.log("RESPONSE ***** ")}
{console.log(response)} */}
      {/* </Router> */}
    </div>
  );
}

export default App;
