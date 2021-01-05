import React, { useState, useEffect } from 'react';
import API from '../../API';
import ProducerList from '../../components/producers_page/ProducersList';
import ProducerStore from '../../components/producers_page/ProducerDetails';
import { Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
const SellersPage = () => {
	const [ producers, setProducers ] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const producers = await API.fetchProducers();
			setProducers(producers);
		};
		fetchData();
	}, []);
	return (
		<React.Fragment>
			<Route path='/producers' component={() => <ProducerList producers={producers} />} />
			<Route path='/producers/:producerId' component={ProducerStore} />
		</React.Fragment>
	);
};
export default SellersPage;
