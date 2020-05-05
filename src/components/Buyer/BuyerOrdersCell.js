import React from 'react';
import { Table, Icon } from 'semantic-ui-react';
import Moment from 'react-moment';

export default function BuyerOrdercell({ id, created_at, seller }) {
	return (
		<Table.Body>
			<Table.Row>
				<Table.Cell textAlign="center">{id}</Table.Cell>
				<Table.Cell textAlign="center">
					<Moment format="DD/MM/YYYY">{created_at}</Moment>
				</Table.Cell>
				<Table.Cell textAlign="center">Name Name</Table.Cell>
				<Table.Cell textAlign="center">{seller.store_name}</Table.Cell>

				<Table.Cell textAlign="center">Total</Table.Cell>

				<Table.Cell textAlign="center">
					<Icon color="green" name="checkmark" size="large" />
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	);
}
