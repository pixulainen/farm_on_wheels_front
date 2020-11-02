import React from 'react';
import { Item } from 'semantic-ui-react';
import SellersFavouriteCards from './SellersFavouriteCards';
export default function BuyerFavoritesSellers({ sellers, updateSellerFavorites }) {
	const renderFavoritesSellers = () => {
		return sellers.map((seller) => {
			return (
				<SellersFavouriteCards
					updateSellerFavorites={updateSellerFavorites}
					seller={seller}
					{...seller}
					key={seller.id}
				/>
			);
		});
	};
	return <Item.Group>{sellers ? renderFavoritesSellers() : null}</Item.Group>;
}
