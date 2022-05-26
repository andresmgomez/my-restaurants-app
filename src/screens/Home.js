import { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	View,
	ImageBackground,
	ScrollView,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
import RestaurantCard from '../components/Restaurant/RestaurantCard';
import styles from '../styles/index';

const foodBackground = {
	uri: 'https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg',
};

export default function Home({ navigation }) {
	const [places, setPlaces] = useState();

	// useEffect(() => {
	// 	const getRestaurants = async () => {
	// 		const response = await fetch(
	// 			'https://my-first-firestore-st.web.app/restaurants/'
	// 		);
	// 		const restaurants = response.json();
	// 		setRestaurants(restaurants);
	// 		// console.log(restaurants);
	// 	};
	// 	getRestaurants();
	// }, []);

	useEffect(() => {
		fetch('https://my-first-firestore-st.web.app/restaurants/')
			.then(response => response.json())
			.then(setPlaces)
			.catch(err => console.error(err));
	}, []);

	return (
		<View style={styles.container}>
			<ImageBackground
				resizeMode='cover'
				source={foodBackground}
				style={styles.wideImage}
			>
				<ScrollView>
					{!places ? (
						<ActivityIndicator size='large' color='orange' />
					) : (
						places.map(place => {
							return (
								<View style={styles.restaurantCard} key={place.id}>
									<TouchableOpacity
										key={place.id}
										onPress={() => navigation.navigate('Details')}
									>
										<RestaurantCard place={place} styles={styles} />
									</TouchableOpacity>
								</View>
							);
						})
					)}
				</ScrollView>
				<StatusBar style='auto' />
			</ImageBackground>
		</View>
	);
}
