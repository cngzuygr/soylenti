import React, { useState } from "react";
import { ActivityIndicator, LogBox, View } from "react-native";
import Navigation from "./src/navigation";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import store from "./src/redux/store";

LogBox.ignoreLogs([
	//Firestore issue
	"Setting a timer",
	//Auth issue
	"AsyncStorage has been extracted from react-native core and will be removed in a future release.",
]);
export default function App() {
	const [fonts] = useFonts({
		MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
		MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
		GloriaRegular: require("./assets/fonts/GloriaHallelujah-Regular.ttf"),
	});

	const [isLoading, setIsLoading] = useState(false);

	if (isLoading || !fonts) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "white",
				}}
			>
				<ActivityIndicator size={64} color={"#fcc917"} />
				<StatusBar />
			</View>
		);
	}

	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
}
