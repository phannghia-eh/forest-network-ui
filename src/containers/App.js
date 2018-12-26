import React, { Component } from 'react';
import {connect} from 'react-redux'
import Sidebar from '../components/Sidebar/Sidebar';
import Dashboard from  '../views/Dashboard/Dashboard';


class App extends Component{


    render() {
        return(
          <div className="container-fluid">
            <div className="row">
              <Sidebar/>
              <Dashboard/>
            </div>
          </div>
        )
    }
}

App = connect(function (state) {
    return {...state}
})(App);

export default App;