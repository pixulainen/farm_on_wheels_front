import React from 'react';
import { Container, Header, Segment, Table } from 'semantic-ui-react';
import BuyerOrdercell from './BuyerOrdersCell';

export default function BuyerOrderContainer({ orders, buyer }) {
	const renderOrders = () => {
		// debugger;
		return orders.map((order) => {
			return <BuyerOrdercell buyer={buyer} order={order} key={order.id} {...order} />;
		});
	};

	return (
		<div>
			<Container fluid textAlign="center">
				<Header as="h2">Order History</Header>
				<Segment basic padded>
					<Table celled structured>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell textAlign="center">Order id</Table.HeaderCell>
								<Table.HeaderCell textAlign="center">Order date</Table.HeaderCell>
								<Table.HeaderCell textAlign="center">Shipped to</Table.HeaderCell>
								<Table.HeaderCell textAlign="center">Seller </Table.HeaderCell>

								<Table.HeaderCell textAlign="center">Order Total</Table.HeaderCell>
								<Table.HeaderCell textAlign="center">Status</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						{renderOrders()}
					</Table>
				</Segment>
			</Container>
		</div>
	);
}
