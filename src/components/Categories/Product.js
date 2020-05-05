import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function Product({
	description,
	name,
	picture,
	quality,
	price_kg,
	price_unit,
	stock,
	seller_id,
	handleClick
}) {
	const price = price_kg ? `${price_kg}/kg` : `${price_unit}/unit`;
	return (
		<Card color="olive" onClick={() => handleClick(seller_id)}>
			<Image src={picture} fluid style={{ height: 200, objectFit: 'cover' }} />
			<Card.Content>
				<Card.Header>{name}</Card.Header>
				<Card.Meta>Quality: {quality}</Card.Meta>
				<Card.Description>{description}</Card.Description>

				<Card.Description>Stock:{stock}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Icon name="pound" />
				{price}
			</Card.Content>
		</Card>
	);
}
