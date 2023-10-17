import React, { Component } from 'react';
import { Link } from "react-router-dom";


class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    // You can add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset the form
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    const { username, password } = this.state;

    return (
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
        <Link to='/signup'>
        <button>
            signup
        </button>
        </Link>
      </div>
    );
  }
}

export default LoginForm;
