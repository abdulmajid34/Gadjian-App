// import logo from './logo.svg';
import './App.css';
import PersonelList from './pages/PersonelList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dash from './template/Dash';
import Beranda from './pages/Beranda';
import DailyAttendance from './pages/DailyAttendance';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/list">
            <PersonelList />
          </Route>
          <Route exact path="/daily">
            <DailyAttendance />
          </Route>
          <Route exact path="/">
            <Beranda />
            {/* <Dash /> */}
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
