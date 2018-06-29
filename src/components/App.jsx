import React from 'react';
import { Switch, Route } from 'react-router-dom';

import KegList from './KegList/KegList';
import NewKeg from './NewKeg/NewKeg';


function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/newkeg' component={NewKeg} />
      </Switch>
    </div>
  );
}

export default App;
