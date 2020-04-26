import React from 'react';
import { Switch,  Route } from 'react-router-dom';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
       <Route exact path='/' component= {HomePage} />
       <Route exact path='/shop' component= {ShopPage} />
       <Route exact path='/SignIn' component= {SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
