import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/auth/LoginForm';
import Cart from './components/Cart/Cart';
import API from './API';
import './App.css';
import BuyerProfilePage from './components/Buyer/BuyerProfilePage';
import BuyerSignupForm from './components/auth/BuyerSignUpForm';
import ProducersPageComponent from './components/producers_page/ProducersPageComponent';
import ProducerDetails from './components/producers_page/ProducerDetails';
import CategoriesPage from './pages/Categories/Categories';
import Homepage from './pages/Homepage/Homepage';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { signIn } from './utils/auth';
class App extends Component {
	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token).then((loginData) => {
				signIn(loginData.buyer, loginData.token);
				this.props.setCurrentUser(loginData.buyer);
			});
		}
	}

	render() {
		return (
			<div>
				<Navbar />
				<Route exact path='/' component={Homepage} />
				<Route
					exact
					path='/login'
					render={(props) => (this.props.currentUser ? <Redirect to='/' /> : <LoginForm />)}
				/>
				<Route exact path='/buyer_profile' render={(props) => <BuyerProfilePage />} />

				<Route exact path='/cart' render={() => <Cart />} />

				{/* <Route exact path="/sellersignup" render={SellerSignUpForm} /> */}
				<Route exact path='/buyersignup' render={() => <BuyerSignupForm signIn={this.signIn} />} />
				<Route exact path='/producers' render={() => <ProducersPageComponent />} />
				<Route exact path='/categories' render={() => <CategoriesPage />} />

				<Route exact path='/producers/:producerId' render={(routerProps) => <ProducerDetails />} />
			</div>
		);
	}
}
const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
