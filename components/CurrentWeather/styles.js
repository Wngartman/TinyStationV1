import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "flex-start",
  },
  mainInfo: {
    marginTop: "25%",
    alignItems: "center",
    flex: 1,
    alignContent: "space-between",
  },
  location: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#fff",
    marginTop: "10%",
  },
  temp: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
    padding: 30,
  },
  humidity: {
    color: "#fff",
    fontSize: 30,
    paddingHorizontal: 25,
  },
  windSpeed: {
    color: "#fff",
    fontSize: 30,
    paddingHorizontal: 25,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  currentReadings: {
    flex: 1,
    flexDirection: "row",
  },
});

export default styles;
