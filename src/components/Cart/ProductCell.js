import React from 'react';
import { Table, Button } from 'semantic-ui-react';
export default function ProductCell({ name, description, count, price_kg, price_unit }) {
	const price = price_kg ? price_kg : price_unit;
	return (
		<Table.Body>
			<Table.Row>
				<Table.Cell textAlign="center">{name}</Table.Cell>
				<Table.Cell textAlign="center">{description}</Table.Cell>
				<Table.Cell textAlign="center">{count}</Table.Cell>
				<Table.Cell textAlign="center">£{price}</Table.Cell>
				<Table.Cell textAlign="center">£{price * count}</Table.Cell>
			</Table.Row>
		</Table.Body>
	);
}
