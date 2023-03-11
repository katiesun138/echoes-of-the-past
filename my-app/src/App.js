import logo from './logo.svg';
import './App.css';
import Summary from './Summary';
import GoogleApi from './GoogleApi';
import Start from './Start';
import {Route, Link, Router} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Router> */}
        <Route exact path='/' component={Start}/>
        <Route exact path='/summary' component={Summary}/>
        <Route exact path='/googleapi' component={GoogleApi}/>
      {/* </Router> */}
    </div>
  );
}

export default App;
