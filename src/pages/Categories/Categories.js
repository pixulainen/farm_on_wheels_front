import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import API from '../../API';
import CategoriesSortAndFilterOptions from '../../components/Categories/CategoriesSortAndFIlterOptions';
import ProductsContainer from '../../components/Categories/ProductsContainer';

const _CategoriesPage = ({ history }) => {
	const [ products, setProducts ] = useState([]);
	const [ search, setSearch ] = useState('');
	const [ category, setCategory ] = useState('');

	useEffect(
		() => {
			async function getData() {
				const data = await API.fetchProducts(category, search);
				setProducts(data);
			}
			getData();
		},
		[ category, search ],
	);

	const handleFilterChange = (e, data) => {
		setCategory(data.value);
	};
	const handleSearchChange = (e, data) => {
		setSearch(data.value);
	};
	const handleClick = (sellerId) => {
		history.push('/producers/' + sellerId);
	};

	return products ? (
		<Container style={{ marginTop: 100 }}>
			<CategoriesSortAndFilterOptions
				handleFilterChange={handleFilterChange}
				handleSearchChange={handleSearchChange}
			/>
			<ProductsContainer products={products} handleClick={handleClick} />
		</Container>
	) : (
		<h1>Loading...</h1>
	);
};
export default withRouter(_CategoriesPage);
