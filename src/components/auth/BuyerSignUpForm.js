import React, { useState } from 'react';
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import API from '../../API';
import { signIn } from '../../utils/auth';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

const BuyerSignUpForm = ({ setCurrentUser }) => {
	const [ value, setValue ] = useState({
		username: '',
		password: '',
		email: '',
		first_name: '',
		last_name: '',
		phone_number: '',
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
		API.signUp(value).then((json) => {
			signIn(json.token);
			setCurrentUser(json.username);
		});
	};
	return (
		<div>
			<Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
				<Grid.Column style={{ maxWidth: 550 }}>
					<Header as='h2' color='teal' textAlign='center'>
						Register as a customer
					</Header>
					<Form onSubmit={handleSubmit}>
						<Segment>
							<Form.Input
								onChange={handleChange}
								fluid
								icon='user'
								iconPosition='left'
								placeholder='Username'
								name='username'
							/>
							<Form.Input
								onChange={handleChange}
								fluid
								icon='mail outline'
								iconPosition='left'
								placeholder='Email'
								name='email'
							/>
							<Form.Input
								onChange={handleChange}
								fluid
								icon='lock'
								iconPosition='left'
								placeholder='Password'
								type='password'
								name='password'
							/>
							<Form.Input
								onChange={handleChange}
								fluid
								icon='user'
								iconPosition='left'
								placeholder='Name'
								name='first_name'
							/>
							<Form.Input
								onChange={handleChange}
								fluid
								icon='user'
								iconPosition='left'
								placeholder='Last Name'
								name='last_name'
							/>
							<Form.Input
								onChange={handleChange}
								fluid
								icon='phone'
								iconPosition='left'
								placeholder='Phone Number'
								name='phone_number'
							/>
							<Button type='submit' basic color='olive' positive fluid size='large'>
								Register
							</Button>
						</Segment>
					</Form>
					<Header as='h3' color='teal' textAlign='center'>
						Registered?
					</Header>
					`{' '}
					<Button positive as={Link} to='/login'>
						Log In!
					</Button>`
				</Grid.Column>
			</Grid>
		</div>
	);
};
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(BuyerSignUpForm);
