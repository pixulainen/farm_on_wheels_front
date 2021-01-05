import React, { Component } from 'react';
import { Input, Menu, Dropdown } from 'semantic-ui-react';
import _ from 'lodash';

const options = [
	{ key: 1, text: 'Default', value: 'default' },
	{ key: 2, text: 'Name', value: 'name' },
	{ key: 3, text: 'Price', value: 'price' },
];

export default class CategoriesSortAndFIlterOptions extends Component {
	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const getOptions = [
			{
				key: 1,
				text: 'All',
				value: ' ',
			},
			{
				key: 2,
				text: 'Vegetables',
				value: 1,
			},
			{
				key: 3,
				text: 'Fruits',
				value: 2,
			},
			{
				key: 4,
				text: 'Dairy',
				value: 3,
			},
			{
				key: 5,
				text: 'Meat',
				value: 4,
			},
		];

		const { handleFilterChange, handleSearchChange, handleSortChange } = this.props;
		return (
			<Menu secondary text>
				<Menu.Menu>
					<Menu.Item>
						<Menu.Item name='Select Category' />

						<Dropdown
							item
							fluid
							wrapSelection
							placeholder='Select category'
							scrolling
							selection
							options={getOptions}
							onChange={_.debounce(handleFilterChange, 500, {
								leading: true,
							})}
						/>
					</Menu.Item>
				</Menu.Menu>
				<Menu.Menu position='right'>
					<Menu.Item>
						<Input icon='search' placeholder='Search...' onChange={handleSearchChange} />
					</Menu.Item>
				</Menu.Menu>
			</Menu>
		);
	}
}
