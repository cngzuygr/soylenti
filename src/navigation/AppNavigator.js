import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen, LocationScreen } from "../screens";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const AppNav = createNativeStackNavigator();

export default function AppNavigator({ navigation }) {
  return (
    <AppNav.Navigator>
      <AppNav.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerTitle: "Söylenti",
          headerTitleAlign: "center",
          headerTitleStyle: {
            color: "#7965C3",
            fontSize: 30,
            fontFamily: "GloriaRegular",
            textShadowOffset: { width: 1, height: 1 },
            textShadowColor: "black",
            textShadowRadius: 1,
          },
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 10,
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("LocationScreen")}
            >
              <Ionicons name="md-location" size={32} color="#7965C3" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{
                marginRight: 10,
                marginTop: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              onPress={() => navigation.navigate("SettingsScreen")}
            >
              <MaterialIcons name="settings" size={32} color="#7965C3" />
            </TouchableOpacity>
          ),
        }}
      />
      <AppNav.Screen
        name="LocationScreen"
        component={LocationScreen}
        options={{ headerShown: false }}
      />
    </AppNav.Navigator>
  );
}
