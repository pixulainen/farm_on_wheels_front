import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import API from '../../API';

export default class LoginForm extends Component {
	state = {
		username: '',
		password: ''
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();

		API.buyerSignIn(this.state).then((loginData) => {
			this.props.signIn(loginData.buyer, loginData.token);
		});
	};
	render() {
		return (
			<div>
				<Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 450 }}>
						<Header as="h2" color="teal" textAlign="center">
							Log-in to your account
						</Header>
						<Form onSubmit={this.handleSubmit}>
							<Segment>
								<Form.Input
									onChange={this.handleChange}
									fluid
									icon="user"
									iconPosition="left"
									placeholder="username"
									name="username"
								/>
								<Form.Input
									onChange={this.handleChange}
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="password"
									type="password"
									name="password"
								/>

								<Button type="submit" color="teal" fluid size="large">
									Login
								</Button>
							</Segment>
						</Form>
						<Header as="h3" color="teal" textAlign="center">
							Don't have an account yet?
						</Header>
						<Button color="violet" as={Link} to="/signup">
							Sign Up!
						</Button>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}
