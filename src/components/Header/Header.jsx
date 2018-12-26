import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
           <div>
               <nav className="navbar navbar-custom navbar-fixed-top">
                   <div className="container-fluid">
                       <div className="navbar-header">
                           <a className="navbar-brand" href="/">Forest Network</a>
                       </div>
                       <div id="navbar" className="navbar-collapse collapse">

                       </div>
                   </div>
               </nav>
           </div>
        );
    }
}


Header = connect(function (state) {
    return {...state}
})(Header);

export default Header;