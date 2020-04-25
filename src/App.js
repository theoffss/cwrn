import React from 'react';
import { Switch,  Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component'
import ShopPage from './components/pages/shop/shop.component'

import './App.css';

function App() {
  return (
    <div>
      <Switch>
       <Route exact path='/' component= {HomePage} />
       <Route exact path='/shop' component= {ShopPage} />
       </Switch>
    </div>
  );
}

export default App;
