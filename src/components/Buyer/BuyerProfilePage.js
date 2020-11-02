import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tab, Container } from 'semantic-ui-react';
import BuyerOrderContainer from './BuyerOrderContainer';
import BuyerFavoritesSellers from './BuyerFavoritesSellers';
export default function BuyerProfilePage({ username }) {
	const [ buyer, setBuyer ] = useState(null);
	const [ favorites, setFavorites ] = useState(null);

	useEffect(
		() => {
			const fetchData = async () => {
				const result = await axios.get(`http://localhost:3001/buyers/${username}`, {
					headers: { Authorization: localStorage.getItem('token') },
				});
				setBuyer(result.data);
				setFavorites(result.data.all_favorited);
			};
			fetchData();
		},
		[ username ],
	);
	const updateSellerFavorites = (sellerId) => {
		setFavorites(favorites.filter((seller) => seller.id !== sellerId));
	};
	const panes = buyer
		? [
				{
					menuItem: 'Profile',
					pane: {
						key: 'profile',
						content: <div>{<BuyerOrderContainer buyer={buyer} orders={buyer.orders} />}</div>,
					},
				},
				{
					menuItem: ' Favourites',
					pane: {
						key: 'favourites',
						content: (
							<BuyerFavoritesSellers updateSellerFavorites={updateSellerFavorites} sellers={favorites} />
						),
					},
				},
			]
		: null;

	return (
		<Container style={{ padding: 10 }}>
			<Tab panes={panes} renderActiveOnly={false} />;
		</Container>
	);
}
