import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import boombox from './images/boombox.svg';
import Landing from './components/Landing';
import Library from './components/Library'
import Album from './components/Album';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header>
            <nav className="site-nav text-uppercase navbar navbar-expand-md navbar-dark">
              <div className="nav-links container-fluid">
                <Link to='/' className="logo-wrapper navbar-brand"><img src={boombox} className="nav-logo d-inline-block align-top" alt="logo" /><span className="nav-title"> Bloc Jams</span></Link>
                <Link to='/library' className="site-nav-link nav nav-link ml-auto">Library</Link>
              </div>
            </nav>
          </header>
            <div className="site-main">
              <main>
                <Route exact path="/" component={Landing} />
                <Route path="/library" component={Library} />
                <Route path="/album/:slug" component={Album} />
              </main>
            </div>
        </div>
    );
  }
}

export default App;
