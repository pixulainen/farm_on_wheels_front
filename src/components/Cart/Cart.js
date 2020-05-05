import React, { Component } from 'react';
import { Table, Segment, Divider, Header, Button, Icon, Container } from 'semantic-ui-react';
import ProductCell from './ProductCell';
import API from '../../API';
export default class Cart extends Component {
	renderItems() {
		const { cart, removeFromCart } = this.props;
		return cart.map((product) => {
			return <ProductCell product={product} {...product} key={product.id} removeFromCart={removeFromCart} />;
		});
	}

	render() {
		const { cart, username, emptyCart, total } = this.props;
		const SubmitOrder = () => {
			API.PostOrder(cart, username);
			console.log(cart, username);
			emptyCart();
		};

		return (
			<Container text>
				<Segment basic celled="true" padded>
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
					<Header floated="right"> Total: £ {total()} </Header>
					<Divider />
					<br />
					<br />
					<Button floated="right" color="olive" circular onClick={SubmitOrder}>
						<Icon name="cart" />
						Checkout
					</Button>
					<Button floated="left" color="red" circular onClick={emptyCart}>
						<Icon name="add to cart" />
						Empty Cart
					</Button>
				</Segment>
			</Container>
		);
	}
}
