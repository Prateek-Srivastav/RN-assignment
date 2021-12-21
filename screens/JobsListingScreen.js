import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import JobCard from "../components/JobCard";

import data from "../dummyData.js/data";
import AuthScreen from "./AuthScreen";
import { useState } from "react";

function JobsListingScreen(props) {
  const [isLogout, setIsLogout] = useState(false);

  if (isLogout) return <AuthScreen />;

  return (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={() => setIsLogout(true)}
        style={{
          flexDirection: "row",
          alignSelf: "flex-end",
          margin: 10,
          marginHorizontal: 20,
          alignItems: "center",
        }}
      >
        <MaterialCommunityIcons name="logout" size={24} color="black" />
        <Text>Logout</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        keyExtractor={(heading) => `${heading}${Math.random(new Date())}`}
        renderItem={(itemData) => (
          <JobCard
            style={{ margin: 10 }}
            heading={itemData.item.heading}
            companyName={itemData.item.companyName}
            jobType={itemData.item.jobType}
            location={itemData.item.location}
            description={itemData.item.description}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
});

export default JobsListingScreen;
