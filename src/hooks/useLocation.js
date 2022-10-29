import { useState, useEffect } from "react";
import * as Location from "expo-location";
import { useDispatch, useSelector } from "react-redux";
import { selectDistance, setLocation } from "../redux/locationSlice";

export default function useLocation() {
	const [currLocation, setCurrLocation] = useState();
	const [errorMsg, setErrorMsg] = useState();
	const dispatch = useDispatch();
	const distance = useSelector(selectDistance);
	useEffect(() => {
		(async () => {
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== "granted") {
				setErrorMsg("Permission to access location was denied");
				return;
			}

			let location = await Location.getCurrentPositionAsync({
				enableHighAccuracy: true,
				accuracy: Location.Accuracy.BestForNavigation,
				maximumAge: 1000,
			});
			setCurrLocation(location);
			dispatch(
				setLocation({
					longitude: location.coords.longitude,
					latitude: location.coords.latitude,
					distance: distance,
				})
			);
		})();
	}, []);

	return currLocation;
}
