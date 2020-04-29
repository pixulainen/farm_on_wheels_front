import React from 'react';
import { Card, Icon, Image, Button } from 'semantic-ui-react';

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
	const price = price_kg ? `${price_kg}/kg` : `${price_unit}/unit`;
	return (
		<Card>
			<Image src={picture} wrapped ui={false} size="small" />
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
			<Card.Content extra>
				<Button onClick={() => addToCart(product)}>Add to cart</Button>
			</Card.Content>
		</Card>
	);
}
