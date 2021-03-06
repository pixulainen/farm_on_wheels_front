import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import API from '../../API';
import { signIn } from '../../utils/auth';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

const BuyerLoginForm = ({ setCurrentUser }) => {
	const [ value, setValue ] = useState({
		username: '',
		password: '',
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValue((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		API.sellerSignIn(value).then((loginData) => {
			signIn(loginData.token);
			setCurrentUser(loginData.seller);
		});
	};
	return (
		<div>
			<Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 450 }}>
					<Header as='h2' color='teal' textAlign='center'>
						Log-in to your seller account
					</Header>
					<Form onSubmit={handleSubmit}>
						<Segment>
							<Form.Input
								onChange={handleChange}
								fluid
								icon='user'
								iconPosition='left'
								placeholder='username'
								name='username'
							/>
							<Form.Input
								onChange={handleChange}
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='password'
								type='password'
								name='password'
							/>

							<Button type='submit' color='teal' fluid size='large'>
								Login
							</Button>
						</Segment>
					</Form>
					<Header as='h3' color='teal' textAlign='center'>
						Don't have an account yet?
					</Header>
					<Button color='violet' as={Link} to='/signup'>
						Sign Up!
					</Button>
				</Grid.Column>
			</Grid>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(BuyerLoginForm);
