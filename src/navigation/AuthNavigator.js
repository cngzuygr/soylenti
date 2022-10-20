import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SignInScreen, SignUpScreen, WelcomeScreen } from "../screens";

const AuthNav = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthNav.Navigator screenOptions={{ headerShown: false }}>
      <AuthNav.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <AuthNav.Screen name="SignInScreen" component={SignInScreen} />
      <AuthNav.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthNav.Navigator>
  );
}
