import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles";
import moment from "moment-timezone";
import { propTypes } from "react-bootstrap/esm/Image";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// import Container from "react-bootstrap/Container";
const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemTitle}>{title}</Text>
      <Text style={styles.weatherItemTitle}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const CurrentWeather = ({ current }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  console.log(current ? current.humidity : "");
  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? "pm" : "am";
      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);

  return (
    <View style={styles.backgroundContainer}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.image}
      />
      <View style={styles.mainInfo}>
        {/* <Text style={styles.time}>5:00pm</Text>
        <Text style={styles.date}>March 27th 2022</Text> */}
        <WeatherItem
          title="Humidity"
          value={current ? current.humidity : ""}
          unit="%"
        />
        <Text style={styles.temp}>60</Text>
        <View style={styles.currentReadings}>
          <Text style={styles.humidity}>30%</Text>
          <Text style={styles.windSpeed}>5 MPH</Text>
        </View>
      </View>
    </View>
  );
};

// const DateTime = () => {
//   return <View></View>;
// };

export default CurrentWeather;
