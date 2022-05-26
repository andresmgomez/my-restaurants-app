import { useContext } from 'react';
import { View, Text, Image } from 'react-native';
import { ActivityIndicator } from 'react-native-web';
import { LocalPlaceContext } from '../../App';
import styles from '../styles/index';

export default function Details() {
	const { localPlace } = useContext(LocalPlaceContext);
	return (
		<View style={styles.container}>
			{!localPlace ? (
				<ActivityIndicator />
			) : (
				<>
					<Image
						style={{ marginTop: 20, width: '100%', height: 100 }}
						source={{ uri: localPlace.img }}
					/>
					<Text style={styles.foodBold}>{localPlace.name}</Text>
					<Text style={styles.foodName}>Cuisine: {localPlace.cuisine}</Text>
					<Text style={styles.foodName}>Address: {localPlace.address}</Text>
					<Text style={styles.foodName}>Rating: {localPlace.rating}</Text>
				</>
			)}
		</View>
		// <View style={styles.container}>
		// 	<Text style={styles.foodBold}>{localPlace?.name}</Text>
		// </View>
	);
}
