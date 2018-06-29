import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header/Header';
import KegList from './KegList/KegList';
import NewKeg from './NewKeg/NewKeg';

import jerry from './../images/jerry.png';


function App(){
  const appStyles = {
    fontFamily: 'Helvetica, sans-serif',
    backgroundColor: '#513E13',
    color: 'white',
    height: '100%',
    position: 'relative',
  };
  const jerryStyles = {
    position: 'absolute',
    margin: 'auto',
    zIndex: '0',
    left: '0',
    right: '0'
  };
  return (
    <div style={appStyles}>
      <Header />
      <img style={jerryStyles} src={jerry} />
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKeg} />
      </Switch>
    </div>
  );
}

export default App;
