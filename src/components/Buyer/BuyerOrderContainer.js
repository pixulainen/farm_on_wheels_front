import React from 'react';
import { Container, Header, Segment, Table } from 'semantic-ui-react';
import BuyerOrdercell from './BuyerOrdersCell';

export default function BuyerOrderContainer({ orders }) {
	const renderOrders = () => {
		return orders.map((order) => {
			return <BuyerOrdercell order={order} key={order.id} {...order} />;
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
								<Table.HeaderCell textAlign="center">Order number</Table.HeaderCell>
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
