import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import MapView, { Animated, Circle } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { Slider } from "@miblanchard/react-native-slider";

export default function LocationScreen({ navigation }) {
	const [radiusSelected, setRadiusSelected] = useState({ radius: 0 });
	const [customSelected, setCustomSelected] = useState(false);
	const location = {
		coords: {
			longitude: 32.52243,
			latitude: 38.01113,
		},
	};

	const radiusSelection = [
		{
			key: 1,
			title: "1km",
			radius: 500,
		},
		{
			key: 2,
			title: "5km",
			radius: 2500,
		},
		{
			key: 3,
			title: "20km",
			radius: 10000,
		},
		{
			key: 4,
			title: "50km",
			radius: 25000,
		},
	];
	return (
		<View style={{ flex: 1 }}>
			<Animated
				style={{ flex: 1 }}
				region={{
					latitude: location.coords.latitude || 38.01113,
					longitude: location.coords.longitude || 32.52243,
					latitudeDelta: radiusSelected.radius / 40000,
					longitudeDelta: radiusSelected.radius / 40000,
				}}
			>
				<Circle
					center={{
						latitude: location.coords.latitude || 38.01113,
						longitude: location.coords.longitude || 32.52243,
					}}
					radius={radiusSelected.radius}
					strokeWidth={3}
					strokeColor="#0000FF44"
					fillColor="#FF000077"
				/>
			</Animated>
			<View
				style={{
					height: "100%",
					width: "100%",
					position: "absolute",
					justifyContent: "space-between",
				}}
			>
				<TouchableOpacity
					style={{
						width: 50,
						height: 50,
						marginTop: 40,
						marginLeft: 30,
						backgroundColor: "#FF000077",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 20,
					}}
					onPress={() => navigation.goBack()}
				>
					<AntDesign name="left" size={24} color="white" />
				</TouchableOpacity>
				<View
					style={{
						flexDirection: "column",
						borderRadius: 50,
						width: "80%",
						backgroundColor: "#FF000077",
						marginBottom: 50,
						alignSelf: "center",
					}}
				>
					<Slider
						value={(radiusSelected.radius * 2) / 1000}
						onValueChange={(value) => {
							setRadiusSelected({ radius: (value / 2) * 1000 });
						}}
						minimumValue={0.1}
						maximumValue={50}
						step={0.1}
						containerStyle={{ width: "80%", alignSelf: "center" }}
						minimumTrackTintColor="#8883f0"
						maximumTrackTintColor="#00000066"
						thumbTintColor="#8883f0"
					/>
					<View
						style={{
							flexDirection: "row",
							alignSelf: "center",
							marginBottom: 20,
						}}
					>
						<View style={styles.buttonContainer}>
							{radiusSelection.map(({ key, title, radius }) => (
								<TouchableOpacity
									onPress={() => {
										setRadiusSelected({
											key: key,
											title: title,
											radius: radius,
										});
										setCustomSelected(false);
									}}
									key={key}
									style={{
										width: "20%",
										alignItems: "center",
										backgroundColor: `${
											radiusSelected?.key == key ? "#8883f0" : "white"
										}`,
										height: 35,
										justifyContent: "center",
										marginHorizontal: 5,
										borderRadius: 5,
									}}
								>
									<Text style={styles.buttonText}>{title}</Text>
								</TouchableOpacity>
							))}
							<TouchableOpacity
								style={{
									height: 36,
									width: 36,
									borderRadius: 5,
									backgroundColor: "green",
									padding: 10,
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<AntDesign name="check" size={16} color="white" />
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</View>
			<StatusBar />
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 15,
		width: "80%",
		alignSelf: "center",
	},
	buttonText: {
		fontSize: 14,
	},
});
