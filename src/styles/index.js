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
	},
	foodPlaces: {
		position: 'relative',
		color: '#f5f5f5',
		top: '9%',
		left: 0,
		fontSize: 22,
		fontWeight: 'bold',
		zIndex: 10,
	},
	foodPicture: {
		marginTop: 10,
		width: '100%',
		height: 100,
	},
	foodBold: {
		paddingLeft: 10,
		paddingBottom: 7,
		fontSize: 18,
		fontWeight: 'bold',
		color: 'white',
	},
	foodName: {
		paddingLeft: 10,
		fontSize: 16,
		color: 'white',
	},
});
