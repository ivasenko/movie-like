import React, { Component } from 'react';

export class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    signIn() {
        console.log('this.state', this.state);
    }
    render() {
        return (
            <div>
                <h2>Sign In</h2>
                <div>
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
                    <button type="button" onClick={() => this.signIn()}>
                        Sign In
                    </button>
                </div>
            </div>
        );
    }
}
export default SignIn;
