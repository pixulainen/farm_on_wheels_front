import React from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Product from './Product';

const ProductsContainer = ({ products, handleClick }) => {
	const renderProducts = () => {
		return products.map((product) => {
			return <Product product={product} key={product.id} {...product} handleClick={handleClick} />;
		});
	};
	return (
		<div>
			<Segment textAlign='center' basic>
				<Card.Group stackable itemsPerRow='6'>
					{renderProducts()}
				</Card.Group>
			</Segment>
		</div>
	);
};
export default ProductsContainer;
