import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

/*
import logo from './logo.svg';
import './App.css';
*/

import Create from './components/create.component';
import Index from './components/index.component';
import Home from './components/welcome.component';
import Places from './components/places.component';
import Hotels from './components/hotels.component';
import Profiles from './components/guide.component';
import photo from "./components/travel-logo-or-label-journey-tour-voyage-symbol-vector-20631733.jpg";

class App extends Component {
  render() {
    return (
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <img src= {photo} align="middle" width={80} height={100}/>
              <Link to={'/'} className="navbar-brand">Travelgram</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/home'} className="nav-link">Welcome</Link>
                  </li>

                  <li className="nav-item">
                    <Link to={'/places'} className="nav-link">Places</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/hotels'} className="nav-link">Hotels</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/guides'} className="nav-link">Profiles</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create'} className="nav-link">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link">Sign Up</Link>
                  </li>

                  <li className="nav-item">
                    <form className="navbar-form navbar-left" role="search">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" align="right"/>

                      <button type="submit" className="btn btn-default" align="right">Search</button>
                      </div>
                    </form>
                  </li>


                </ul>
              </div>
            </nav> <br/>
            <h2>Welcome to Travel Sri Lanka</h2> <br/>
            <Switch>
              <Route exact path = '/create' component = {Create}/>
              <Route exact path = '/index' component = {Index}/>
              <Route exact path = '/home' component = {Home}/>
              <Route exact path = '/places' component = {Places}/>
              <Route exact path = '/hotels' component = {Hotels}/>
              <Route exact path = '/guides' component = {Profiles}/>

            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
