import React from 'react';
import { Switch, Route } from 'react-router-dom';

import KegList from './KegList/KegList';


function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={KegList} />
      </Switch>
    </div>
  );
}

export default App;
