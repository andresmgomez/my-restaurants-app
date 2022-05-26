import { createContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();
export const LocalPlaceContext = createContext(null);

export default function App() {
	const [localPlace, setLocalPlace] = useState();
	return (
		// To use context destructure the object props inside value
		<LocalPlaceContext.Provider value={{ localPlace, setLocalPlace }}>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Home'
						component={Home}
						options={{ title: 'Local Restaurants' }}
					/>
					<Stack.Screen name='Details' component={Details} />
				</Stack.Navigator>
			</NavigationContainer>
		</LocalPlaceContext.Provider>
	);
}
