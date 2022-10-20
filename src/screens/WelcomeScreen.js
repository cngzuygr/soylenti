import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import fontTypes  from "../theme/fonts"
import colors from "../theme/colors"
import WelcomeScreenButton from "../components/WelcomeScreenButton";

const WelcomeScreen = () => {
  
	return (
		<SafeAreaView style={styles.container}>
      <View style={styles.brandContainer}>
			<Image source={require("../../assets/images/logo.png")} />
			<Text style={styles.brand}>Söylenti</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <WelcomeScreenButton text={"Giriş Yap"} navigateTo={"SignInScreen"}/>
        <WelcomeScreenButton text={"Kayıt Ol"} navigateTo={"SignUpScreen"}/>
      </View>
    	<StatusBar />
		</SafeAreaView>
	);
};

export default WelcomeScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
  brandContainer:{
    flex:1, justifyContent:'center',alignItems:'center'
  },
  buttonsContainer:{
    width:'100%'
  },
	brand: {
		fontFamily: fontTypes.type.gloriaRegular,
		color: colors.colors.brandColor,
		fontSize: fontTypes.size.font64,
		textShadowOffset: { width: 1, height: 1 },
		textShadowColor: "black",
		textShadowRadius: 1,
	},
});
