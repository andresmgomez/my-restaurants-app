// import { Fragment } from 'react';
import { View, Text, Image } from 'react-native';

export default function RestaurantCard({ styles, place }) {
	return (
		<View style={styles.restaurantCard} key={place.id}>
			<Text id={place.id} style={styles.foodPlaces} key={place.id}>
				{/* Restaurant Name */}
				Restaurant: {place.name}
			</Text>
			{/* Restaurant Food Preview */}
			<Image
				source={{ uri: place.img }}
				style={{
					marginTop: 60,
					width: '100%',
					height: 100,
				}}
			/>
		</View>
	);
}
