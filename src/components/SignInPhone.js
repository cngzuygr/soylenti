import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React from "react";
import { MaskedTextInput } from "react-native-mask-text";

const SignInPhone = ({ phoneNumber, setPhoneNumber, setCodeScreen }) => {
  return (
    <View>
      <Text style={{ fontFamily: "GloriaRegular", fontSize: 32 }}>
        Giriş Yap
      </Text>
      <Text
        style={{ fontFamily: "GloriaRegular", fontSize: 20, color: "gray" }}
      >
        Telefon numaranı girerek uygulamaya giriş yap.
      </Text>
      <MaskedTextInput
        keyboardType="decimal-pad"
        placeholder="Telefon Numarası"
        maxLength={16}
        value={phoneNumber}
        mask="0 (999) 999 9999"
        onChangeText={(text, rawText) => {
          setPhoneNumber("+9" + rawText);
        }}
        style={styles.phoneInput}
        allowFontScaling={true}
        numberOfLines={1}
        caretHidden={true}
      />
      <TouchableOpacity
        style={[
          styles.signInButton,
          { backgroundColor: phoneNumber.length > 12 ? "blue" : "gray" },
        ]}
        disabled={phoneNumber.length > 12 ? false : true}
        onPress={() => setCodeScreen(true)}
      >
        <Text style={styles.signInButtonText}>Giriş Yap</Text>
      </TouchableOpacity>
      <View style={styles.dontHaveAccountContainer}>
        <Text style={styles.dontHaveAccountText}>Hesabın yok mu?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUpScreen")}>
          <Text style={styles.signUpText}>Kayıt ol</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phoneInput: {
    width: "100%",
    height: 50,
    backgroundColor: "#F6F6F6",
    color: "#7a7a7a",
    fontFamily: "MontserratRegular",
    marginTop: 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#7a7a7a",
    padding: 10,
  },
  signInButton: {
    width: "80%",
    backgroundColor: "gray",
    height: 60,
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  signInButtonText: {
    fontFamily: "GloriaRegular",
    color: "white",
    fontSize: 17,
  },
  dontHaveAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  dontHaveAccountText: {
    color: "gray",
    fontFamily: "GloriaRegular",
    alignSelf: "center",
  },
  signUpText: {
    marginLeft: 5,
    color: "#173753",
    fontFamily: "GloriaRegular",
    alignSelf: "center",
  },
});
