import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import KegList from './KegList/KegList';
import NewKeg from './NewKeg/NewKeg';


function App(){
  const appStyles = {
    fontFamily: 'sans-serif',
    backgroundColor: '#513E13',
    color: 'white',
    height: '100%'
  };
  return (
    <div style={appStyles}>
      <Header />
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKeg} />
      </Switch>
    </div>
  );
}

export default App;
