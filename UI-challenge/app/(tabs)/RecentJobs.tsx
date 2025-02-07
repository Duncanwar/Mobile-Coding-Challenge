import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";

const jobs = [
  {
    id: "1",
    company: "Google",
    title: "Product Designer",
    level: "Senior",
    type: "Fulltime",
    remote: "Remote",
    salary: "$5K/Month",
    time: "12 Minutes Ago",
    logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/google-color.png',

  },
];

const RecentJobs = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Recent Job List</Text>
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id}
        nestedScrollEnabled={true}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => router.push(`/job/${item.id}`)}
          >
            <View style={styles.card}>

              <Image source={{ uri: item.logo }} style={styles.logo} />
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.details}>
                  {item.level} • {item.type} • {item.remote}
                </Text>
                <Text style={styles.salary}>{item.salary}</Text>
              </View>
              <Text style={styles.time}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logo: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  details: {
    fontSize: 12,
    color: "#6B7280",
  },
  salary: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  time: {
    fontSize: 12,
    color: "#6B7280",
  },
});

export default RecentJobs;
