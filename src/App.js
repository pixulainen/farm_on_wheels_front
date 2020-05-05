import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/auth/LoginForm';
import Cart from './components/Cart/Cart';
import API from './API';
import './App.css';
import BuyerProfilePage from './components/Buyer/BuyerProfilePage';
import BuyerSignupForm from './components/auth/BuyerSignUpForm';
// import SellerSignUpForm from './components/auth/SellerSignUpForm';
import ProducersPageComponent from './components/producers_page/ProducersPageComponent';
import ProducerDetails from './components/producers_page/ProducerDetails';
import CategoriesPage from './components/Categories/CategoriesPage';
class App extends Component {
	state = {
		cart: [],
		total: 0,
		username: null
	};

	addToCart = (product, count = 1) => {
		const existingProduct = this.state.cart.find((p) => p.id === product.id);
		let updatedCart;

		if (existingProduct) {
			existingProduct.count++;
			existingProduct.stock++;
			updatedCart = this.state.cart;
		} else {
			const newProduct = { ...product, count: count, stock: count };
			updatedCart = [ ...this.state.cart, newProduct ];
		}
		this.setState({ cart: updatedCart });
	};
	removeFromCart = (productId) => {
		this.setState({
			cart: this.state.cart.filter((p) => p.id !== productId)
		});
	};

	total = () => {
		const total = this.state.cart.map((item) => {
			const price = item.price_kg ? item.price_kg : item.price_unit;
			let total = item.count * price;
			return total;
		});

		const sum = total.reduce((a, b) => a + b, 0);

		return sum;
	};

	emptyCart = () => {
		this.setState({
			cart: []
		});
	};
	signIn = (username, token) => {
		this.setState({
			username
		});
		localStorage.setItem('token', token);
		// this.props.history.push('/buyer_profile');
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
				<Route
					exact
					path="/buyer_profile"
					render={(props) => <BuyerProfilePage username={this.state.username} />}
				/>

				<Route
					exact
					path="/cart"
					render={() => (
						<Cart
							removeFromCart={this.removeFromCart}
							cart={this.state.cart}
							username={this.state.username}
							emptyCart={this.emptyCart}
							total={this.total}
						/>
					)}
				/>

				{/* <Route exact path="/sellersignup" render={SellerSignUpForm} /> */}
				<Route exact path="/buyersignup" render={() => <BuyerSignupForm />} />
				<Route exact path="/producers" render={() => <ProducersPageComponent />} />
				<Route exact path="/categories" render={() => <CategoriesPage />} />

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
