import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	Text,
	View,
	ImageBackground,
	Image,
	ActivityIndicator,
} from 'react-native';
import { useState, useEffect } from 'react';

const image = {
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
			console.log(places);
			setPlaces(places);
		};
		getRestaurants();
	}, []);
	return (
		<View style={styles.container}>
			<ImageBackground
				resizeMode='cover'
				source={image}
				style={styles.wideImage}
			>
				<Text>Let's show a list of restaurants</Text>
				{places ? (
					places?.map(place => {
						return (
							<>
								<Text style={styles.foodPlaces} key={place.id}>
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
							</>
						);
					})
				) : (
					<ActivityIndicator size='large' color='red' />
				)}
				<StatusBar style='auto' />
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent',
		alignItems: 'center',
		justifyContent: 'center',
	},
	wideImage: {
		width: '100%',
		height: '100%',
		zIndex: 9,
	},
	foodPlaces: {
		position: 'relative',
		marginTop: 10,
		paddingTop: 10,
		color: '#f5f5f5',
		textAlign: 'center',
		top: '6%',
		right: 0,
		fontSize: 22,
		fontWeight: 'bold',
		zIndex: 10,
	},
});
