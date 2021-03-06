import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            loginErrors: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        const { username, password, } = this.state;

        axios
            .post("https://larryslawncare.herokuapp.com/sign_in",
            
                {
                    username: username,
                    password: password,
                },
            )
            .then(response => {
                
                if (response.data.username && response.data.jwt) {
                
                    this.props.handleSuccessfulAuth(response.data);
                    
                }
            })
            .catch(error => {
                console.log("login error", error);
                alert("Username or Password incorrect! Please try again.")
            });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                            type="username"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </Form.Group>
                    <Button id="adminButton" type="submit">Login</Button>
                </Form>
            </div>
        );
    }
}


