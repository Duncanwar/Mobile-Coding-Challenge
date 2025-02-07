import React from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const jobs = {
    "1": { title: "Product Designer", location: "California, USA", description: "Design great products!" },
    "2": { title: "Frontend Developer", location: "New York, USA", description: "Build amazing interfaces!" },
};

export default function JobDetails() {
    const { id } = useLocalSearchParams();
    const job = jobs[id];

    if (!job) {
        return <Text style={styles.error}>Job Not Found</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: "https://source.unsplash.com/random/800x600?office" }} style={styles.image} />
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.location}>{job.location}</Text>
            <Text style={styles.description}>{job.description}</Text>

            <TouchableOpacity style={styles.applyButton} onPress={() => alert("Application Sent!")}>
                <Text style={styles.applyText}>Apply Now</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, backgroundColor: "#fff" },
    image: { width: "100%", height: 200, borderRadius: 10, marginBottom: 20 },
    title: { fontSize: 24, fontWeight: "bold" },
    location: { fontSize: 16, color: "gray", marginBottom: 10 },
    description: { fontSize: 14, color: "#555", marginBottom: 20 },
    applyButton: {
        backgroundColor: "#3D5AFE",
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    applyText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
    error: { fontSize: 18, textAlign: "center", marginTop: 20, color: "red" },
});
