import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import API from '../../API';
export default class BuyerSignUpForm extends Component {
	state = {
		username: '',
		password: '',
		email: '',
		first_name: '',
		last_name: '',
		phone_number: ''
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();

		API.signUp(this.state).then((json) => {
			console.log(json);
			this.props.signIn(json.username, json.token);
		});
	};
	render() {
		return (
			<div>
				<Grid textAlign="center" style={{ height: '80vh' }} verticalAlign="middle">
					<Grid.Column style={{ maxWidth: 550 }}>
						<Header as="h2" color="teal" textAlign="center">
							Register
						</Header>
						<Form onSubmit={this.handleSubmit}>
							<Segment>
								<Form.Input
									onChange={this.handleChange}
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Username"
									name="username"
								/>
								<Form.Input
									onChange={this.handleChange}
									fluid
									icon="mail outline"
									iconPosition="left"
									placeholder="Email"
									name="email"
								/>
								<Form.Input
									onChange={this.handleChange}
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									name="password"
								/>
								<Form.Input
									onChange={this.handleChange}
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Name"
									name="first_name"
								/>
								<Form.Input
									onChange={this.handleChange}
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Last Name"
									name="last_name"
								/>
								<Form.Input
									onChange={this.handleChange}
									fluid
									icon="phone"
									iconPosition="left"
									placeholder="Phone Number"
									name="phone_number"
								/>
								<Button type="submit" basic color="olive" positive fluid size="large">
									Register
								</Button>
							</Segment>
						</Form>
						<Header as="h3" color="teal" textAlign="center">
							Registered?
						</Header>
						`{' '}
						<Button positive as={Link} to="/login">
							Log In!
						</Button>`
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}
