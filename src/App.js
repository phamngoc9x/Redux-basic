import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import New from './New';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <New/>
        </header>
        
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dl: state.num
  }
}
export default connect(mapStateToProps)(App);
