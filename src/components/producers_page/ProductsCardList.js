import React, { Component } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Product from './Product';
export default class ProductsCardList extends Component {
	renderProducts() {
		return this.props.products.map((product) => {
			return <Product product={product} key={product.id} {...product} addToCart={this.props.addToCart} />;
		});
	}
	render() {
		const products = this.renderProducts();
		return (
			<Segment basic>
				<Card.Group>{products}</Card.Group>
			</Segment>
		);
	}
}
