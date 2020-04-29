import React, { Component } from 'react';
import { Input, Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

		const signInOut = username ? (
			<Menu.Item name="Logout" active={activeItem === 'Logout'} onClick={this.handleItemClickSignOut} />
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
				<Menu borderless size="small" color="olive">
					<Menu.Item>
						<img src="../assets/farmlogo.png" alt="logo" />
					</Menu.Item>

					<Menu.Item
						name="Farm on Wheels"
						active={activeItem === 'Farm on Wheels'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item name="Categories" active={activeItem === 'Categories'} onClick={this.handleItemClick} />
					<Menu.Item
						as={Link}
						to="/producers"
						name="Producers"
						active={activeItem === 'Producers'}
						onClick={this.handleItemClick}
					/>
					<Menu.Item>
						<Input icon="search" placeholder="Search..." />
					</Menu.Item>
					<Menu.Menu position="right">
						<Menu.Item
							name="Register Seller Account"
							active={activeItem === 'Register Seller Account'}
							onClick={this.handleItemClick}
						/>
						<Menu.Item
							name="Register Buyer Account"
							active={activeItem === 'Register Buyer Account'}
							onClick={this.handleItemClick}
						/>
						{signInOut}
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
