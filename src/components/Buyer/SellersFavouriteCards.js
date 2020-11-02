import React from 'react';
import { Icon, Feed } from 'semantic-ui-react';
import API from '../../API';
import { withRouter } from 'react-router-dom';
function _SellersFavouriteCards({ store_photos, id, store_name, updateSellerFavorites, history }) {
	const clearSeller = (id) => {
		API.removeFromFavourites(id);
		updateSellerFavorites(id);
	};
	const handleClick = (sellerId) => {
		history.push('/producers/' + sellerId);
	};
	return (
		<div>
			{/* <Item>
				<Item.Image size="tiny" src={store_photos} />
				<Item.Content verticalAlign="middle">
					<Item.Header>{store_name}</Item.Header>
				</Item.Content>
				<Button name="remove" onClick={() => clearSeller(id)} />
			</Item> */}
			<Feed size='large'>
				<Feed.Event>
					<Feed.Label image={store_photos} />
					<Feed.Content>
						<Feed.Summary>
							<Feed.User onClick={() => handleClick(id)}>{store_name}</Feed.User>
						</Feed.Summary>
						<Feed.Meta onClick={() => clearSeller(id)}>
							<Feed.Like>
								<Icon name='remove' />Remove
							</Feed.Like>
						</Feed.Meta>
					</Feed.Content>
				</Feed.Event>
			</Feed>
		</div>
	);
}
export default withRouter(_SellersFavouriteCards);
