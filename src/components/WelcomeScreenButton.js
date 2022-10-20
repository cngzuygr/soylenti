import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import fontTypes  from "../theme/fonts"
import { useNavigation } from '@react-navigation/native'

const WelcomeScreenButton = ({text, navigateTo}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <TouchableOpacity
				style={[styles.buttonContainer, {backgroundColor: navigateTo === "SignInScreen" ? '#173753' : '#799EA2'}]}
				onPress={() => navigation.navigate(navigateTo.toString())}
			>
				<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
    </View>
  )
}

export default WelcomeScreenButton

const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    }, 
    buttonContainer: {
		width: "70%",
		height: 70,
		borderRadius: 20,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 25,
	},	
    text: {
		fontFamily: fontTypes.type.montserratRegular,
		color: "white",
		fontSize: fontTypes.size.font22,
	},
})