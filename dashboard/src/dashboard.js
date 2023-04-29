import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Needy from './NeedyPage';
import Donor from './DonorPage';
import Hospital from './HospitalPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container-fluid vh-100">
        <div className="row min-vh-100">
          <div className="col-2 sidebar-container">
            <div className="sidebar">
              <h3 className="sidebar-title">Dashboard</h3>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <a href="/needy" className="nav-link">Needy</a>
                </li>
                <li className="nav-item">
                  <a href="/donor" className="nav-link">Donor</a>
                </li>
                <li className="nav-item">
                  <a href="/hospital" className="nav-link">Hospital</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-10 main-content">
            <Switch>
              <Route path="/needy">
                <Needy />
              </Route>
              <Route path="/donor">
                <Donor />
              </Route>
              <Route path="/hospital">
                <Hospital />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
