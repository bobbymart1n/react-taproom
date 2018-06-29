import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import KegList from './KegList/KegList';
import NewKeg from './NewKeg/NewKeg';


function App(){
  const appStyles = {
    fontFamily: 'sans-serif',
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
