import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import API from '../../API';
import CategoriesSortAndFilterOptions from './CategoriesSortAndFIlterOptions';
import ProductsContainer from './ProductsContainer';

class _CategoriesPage extends Component {
	state = {
		products: [],
		filterP: 'All',
		search: '',
		sort: 'default'
	};
	componentDidMount() {
		API.fetchProducts().then((products) =>
			this.setState({
				products
			})
		);
	}
	handleFilterChange = (e, data) => {
		this.setState({
			filterP: data.value
		});
	};
	handleSearchChange = (e, data) => {
		this.setState({
			search: data.value
		});
	};
	handleSortChange = (e, data) => {
		this.setState({
			sort: data.value
		});
	};
	handleClick = (sellerId) => {
		this.props.history.push('/producers/' + sellerId);
	};

	productsToRender = () => {
		if (this.state.filterP === 'All') {
			return this.state.products;
		} else if (this.state.filterP === 1) {
			return this.state.products.filter((product) => product['category_id'] === 1);
		} else if (this.state.filterP === 2) {
			return this.state.products.filter((product) => product['category_id'] === 2);
		} else if (this.state.filterP === 3) {
			return this.state.products.filter((product) => product['category_id'] === 3);
		} else if (this.state.filterP === 4) {
			return this.state.products.filter((product) => product['category_id'] === 4);
		}
	};
	searchFilter = () => {
		const products = this.productsToRender();
		return products.filter((product) => product.name.toLowerCase().includes(this.state.search.toLowerCase()));
	};

	render() {
		const sortedProducts = this.searchFilter().sort((pA, pB) => {
			if (this.state.sort === 'default') {
				return 0;
			} else if (this.state.sort === 'name') {
				return pA.name.localeCompare(pB.name);
			} else if (this.state.sort === 'price') {
				return pA.price_kg || pA.price_unit - pB.price_kg || pB.price_unit;
			}
		});
		return this.state.products ? (
			<Container>
				<CategoriesSortAndFilterOptions
					categories={this.state.categories}
					handleFilterChange={this.handleFilterChange}
					handleSearchChange={this.handleSearchChange}
					handleSortChange={this.handleSortChange}
				/>
				<ProductsContainer products={sortedProducts} handleClick={this.handleClick} />
			</Container>
		) : (
			<h1>Loading</h1>
		);
	}
}
export default withRouter(_CategoriesPage);
