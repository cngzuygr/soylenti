import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Animated, Circle } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Slider } from "@miblanchard/react-native-slider";
import fontTypes from "../theme/fonts";
import useLocation from "../hooks/useLocation";
import { useDispatch, useSelector } from "react-redux";
import { selectDistance, setLocation } from "../redux/locationSlice";

export default function LocationScreen({ navigation }) {
	const location = useLocation();
	const dispatch = useDispatch();

	const [radiusSelected, setRadiusSelected] = useState(
		useSelector(selectDistance)
	);
	const [customSelected, setCustomSelected] = useState(false);

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
	];

	function handleSet() {
		dispatch(
			setLocation({
				longitude: location.coords.longitude,
				latitude: location.coords.latitude,
				distance: radiusSelected,
			})
		);
		navigation.goBack();
	}
	return (
		<View style={{ flex: 1 }}>
			{location && radiusSelected ? (
				<>
					<Animated
						style={{ flex: 1 }}
						region={{
							latitude: location.coords.latitude || 38.01113,
							longitude: location.coords.longitude || 32.52243,
							latitudeDelta: radiusSelected.radius / 30000,
							longitudeDelta: radiusSelected.radius / 30000,
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
					<View style={styles.container}>
						<View style={styles.backButtonContainer}>
							<TouchableOpacity
								style={styles.backButton}
								onPress={() => navigation.goBack()}
							>
								<AntDesign name="left" size={24} color="white" />
							</TouchableOpacity>
						</View>

						<View style={styles.radiusContainer}>
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
								onTouchEnd={() => {
									setCustomSelected(true);
								}}
							/>
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
										style={[
											styles.radiusButton,
											{
												backgroundColor: `${
													radiusSelected?.key == key ? "#8883f0" : "white"
												}`,
											},
										]}
									>
										<Text style={styles.radiusButtonText}>{title}</Text>
									</TouchableOpacity>
								))}
								<TouchableOpacity
									style={[
										styles.radiusButton,
										{
											backgroundColor: `${
												customSelected ? "#8883f0" : "white"
											}`,
										},
									]}
								>
									<Text style={styles.radiusButtonText}>
										{((radiusSelected.radius * 2) / 1000).toFixed(1.1)}km
									</Text>
								</TouchableOpacity>
								<TouchableOpacity onPress={handleSet} style={styles.saveButton}>
									<AntDesign name="check" size={16} color="white" />
								</TouchableOpacity>
							</View>
						</View>
					</View>
				</>
			) : (
				<View
					style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
				>
					<ActivityIndicator />
				</View>
			)}

			<StatusBar />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		width: "100%",
		position: "absolute",
		justifyContent: "space-between",
	},
	backButtonContainer: { width: "90%", alignSelf: "center", marginTop: 40 },
	backButton: {
		width: 50,
		height: 50,
		backgroundColor: "#FF000077",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
	},
	radiusContainer: {
		flexDirection: "column",
		borderRadius: 20,
		width: "90%",
		backgroundColor: "#FF000077",
		marginBottom: 30,
		alignSelf: "center",
	},
	buttonContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginVertical: 15,
		width: "90%",
		alignSelf: "center",
	},
	radiusButton: {
		height: 35,
		justifyContent: "center",
		marginHorizontal: 5,
		borderRadius: 5,
		width: "20%",
		alignItems: "center",
	},
	radiusButtonText: {
		fontSize: fontTypes.size.font14,
		fontFamily: fontTypes.type.montserratRegular,
	},
	saveButton: {
		height: 36,
		width: 36,
		borderRadius: 5,
		backgroundColor: "green",
		padding: 10,
		justifyContent: "center",
		alignItems: "center",
	},
});
