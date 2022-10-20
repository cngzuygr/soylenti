import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Button
				title="go"
				onPress={() => navigation.navigate("LocationScreen")}
			/>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
