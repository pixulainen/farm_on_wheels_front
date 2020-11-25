import React, { useState } from 'react';
import { Card, Icon, Image, Button, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const Product = ({
	description,
	name,
	picture,
	quality,
	price_kg,
	price_unit,
	stock,
	product,
	addItem,
	buttonDisabled,
	handleClick,
	seller_id,
}) => {
	const [ count, setCount ] = useState(1);
	const price = price_kg ? `${price_kg}/kg` : `${price_unit}/unit`;
	const inStock = () => {
		if (stock <= 0) {
			return (
				<Button disabled color='teal' onClick={() => addItem(product, count)}>
					<Icon name='add to cart' />Sold out
				</Button>
			);
		}
		return (
			<Button color='teal' onClick={() => addItem(product, count)}>
				<Icon name='add to cart' />Add to cart
			</Button>
		);
	};
	return (
		<Card color='olive' onClick={() => buttonDisabled && handleClick(seller_id)}>
			<Image src={picture} fluid style={{ height: 150, objectFit: 'cover' }} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>Quality: {quality}</Card.Meta>
				<Card.Description>{description}</Card.Description>
				<Icon name='user' />
				Stock: {stock}
			</Card.Content>
			<Card.Content extra>
				<Icon name='pound' />
				{price}
			</Card.Content>
			{!buttonDisabled && (
				<React.Fragment>
					<Form.Field
						inline
						label='Quantity'
						control='input'
						type='number'
						min={1}
						max={stock}
						onChange={(e) => setCount(e.target.value)}
					/>
					<Card.Content extra>{inStock()}</Card.Content>
				</React.Fragment>
			)}
		</Card>
	);
};
const mapDispatchToProps = (dispatch) => ({
	addItem: (item, quantity) => dispatch(addItem(item, quantity)),
});
export default connect(null, mapDispatchToProps)(Product);
