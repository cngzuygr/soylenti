import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { signOutHandler } from "../../../firebase";
import { useDispatch } from "react-redux";
import { setLocation } from "../../slices/locationSlice";
const SettingsScreen = ({ navigation }) => {
	const dispatch = useDispatch();

	async function signOut() {
		await signOutHandler();
	}

	const setLocationHandler = () => {
		console.log("sas");
		dispatch(
			setLocation({
				longitude: 27.0185233,
				latitude: 39.5963133,
			})
		);
	};

	return (
		<View
			style={{
				flex: 1,
				backgroundColor: "white",
				justifyContent: "space-between",
			}}
		>
			<View>
				<TouchableOpacity
					style={{
						backgroundColor: "#16e4cc",
						width: "60%",
						height: 60,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 10,
						alignSelf: "center",
						marginTop: 50,
					}}
				>
					<Text style={{ fontFamily: "Gloria", fontSize: 24, color: "white" }}>
						Premium Al
					</Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity
					onPress={() => navigation.navigate("AboutScreen")}
					style={styles.buttons}
				>
					<Text style={styles.buttonText}>Uygulama Hakkında</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => navigation.navigate("ChatSettingsScreen")}
					style={styles.buttons}
				>
					<Text style={styles.buttonText}>Sohbet Ayarları</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttons}>
					<Text style={styles.buttonText}>Bildirim Ayarları</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttons}>
					<Text style={styles.buttonText}>Görüş ve Öneriler</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => setLocationHandler()}
					style={styles.buttons}
				>
					<Text style={styles.buttonText}>Hesabı Sil</Text>
				</TouchableOpacity>
			</View>
			<View>
				<TouchableOpacity
					style={{
						backgroundColor: "#EA3546",
						width: "60%",
						height: 60,
						justifyContent: "center",
						alignItems: "center",
						borderRadius: 10,
						alignSelf: "center",
						marginBottom: 25,
					}}
					onPress={signOut}
				>
					<Text style={{ fontFamily: "Gloria", fontSize: 24, color: "white" }}>
						Çıkış Yap
					</Text>
				</TouchableOpacity>
			</View>
			<StatusBar />
		</View>
	);
};

export default SettingsScreen;

const styles = StyleSheet.create({
	buttons: {
		backgroundColor: "gray",
		width: "95%",
		height: 60,
		justifyContent: "center",
		borderRadius: 10,
		alignSelf: "center",
		marginTop: 10,
	},
	buttonText: {
		fontFamily: "Gloria",
		fontSize: 20,
		color: "white",
		marginLeft: 10,
	},
});
