import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import Header from "./Header";
import RecommendedJobs from "./RecommendedJobs";
import RecentJobs from "./RecentJobs";

const HomeScreen = () => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false} style={styles.container}>
      <Header />
      <RecommendedJobs />
      <RecentJobs />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFB",
  },
});

export default HomeScreen;
