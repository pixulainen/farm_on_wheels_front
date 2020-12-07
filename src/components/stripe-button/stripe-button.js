import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import { clearCart } from '../../redux/cart/cart.actions';

const StripeCheckoutButton = ({ children, price, clearCart, submitOrder }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51GqQn2Eq4mmiaBlttJMcAL8KIEEJtBYnH58gLiwYoxTvaMm0GRgWvnfm9JspWhvngfdg6IKLmzzU5Zh13yW599Oy00ZisT3vPn';
	const onToken = (token) => {
		console.log(token);
		alert('Payment Succesful');
		submitOrder(token);
		clearCart();
	};
	return (
		<StripeCheckout
			currency='GBP'
			shippingAddress
			billingAddress
			label='Pay Now'
			name='Farm on Wheels'
			image='../../assets/farmlogo.png'
			description={`Your total is £${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
			ComponentClass='div'
		>
			{children}
		</StripeCheckout>
	);
};
const mapDispatchToProps = (dispatch) => ({
	clearCart: () => dispatch(clearCart()),
});
export default connect(null, mapDispatchToProps)(StripeCheckoutButton);
