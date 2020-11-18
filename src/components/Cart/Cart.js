import React from 'react';
import { Table, Segment, Divider, Header, Button, Icon, Container } from 'semantic-ui-react';
import ProductCell from './ProductCell';
import API from '../../API';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';

const Cart = ({ cartItems, currentUser, clearCart }) => {
	const renderItems = () => {
		return cartItems.map((product) => <ProductCell product={product} {...product} key={product.id} />);
	};
	const total = () =>
		cartItems.reduce(
			(accumulator, item) => accumulator + item.quantity * (item.price_kg ? item.price_kg : item.price_unit),
			0,
		);

	const SubmitOrder = () => {
		API.PostOrder(cartItems, currentUser, total());
		clearCart();
	};
	return (
		<Container text>
			<Segment basic celled='true' padded>
				<Table celled compact definition>
					<Table.Header fullWidth>
						<Table.Row>
							<Table.HeaderCell>Name</Table.HeaderCell>
							<Table.HeaderCell>Description</Table.HeaderCell>
							<Table.HeaderCell>Quantity</Table.HeaderCell>
							<Table.HeaderCell>Price</Table.HeaderCell>
							<Table.HeaderCell>Total</Table.HeaderCell>
							<Table.HeaderCell>Remove</Table.HeaderCell>
						</Table.Row>
					</Table.Header>
					{renderItems()}
				</Table>
				<Header floated='right'> Total: £{total()} </Header>
				<Divider />
				<br />
				<br />
				<Button floated='right' color='olive' circular onClick={() => SubmitOrder()}>
					<Icon name='add to cart' />
					Checkout
				</Button>
				<Button floated='left' color='red' circular onClick={() => clearCart()}>
					<Icon name='cart' />
					Empty Cart
				</Button>
			</Segment>
		</Container>
	);
};
const mapDispatchToProps = (dispatch) => ({
	clearCart: () => dispatch(clearCart()),
});
const mapStateToProps = ({ cart, user }) => ({
	cartItems: cart.cartItems,
	currentUser: user.currentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
