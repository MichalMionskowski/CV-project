import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
  emptyValues = {
      userName: '',
      password: '',
  };

  constructor(props) {
    super(props);
    this.state = {
        details: this.emptyValues     
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }




  onChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    let details = {...this.state.details};
    details[name] = value;
    this.setState({details});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { details} = this.state;
    console.log(details);
    fetch('/api/user', {   
      method : 'POST',
      headers: {
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify(details)
    });

    this.props.history.push("/")
     
  }

  render() {
    const { details} = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              Login
            </h3>
          </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">User Name:</label>
                <input type="text" class="form-control" name="userName"  value={details.userName} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="title">Password:</label>
                <input type="text" class="form-control" name="password"  value={details.password}  onChange={this.onChange} placeholder="Password" />
              </div>
              <div class="form-group">
              </div>
              <button type="submit" class="btn btn-default">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;