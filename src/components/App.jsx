import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';

import Header from './Header/Header';
import KegList from './KegList/KegList';
import NewKeg from './NewKeg/NewKeg';

import jerry from './../images/jerry.png';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: {}
    };
    this.handleAddingNewKeg = this.handleAddingNewKeg.bind(this);
    this.handleSellingPints = this.handleSellingPints.bind(this);
  }
  handleAddingNewKeg(newKeg) {
    let newKegId = v4();
    let newKegList = Object.assign({}, this.state.masterKegList, {
      [newKegId]: newKeg
    });
    this.setState({masterKegList: newKegList});
  }
  handleSellingPints(kegId) {
    let newKegList = Object.assign({}, this.state.masterKegList);
    newKegList[kegId].remaining--;
    this.setState({masterKegList: newKegList});
  }
  render() {
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
          <Route exact path='/' render={()=><KegList kegList={this.state.masterKegList} onSellingPint={this.handleSellingPints} />} />
          <Route path='/newkeg' render={()=><NewKeg onAddingNewKeg={this.handleAddingNewKeg}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
