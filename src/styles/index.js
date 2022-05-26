import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 37,
		alignItems: 'center',
		justifyContent: 'center',
	},
	wideImage: {
		width: '100%',
		height: '97%',
		zIndex: 9,
	},
	restaurantCard: {
		maxWidth: 350,
		marginHorizontal: 30,
		marginVertical: 10,
		height: 190,
		backgroundColor: 'black',
		borderRadius: 25,
		color: '#f5f5f5',
	},
	foodPlaces: {
		position: 'relative',
		color: '#f5f5f5',
		textAlign: 'center',
		top: '14%',
		right: 0,
		fontSize: 22,
		fontWeight: 'bold',
		zIndex: 10,
	},
	restaurantName: {
		color: 'white',
	},
});
