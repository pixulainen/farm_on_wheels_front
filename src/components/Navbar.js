import React, { Component, Fragment } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Search from './Search';
export default class Navbar extends Component {
	state = { activeItem: 'Farm on Wheels' };
	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	handleItemClickSignOut = (e, { name }) => {
		this.setState({
			activeItem: name
		});

		this.props.signOut();
	};

	render() {
		const { cart, username } = this.props;
		const { activeItem } = this.state;

		const signInOut = () =>
			username ? (
				<Fragment>
					<Menu.Item
						name="Profile"
						onClick={this.handleItemClick}
						active={activeItem === 'Profile'}
						as={Link}
						to="/buyer_profile"
					/>
					<Menu.Item name="Logout" active={activeItem === 'Logout'} onClick={this.handleItemClickSignOut} />
				</Fragment>
			) : (
				<Menu.Item
					as={Link}
					to="/login"
					name="Login"
					active={activeItem === 'Login'}
					onClick={this.handleItemClick}
				/>
			);
		return (
			<div>
				<Menu stackable borderless size="small" color="olive">
					<Menu.Item>
						<img src="../assets/farmlogo.png" alt="logo" />
					</Menu.Item>

					<Menu.Item
						name="Farm on Wheels"
						active={activeItem === 'Farm on Wheels'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={Link}
						to="/categories"
						name="Categories"
						active={activeItem === 'Categories'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						as={Link}
						to="/producers"
						name="Producers"
						active={activeItem === 'Producers'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item>
						<Search />
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item
							name="Register Seller Account"
							active={activeItem === 'Register Seller Account'}
							onClick={this.handleItemClick}
						/>
						<Menu.Item
							as={Link}
							to="/buyersignup"
							name="Register Buyer Account"
							active={activeItem === 'Register Buyer Account'}
							onClick={this.handleItemClick}
						/>
						{signInOut()}
						<Menu.Item
							as={Link}
							to="/cart"
							name="cart"
							active={activeItem === 'cart'}
							onClick={this.handleItemClick}
						>
							<Icon name="cart" size="large" bordered />
							<span>{cart.length}</span>
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			</div>
		);
	}
}
