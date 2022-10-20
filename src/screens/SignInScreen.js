import { StyleSheet } from "react-native";
import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInPhone from "../components/SignInPhone";
import EnterCode from "../components/EnterCode";

const SignInScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [codeScreen, setCodeScreen] = useState(false);
  const [value, setValue] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {codeScreen ? (
        <EnterCode
          value={value}
          setValue={setValue}
          isUpdating={isUpdating}
          setIsUpdating={setIsUpdating}
        />
      ) : (
        <SignInPhone
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          setCodeScreen={setCodeScreen}
        />
      )}
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
});
