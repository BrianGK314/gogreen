import Dash from "./Dash"
import Market from "./Market";
import RealTimeData from "./RealTimeData";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProgressTracker from "./ProgressTracker";
import Offsetters from "./Offsetters";
import 'stream-browserify';
import 'querystring';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/">
            <Dash></Dash>
          </Route>

          <Route exact path="/market">
            <Market/>
          </Route>

          <Route exact path="/datastream">
            <RealTimeData/>
          </Route>

          <Route exact path="/progress">
            <ProgressTracker/>
          </Route>

          <Route exact path="/Offsetters">
            <Offsetters/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
