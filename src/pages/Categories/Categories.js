import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import API from '../../API';
import CategoriesSortAndFilterOptions from '../../components/Categories/CategoriesSortAndFIlterOptions';
import ProductsContainer from '../../components/Categories/ProductsContainer';

const _CategoriesPage = ({ history }) => {
	const [ products, setProducts ] = useState([]);
	const [ filter, setFilter ] = useState('All');
	const [ search, setSearch ] = useState('');
	const [ sort, setSort ] = useState('default');

	useEffect(() => {
		async function getData() {
			const data = await API.fetchProducts();
			setProducts(data);
		}
		getData();
	}, []);

	const handleFilterChange = (e, data) => {
		setFilter(data.value);
	};
	const handleSearchChange = (e, data) => {
		setSearch(data.value);
	};
	const handleSortChange = (e, data) => {
		setSort(data.value);
	};
	const handleClick = (sellerId) => {
		history.push('/producers/' + sellerId);
	};

	const productsToRender = () => {
		if (filter === 'All') {
			return products;
		} else if (filter === 1) {
			return products.filter((product) => product['category_id'] === 1);
		} else if (filter === 2) {
			return products.filter((product) => product['category_id'] === 2);
		} else if (filter === 3) {
			return products.filter((product) => product['category_id'] === 3);
		} else if (filter === 4) {
			return products.filter((product) => product['category_id'] === 4);
		}
	};
	const searchFilter = () => {
		const renderedProducts = productsToRender();
		return renderedProducts.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));
	};

	const sortedProducts = searchFilter().sort((pA, pB) => {
		if (sort === 'default') {
			return 0;
		} else if (sort === 'name') {
			return pA.name.localeCompare(pB.name);
		} else if (sort === 'price') {
			return pA.price_kg || pA.price_unit - pB.price_kg || pB.price_unit;
		}
	});

	return products ? (
		<Container>
			<CategoriesSortAndFilterOptions
				handleFilterChange={handleFilterChange}
				handleSearchChange={handleSearchChange}
				handleSortChange={handleSortChange}
			/>
			<ProductsContainer products={sortedProducts} handleClick={handleClick} />
		</Container>
	) : (
		<h1>Loading</h1>
	);
};
export default withRouter(_CategoriesPage);
