import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LocationScreen } from "../screens";

const AppNav = createNativeStackNavigator();

export default function AppNavigator() {
	return (
		<AppNav.Navigator screenOptions={{ headerShown: false }}>
			<AppNav.Screen name="HomeScreen" component={HomeScreen} />
			<AppNav.Screen name="LocationScreen" component={LocationScreen} />
		</AppNav.Navigator>
	);
}
