import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import { Search, Grid } from 'semantic-ui-react';
import API from '../../API';
import history from '../../history';

const initialState = {
	error: false,
	isLoading: false,
	results: [],
	value: '',
};

const parse = (res) =>
	res.map((r) => ({
		key: r.id,
		title: r.name,
		description: r.description,
		price: r.price_kg ? `${r.price_kg} ££/Kg` : `${r.price_unit} ££/Unit`,
		image: r.picture,
		id: r.seller_id,
	}));

class _Search extends Component {
	state = initialState;

	handleResultSelect = (e, { result }) => {
		this.setState({ value: result.title });
		history.push('/producers/' + result.id);
	};

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });
		API.search(e.target.value)
			.then((res) =>
				this.setState({
					isLoading: false,
					error: false,
					results: parse(res),
				}),
			)
			.catch(() => this.setState({ isLoading: false, error: true }));
	};

	render() {
		const { isLoading, error, value, results } = this.state;

		return (
			<Grid>
				<Grid.Column width={6}>
					<Search
						aligned='left'
						loading={isLoading}
						onResultSelect={this.handleResultSelect}
						onSearchChange={_.debounce(this.handleSearchChange, 500, {
							leading: true,
						})}
						noResultsMessage={error ? 'Ups, try again later.' : 'No results found.'}
						results={results}
						value={value}
						{...this.props}
					/>
				</Grid.Column>
			</Grid>
		);
	}
}

export default withRouter(_Search);
