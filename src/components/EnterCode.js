import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  CodeField,
  Cursor,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const EnterCode = ({ value, setValue, isUpdating, setIsUpdating }) => {
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <View>
      <Text style={{ fontFamily: "GloriaRegular", fontSize: 32 }}>
        Kodu onayla
      </Text>
      <Text
        style={{ fontFamily: "GloriaRegular", fontSize: 20, color: "gray" }}
      >
        Telefon numarana gelen şifreyi gir.
      </Text>
      <CodeField
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={6}
        rootStyle={InputStyles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[InputStyles.cellRoot, isFocused && InputStyles.focusCell]}
          >
            <Text style={InputStyles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
      <View style={{ justifyContent: "center", marginTop: 50 }}>
        <TouchableOpacity
          style={{
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: `${
              value.length < 6 || isUpdating ? "lightgray" : "black"
            }`,
            width: "60%",
            height: 40,
            borderRadius: 10,
          }}
          disabled={value.length < 6 || isUpdating}
          onPress={() => setIsUpdating(true)}
        >
          {!isUpdating ? (
            <Text
              style={{
                fontFamily: "GloriaRegular",
                color: `${value.length < 6 ? "gray" : "white"}`,
              }}
              allowFontScaling={true}
              numberOfLines={1}
            >
              Onayla
            </Text>
          ) : (
            <ActivityIndicator color="red" size={18} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default EnterCode;

const styles = StyleSheet.create({});

const InputStyles = StyleSheet.create({
  root: { padding: 20, minHeight: 300 },
  codeFiledRoot: {
    marginTop: 40,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    padding: 10,
  },
  cellRoot: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  cellText: {
    color: "black",
    fontSize: 32,
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
  },
});
