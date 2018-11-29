import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovie } from '../../utils/api';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      userName: '',
    };
    this.registerHandler = this.registerHandler.bind(this);
  }

  registerHandler(event) {
    console.log('this.state', this.state);
    this.setState({ userName: event.target.value });
  }
  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <div>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            onChange={event => this.setState({ userName: event.target.value })}
          />
          <input
            className="form-control"
            type="text"
            placeholder="email"
            onChange={event => this.setState({ email: event.target.value })}
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            onChange={event => this.setState({ password: event.target.value })}
          />
          <button type="button" onClick={this.registerHandler}>
            <Link to="/">Sign In</Link>
          </button>
          <div>{this.state.userName}</div>
        </div>
      </div>
    );
  }
}
export default SignIn;
