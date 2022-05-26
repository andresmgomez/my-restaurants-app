// import { Fragment } from 'react';
import { View, Text, Image } from 'react-native';

export default function RestaurantCard({ styles, place }) {
	return (
		<View style={styles.foodPlaces} key={place.id}>
			<Text id={place.id} style={styles.foodBold} key={place.id}>
				{/* Restaurant Name */}
				Restaurant: {place.name}
			</Text>
			{/* Restaurant Food Preview */}
			<Text style={styles.foodName}>Cuisine: {place.cuisine}</Text>
			<Text style={styles.foodName}>Address: {place.address}</Text>
			<Image style={styles.foodPicture} source={{ uri: place.img }} />
		</View>
	);
}
