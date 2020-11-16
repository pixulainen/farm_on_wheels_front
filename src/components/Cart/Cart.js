import React, { Component } from 'react';
import { Table, Segment, Divider, Header, Button, Icon, Container } from 'semantic-ui-react';
import ProductCell from './ProductCell';
import API from '../../API';
import { connect } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';

class Cart extends Component {
	renderItems() {
		const { cartItems } = this.props;
		return cartItems.map((product) => {
			return <ProductCell product={product} {...product} key={product.id} />;
		});
	}

	render() {
		const { cart, username, emptyCart, total } = this.props;
		const SubmitOrder = () => {
			API.PostOrder(cart, username, total());
			console.log(cart, username);
			emptyCart();
		};

		return (
			<Container text>
				{console.log(this.props.cartItems)}
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
						{this.renderItems()}
					</Table>
					<Header floated='right'> Total: £0 </Header>
					<Divider />
					<br />
					<br />
					<Button floated='right' color='olive' circular>
						<Icon name='add to cart' />
						Checkout
					</Button>
					<Button floated='left' color='red' circular onClick={() => this.props.clearCart()}>
						<Icon name='cart' />
						Empty Cart
					</Button>
				</Segment>
			</Container>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	clearCart: () => dispatch(clearCart()),
});
const mapStateToProps = ({ cart }) => ({
	cartItems: cart.cartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
