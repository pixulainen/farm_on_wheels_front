import React, { useState } from 'react';
import { Card, Icon, Image, Button, Form } from 'semantic-ui-react';

export default function Product({
	description,
	name,
	picture,
	quality,
	price_kg,
	price_unit,
	stock,
	addToCart,
	product
}) {
	const [ count, setCount ] = useState(1);
	const price = price_kg ? `${price_kg}/kg` : `${price_unit}/unit`;
	return (
		<Card color="olive">
			<Image src={picture} fluid style={{ height: 150, objectFit: 'cover' }} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>Quality: {quality}</Card.Meta>
				<Card.Description>{description}</Card.Description>
				<Icon name="user" />
				Stock: {stock}
			</Card.Content>
			<Card.Content extra>
				<Icon name="pound" />
				{price}
			</Card.Content>
			<Form.Field
				label="Quantity"
				control="input"
				type="number"
				min={1}
				max={stock}
				onChange={(e) => setCount(e.target.value)}
			/>
			<Card.Content extra>
				<Button color="teal" onClick={() => addToCart(product, count)}>
					<Icon name="add to cart" />Add to cart
				</Button>
			</Card.Content>
		</Card>
	);
}
