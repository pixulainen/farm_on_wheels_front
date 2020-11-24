import React, { useState, useEffect } from 'react';
import API from '../../API';
import ProducerList from './ProducersList';
import ProducerStore from './ProducerDetails';
import { Segment } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
const ProducersPageComponent = () => {
	const [ producers, setProducers ] = useState([]);
	useEffect(
		() => {
			const fetchData = async () => {
				const producers = await API.fetchProducers();
				setProducers(producers);
			};
			fetchData();
		},
		[ producers ],
	);
	return (
		<Segment basic>
			<Route path='/producers' component={() => <ProducerList producers={producers} />} />
			<Route path='/producers/:producerId' component={ProducerStore} />
		</Segment>
	);
};
export default ProducersPageComponent;
