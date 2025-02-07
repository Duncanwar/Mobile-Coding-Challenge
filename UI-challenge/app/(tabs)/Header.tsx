import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather"; // Import Feather Icons

const jobs = [
    {
        id: '1',
        company: 'Pinterest, Inc.',
        location: 'California, USA',
        position: 'Motion Designer',
        level: 'Senior',
        type: 'Fulltime',
        remote: 'Remote',
        salary: '$7K/Month',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png',
    },
    {
        id: '2',
        company: 'Google',
        position: 'Product Designer',
        level: 'Senior',
        type: 'Fulltime',
        remote: 'Remote',
        salary: '$5K/Month',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
    },
];
const JobCard = ({ job }: { job: typeof jobs[0] }) => (
    <View style={styles.jobCard}>
        <View style={styles.jobHeader}>
            <Image source={{ uri: job.logo }} style={styles.logo} />
            <View style={styles.jobInfo}>
                <Text style={styles.company}>{job.company}</Text>
                <Text style={styles.location}>{job.location}</Text>
            </View>
        </View>
        <Text style={styles.position}>{job.position}</Text>
        <Text style={styles.details}>
            {job.level} • {job.type} • {job.remote}
        </Text>
        <View style={styles.footer}>
            <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyText}>Apply Now</Text>
            </TouchableOpacity>
            <Text style={styles.salary}>{job.salary}</Text>
        </View>
    </View>
);
const Header = () => {
    return (
        <>
            <View style={styles.container}>
                {/* Greeting Section */}
                <Text style={styles.greeting}>Hello</Text>
                <Text style={styles.name}>Leslie Alexander</Text>

                {/* Notification Icon */}
                <TouchableOpacity style={styles.notificationButton}>
                    <Icon name="bell" size={24} color="#fff" />
                    <View style={styles.notificationBadge} />
                </TouchableOpacity>

                {/* Search Bar (Overlapping) */}
                <View style={styles.searchWrapper}>
                    <View style={styles.searchContainer}>
                        <Icon name="search" size={20} color="#9CA3AF" style={styles.searchIcon} />
                        <TextInput
                            placeholder="Search job, company, etc.."
                            placeholderTextColor="#9CA3AF"
                            style={styles.searchInput}
                        />
                    </View>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3B82F6", // Blue background
        paddingTop: 60, // Adjust for status bar
        paddingHorizontal: 20,
        paddingBottom: 50, // Extra padding to give space for the search bar
        position: "relative",
    },
    greeting: {
        color: "#D1D5DB",
        fontSize: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    notificationButton: {
        position: "absolute",
        right: 20,
        top: 60,
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Light transparent background
        padding: 10,
        borderRadius: 12,
    },
    notificationBadge: {
        position: "absolute",
        top: 5,
        right: 5,
        width: 8,
        height: 8,
        backgroundColor: "red",
        borderRadius: 4,
    },
    searchWrapper: {
        position: "absolute",
        bottom: -25, // Moves the search bar to overlap the white background
        left: 20,
        right: 20,
    },
    searchContainer: {
        backgroundColor: "#fff",
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        height: 50,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5, // Shadow for Android
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#374151",
    },
    header: { marginBottom: 16 },
    username: { fontSize: 24, fontWeight: 'bold' },
    searchBar: { flexDirection: 'row', backgroundColor: '#f0f0f0', padding: 10, borderRadius: 10, alignItems: 'center' },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 16 },
    jobCard: { backgroundColor: '#f0f0f0', padding: 16, margin: 8, borderRadius: 12, shadowOpacity: 0.1, shadowRadius: 4 },
    jobHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
    logo: { width: 32, height: 32, borderRadius: 16 },
    jobInfo: { marginLeft: 8 },
    company: { fontWeight: 'bold' },
    location: { color: 'gray', fontSize: 12 },
    position: { fontSize: 16, fontWeight: 'bold' },
    details: { color: 'gray', fontSize: 12 },
    footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 },
    applyButton: { backgroundColor: '#007bff', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8 },
    applyText: { color: 'white', fontWeight: 'bold' },
    salary: { fontWeight: 'bold' },
});

export default Header;
