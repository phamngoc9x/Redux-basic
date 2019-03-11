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
          <h3>Du lieu lay ra trong store</h3>
          {this.props.dl}
        </header>
        <New/>
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
