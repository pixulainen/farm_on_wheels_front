import React, { Component } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class BuyerSignUpForm extends Component {
	state = {};
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
									onChange
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Username"
									name="username"
								/>
								<Form.Input
									// #<Buyer id: nil, username: nil, first_name: nil, last_name: nil, email: nil,
									//   password_digest: nil, phone_number: nil, created_at: nil, updated_at: nil>
									onChange
									fluid
									icon="mail outline"
									iconPosition="left"
									placeholder="Email"
									name="email"
								/>
								<Form.Input
									onChange
									fluid
									icon="lock"
									iconPosition="left"
									placeholder="Password"
									type="password"
									name="password"
								/>{' '}
								<Form.Input
									// #<Buyer id: nil, username: nil, first_name: nil, last_name: nil, email: nil,
									//   password_digest: nil, phone_number: nil, created_at: nil, updated_at: nil>
									onChange
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Name"
									name="name"
								/>
								<Form.Input
									// #<Buyer id: nil, username: nil, first_name: nil, last_name: nil, email: nil,
									//   password_digest: nil, phone_number: nil, created_at: nil, updated_at: nil>
									onChange
									fluid
									icon="user"
									iconPosition="left"
									placeholder="Last Name"
									name="lastname"
								/>{' '}
								<Form.Input
									// #<Buyer id: nil, username: nil, first_name: nil, last_name: nil, email: nil,
									//   password_digest: nil, phone_number: nil, created_at: nil, updated_at: nil>
									onChange
									fluid
									icon="phone"
									iconPosition="left"
									placeholder="Phone Number"
									name="phonenumber"
								/>
								<Button
									onClick
									type="submit"
									basic
									color="olive"
									content="Olive"
									positive
									fluid
									size="large"
								>
									Register
								</Button>
							</Segment>
						</Form>
						<Header as="h3" color="teal" textAlign="center">
							Registered?
						</Header>
						<Button positive as={Link} to="/login">
							Log In!
						</Button>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}
