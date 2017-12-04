import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Route, Link } from 'react-router-dom'
import classes from './App.css';
import Restaurants from './Restaurants/Restaurants';
import Weather from './Weather/Weather';
import Coupons from './Coupons/Coupons';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <header className={classes.Header}>
            <nav className={classes.Navigation}>
              <ul>
                <li><Link to='/' title='See restaurants in the area'>Restaurants</Link></li>
                <li><Link to='/weather' title='See weather this week'>Weather</Link></li>
                <li><Link to='/coupons' title='Send me a coupon for the hotel spa'>Coupons</Link></li>
              </ul>
            </nav>
          </header>
          <div className={classes.Container}>
            <Route path="/" exact component={Restaurants} />
            <Route path="/weather" component={Weather} />
            <Route path="/coupons" component={Coupons} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
