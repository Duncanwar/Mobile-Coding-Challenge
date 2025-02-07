import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";

const jobs = [
    {
        id: "1",
        company: "Pinterest, Inc.",
        location: "California, USA",
        title: "Motion Designer",
        level: "Senior",
        type: "Fulltime",
        remote: "Remote",
        salary: "$7K/Month",
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
    },
    {
        id: "2",
        company: "Facebook, Inc.",
        location: "California, USA",
        title: "UI Designer",
        level: "Senior",
        type: "Fulltime",
        remote: "Remote",
        salary: "$6K/Month",
        logo: 'https://seeklogo.com/images/F/facebook-logo-CE013BDE2C-seeklogo.com.png',
    },
];

const RecommendedJobs = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Recommendation</Text>
            <FlatList
                data={jobs}
                horizontal
                keyExtractor={(item) => item.id}

                nestedScrollEnabled={true}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.logo }} style={styles.logo} />
                        <Text style={styles.company}>{item.company}</Text>
                        <Text style={styles.location}>{item.location}</Text>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.details}>
                            {item.level} • {item.type} • {item.remote}
                        </Text>
                        <TouchableOpacity style={styles.applyButton}>
                            <Text style={styles.applyText}>Apply Now</Text>
                        </TouchableOpacity>
                        <Text style={styles.salary}>{item.salary}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        paddingLeft: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#111",
        marginBottom: 10,
    },
    card: {
        backgroundColor: "#F3F4F6",
        padding: 15,
        borderRadius: 12,
        width: 220,
        marginRight: 15,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    logo: {
        width: 30,
        height: 30,
        borderRadius: 5,
    },
    company: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
    },
    location: {
        fontSize: 12,
        color: "#6B7280",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
    details: {
        fontSize: 12,
        color: "#6B7280",
    },
    applyButton: {
        backgroundColor: "#3B82F6",
        padding: 8,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 10,
    },
    applyText: {
        color: "#fff",
        fontWeight: "bold",
    },
    salary: {
        fontSize: 14,
        fontWeight: "bold",
        marginTop: 5,
    },
});

export default RecommendedJobs;
