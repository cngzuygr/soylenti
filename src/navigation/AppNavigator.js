import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LocationScreen } from "../screens";

const AppNav = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <AppNav.Navigator>
      <AuthNav.Screen name="HomeScreen" component={HomeScreen} />
      <AuthNav.Screen name="LocationScreen" component={LocationScreen} />
    </AppNav.Navigator>
  );
}
