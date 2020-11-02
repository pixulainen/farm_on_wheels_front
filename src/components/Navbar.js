import React, { useState, Fragment } from 'react';
import { Menu, Icon } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import Search from './Search';
import { connect } from 'react-redux';

const Navbar = ({ currentUser, cart, signOut }) => {
	const [ activeItem, setActiveItem ] = useState('Farm on Wheels');
	const handleItemClick = (e, { name }) => setActiveItem(name);

	const handleItemClickSignOut = (e, { name }) => {
		setActiveItem(name);
		signOut();
	};

	const signInOut = () =>
		currentUser ? (
			<Fragment>
				<Menu.Item
					name='Profile'
					onClick={handleItemClick}
					active={activeItem === 'Profile'}
					as={Link}
					to='/buyer_profile'
				/>
				<Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={handleItemClickSignOut} />
			</Fragment>
		) : (
			<Menu.Item as={Link} to='/login' name='Login' active={activeItem === 'Login'} onClick={handleItemClick} />
		);
	return (
		<div>
			<Menu stackable borderless size='small' color='olive'>
				<Menu.Item>
					<img src='../assets/farmlogo.png' alt='logo' />
				</Menu.Item>

				<Menu.Item
					name='Farm on Wheels'
					active={activeItem === 'Farm on Wheels'}
					onClick={handleItemClick}
					as={Link}
					to='/'
				/>
				<Menu.Item
					as={Link}
					to='/categories'
					name='Categories'
					active={activeItem === 'Categories'}
					onClick={handleItemClick}
				/>
				<Menu.Item
					as={Link}
					to='/producers'
					name='Producers'
					active={activeItem === 'Producers'}
					onClick={handleItemClick}
				/>
				<Menu.Item>
					<Search />
				</Menu.Item>
				<Menu.Menu position='right'>
					<Menu.Item
						name='Register Seller Account'
						active={activeItem === 'Register Seller Account'}
						onClick={handleItemClick}
					/>
					<Menu.Item
						as={Link}
						to='/buyersignup'
						name='Register Buyer Account'
						active={activeItem === 'Register Buyer Account'}
						onClick={handleItemClick}
					/>
					{signInOut()}
					<Menu.Item
						as={Link}
						to='/cart'
						name='cart'
						active={activeItem === 'cart'}
						onClick={handleItemClick}
					>
						<Icon name='cart' size='large' bordered />
						<span>{cart.length}</span>
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		</div>
	);
};
const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});
export default connect(mapStateToProps)(Navbar);
