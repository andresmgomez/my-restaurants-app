import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
