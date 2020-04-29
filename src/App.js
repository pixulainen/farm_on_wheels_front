import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/auth/LoginForm';
import Cart from './components/Cart/Cart';
import API from './API';

// import BuyerSignupForm from './components/auth/BuyerSignUpForm';
// import SellerSignUpForm from './components/auth/SellerSignUpForm';
import ProducersPageComponent from './components/producers_page/ProducersPageComponent';
import ProducerDetails from './components/producers_page/ProducerDetails';
class App extends Component {
	state = {
		cart: [],
		total: 0,
		username: null
	};
	addToCart = (product) => {
		const existingProduct = this.state.cart.find((p) => p.id === product.id);
		let updatedCart;

		if (existingProduct) {
			existingProduct.count++;
			updatedCart = this.state.cart;
		} else {
			const newProduct = { ...product, count: 1 };
			updatedCart = [ ...this.state.cart, newProduct ];
		}
		this.setState({ cart: updatedCart });
	};
	signIn = (username, token) => {
		this.setState({
			username
		});
		localStorage.setItem('token', token);
		this.props.history.push('/producers');
	};
	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token).then((loginData) => this.signIn(loginData.buyer, loginData.token));
		}
	}
	signOut = () => {
		this.setState({
			username: null
		});
		localStorage.removeItem('token');
	};
	render() {
		return (
			<div>
				<Navbar cart={this.state.cart} username={this.state.username} signOut={this.signOut} />
				<Route exact path="/login" render={(props) => <LoginForm signIn={this.signIn} {...props} />} />
				<Route exact path="/cart" render={() => <Cart cart={this.state.cart} />} />

				{/* <Route exact path="/sellersignup" render={SellerSignUpForm} /> */}
				{/* <Route exact path="/buyersignup" render={BuyerSignupForm} /> */}
				<Route exact path="/producers" render={() => <ProducersPageComponent />} />
				<Route
					exact
					path="/producers/:producerId"
					render={(routerProps) => <ProducerDetails addToCart={this.addToCart} />}
				/>
			</div>
		);
	}
}
export default withRouter(App);
