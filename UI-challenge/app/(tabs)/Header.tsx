import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const Header = () => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.greeting}>Hello</Text>
                <Text style={styles.name}>Leslie Alexander</Text>

                <TouchableOpacity style={styles.notificationButton}>
                    <Icon name="bell" size={24} color="#fff" />
                    <View style={styles.notificationBadge} />
                </TouchableOpacity>

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
        backgroundColor: "#3B82F6",
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 50,
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
        backgroundColor: "rgba(255, 255, 255, 0.2)",
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
        bottom: -25,
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
        elevation: 5,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: "#374151",
    },
});

export default Header;
