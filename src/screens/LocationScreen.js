import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MapView, { Animated, Circle } from "react-native-maps";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import Slider from "@react-native-community/slider";

export default function LocationScreen({ navigation }) {
  const [radiusSelected, setRadiusSelected] = useState({ radius: 0 });
  const location = {
    coords: {
      longitude: 32.52243,
      latitude: 38.01113,
    },
  };
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
          <View style={{ flex: 1, justifyContent: "center" }}>
            <Slider
              style={{
                width: "100%",
                height: 50,
              }}
              value={(radiusSelected.radius * 2) / 1000}
              step={0.1}
              minimumValue={0.2}
              maximumValue={20}
              minimumTrackTintColor="#8883f0"
              maximumTrackTintColor="#8883f0"
              thumbTintColor="#8883f0"
              onValueChange={(value) => {
                setRadiusSelected({ radius: (value / 2) * 1000 });
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 48,
              width: 48,
              borderRadius: 5,
              backgroundColor: "green",
              padding: 10,
              margin: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <AntDesign name="check" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
