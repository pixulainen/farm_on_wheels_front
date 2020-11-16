import _ from 'lodash';
import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';
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

const _Search = (props) => {
	const [ state, setState ] = useState(initialState);

	const handleResultSelect = (e, { result }) => {
		setState({ value: result.title });
		history.push('/producers/' + result.id);
	};

	const handleSearchChange = (e, { value }) => {
		setState({ isLoading: true, value });
		API.search(e.target.value)
			.then((res) =>
				setState({
					isLoading: false,
					error: false,
					results: parse(res),
				}),
			)
			.catch(() => setState({ isLoading: false, error: true }));
	};

	const { isLoading, error, value, results } = state;

	return (
		<Grid>
			<Grid.Column width={6}>
				<Search
					aligned='left'
					loading={isLoading}
					onResultSelect={handleResultSelect}
					onSearchChange={_.debounce(handleSearchChange, 500, {
						leading: true,
					})}
					noResultsMessage={error ? 'Ups, try again later.' : 'No results found.'}
					results={results}
					value={value}
					{...props}
				/>
			</Grid.Column>
		</Grid>
	);
};

export default withRouter(_Search);
