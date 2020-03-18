import React from 'react';
import {Provider} from 'react-redux'
import store from './store'
import Home from './components/Home/Home.js'
import Login from './components/Login/Login.js'
import {connect} from 'react-redux'
import './App.css';

function App(props) {
  return (
    <div className="App">
    {store.getState().login.auth ? 
    <Home/> :
  <Login/> }
    </div>
  );
}

const mapStateToProps = state => {
  console.log("App State:",state)
  return state
}
export default connect(mapStateToProps, {})(App)
