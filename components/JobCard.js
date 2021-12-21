import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";

function JobCard(props) {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <View style={styles.card}>
        <Text style={styles.heading}>{props.heading}</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons
              name="office-building"
              size={24}
              color="#888"
            />
            <Text style={styles.text} numberOfLines={1}>
              {props.companyName.length > 25
                ? props.companyName.substring(0, 25 - 3) + "..."
                : props.companyName}
            </Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="shopping-bag" size={19} color="#888" />
            <Text style={styles.text}>{props.jobType}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Ionicons name="location-sharp" size={20} color="#888" />
          <Text style={styles.text}>{props.location}</Text>
        </View>
        <Text style={{ marginVertical: 10, ...styles.text }}>
          {props.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginVertical: 10,
    padding: 20,
    borderWidth: 0.6,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "white",
    elevation: 5,
    width: "95%",
  },
  heading: {
    fontFamily: "product-sans-regular",
    fontSize: 22,
  },
  text: {
    fontFamily: "product-sans-regular",
    marginHorizontal: 10,
    color: "#18191a",
    fontSize: 15,
  },
});

export default JobCard;
