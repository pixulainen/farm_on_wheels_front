import React from 'react';
import { Table, Button, Icon, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/cart/cart.actions';

const ProductCell = ({ name, description, quantity, price_kg, price_unit, id, picture, removeItem }) => {
	const price = price_kg ? price_kg : price_unit;
	return (
		<Table.Body>
			<Table.Row>
				<Table.Cell textAlign='center'>
					{name} <Image src={picture} avatar />
				</Table.Cell>
				<Table.Cell textAlign='center'>{description}</Table.Cell>
				<Table.Cell textAlign='center'>{quantity}</Table.Cell>
				<Table.Cell textAlign='center'>£{price}</Table.Cell>
				<Table.Cell textAlign='center'>£{price * quantity}</Table.Cell>
				<Table.Cell textAlign='center'>
					<Button icon color='google plus' onClick={() => removeItem(id)}>
						<Icon name='remove circle' />
					</Button>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	);
};
const mapDispatchToProps = (dispatch) => ({
	removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(ProductCell);
