import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab, Container } from 'semantic-ui-react';
import BuyerOrderContainer from './BuyerOrderContainer';

export default function BuyerProfilePage({ username }) {
	const [ buyer, setBuyer ] = useState(null);
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get(`http://localhost:3001/buyers/${username}`, {
				headers: { Authorization: localStorage.getItem('token') }
			});
			setBuyer(result.data);
		};
		fetchData();
	}, []);
	const panes = buyer
		? [
				{
					menuItem: 'Profile',
					pane: {
						key: 'profile',
						content: <div>{<BuyerOrderContainer orders={buyer.orders} />}</div>
					}
				},
				{
					menuItem: ' Favourites',
					pane: {
						key: 'favourites',
						content: <div>Such empty</div>
					}
				}
			]
		: null;

	return (
		<Container style={{ padding: 10 }}>
			<Tab panes={panes} renderActiveOnly={false} />;
		</Container>
	);
}
