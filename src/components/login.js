import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'
import {login} from "../redux/actions/auth";

class Login extends Component {


  login() {
    if (this.refs.privateKey.value === "") {
      alert("Cannot empty");
      return;
    }
    let data = {
      privateKey: this.refs.privateKey.value,
    };

    this.props.dispatch(login(data))
  }

  render() {
    if (this.props.reducer.publicKey) {
      console.log('REDIRECT TO DASHBOARD')
      // this.props.router.push('/dashboard')
    }
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">

            <div className="col-md-6 offset-3">
              <form className="form-signin">
                <div className="row">
                  <div className="col-md-8">
                    <span className="form-signin-header-title">Welcome Back</span>
                  </div>
                  <div className="col-md-4 text-right">
                    <span>or </span>
                    <a href="/register">Register</a>
                  </div>

                </div>
                <div className="form-signin-header-border"/>
                <div className="form-group">
                  <label className="lable-PrivateKey">PrivateKey</label>
                  <input type="text" className="form-control" id="PrivateKey" ref="privateKey" placeholder="PrivateKey"
                         required=""/>
                </div>
                <button className="btn btn-lg btn-success btn-block" type="button" onClick={() => this.login()}>Login
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>

    )
  }
}

Login = connect(function (state) {
  return {...state}
})(Login);

export default Login;