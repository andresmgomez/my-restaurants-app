import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { View, SafeAreaView } from 'react-native';
// import { StatusBar } from 'expo-status-bar';
import Home from './src/screens/Home';
// import styles from './src/styles/index';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={Home}
					options={{ title: 'Local Restaurants' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
