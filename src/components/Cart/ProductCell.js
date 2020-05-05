import React from 'react';
import { Table, Button, Icon } from 'semantic-ui-react';
export default function ProductCell({ name, description, count, price_kg, price_unit, removeFromCart, id }) {
	const price = price_kg ? price_kg : price_unit;
	return (
		<Table.Body>
			<Table.Row>
				<Table.Cell textAlign="center">{name}</Table.Cell>
				<Table.Cell textAlign="center">{description}</Table.Cell>
				<Table.Cell textAlign="center">{count}</Table.Cell>
				<Table.Cell textAlign="center">£{price}</Table.Cell>
				<Table.Cell textAlign="center">£{price * count}</Table.Cell>
				<Table.Cell textAlign="center">
					<Button icon color="google plus" onClick={() => removeFromCart(id)}>
						<Icon name="remove circle" />
					</Button>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	);
}
