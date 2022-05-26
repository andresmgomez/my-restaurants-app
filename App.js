import { StatusBar } from 'expo-status-bar';
import {
	Text,
	View,
	ImageBackground,
	ScrollView,
	Image,
	ActivityIndicator,
} from 'react-native';
import { Fragment, useState, useEffect } from 'react';
import styles from './src/styles/index';

const foodBackground = {
	uri: 'https://png.pngtree.com/background/20210709/original/pngtree-food-western-food-steak-tomato-picture-image_941801.jpg',
};

export default function App() {
	const [places, setPlaces] = useState();
	useEffect(() => {
		const getRestaurants = async () => {
			const response = await fetch(
				'https://my-first-firestore-st.web.app/restaurants/'
			);
			const places = await response.json();
			// console.log(places);
			setPlaces(places);
		};
		getRestaurants();
	}, []);
	return (
		<View style={styles.container}>
			<ImageBackground
				resizeMode='cover'
				source={foodBackground}
				style={styles.wideImage}
			>
				<ScrollView>
					<Text>Let's show a list of restaurants</Text>
					{places ? (
						places?.map(place => {
							return (
								<Fragment key={place.id}>
									<Text id={place.id} style={styles.foodPlaces} key={place.id}>
										Restaurant: {place.name}
									</Text>
									<Image
										source={{ uri: place.img }}
										style={{
											marginTop: 60,
											width: '100%',
											height: 100,
										}}
									/>
								</Fragment>
							);
						})
					) : (
						<ActivityIndicator size='large' color='red' />
					)}
				</ScrollView>
				<StatusBar style='auto' />
			</ImageBackground>
		</View>
	);
}
