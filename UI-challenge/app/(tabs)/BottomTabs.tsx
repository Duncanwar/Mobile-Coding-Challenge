import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Import screens
import HomeScreen from "./index";

// Placeholder Screens
const DiscoverScreen = () => (
    <View style={styles.screen}><Text>Discover Screen</Text></View>
);
const FavoritesScreen = () => (
    <View style={styles.screen}><Text>Favorites Screen</Text></View>
);
const ProfileScreen = () => (
    <View style={styles.screen}><Text>Profile Screen</Text></View>
);

// Create Bottom Tabs
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName: string = "";
                        if (route.name === "Home") iconName = "home-outline";
                        else if (route.name === "Discover") iconName = "compass-outline";
                        else if (route.name === "Favorites") iconName = "heart-outline";
                        else if (route.name === "Profile") iconName = "person-outline";

                        return <Icon name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: "#111",
                    tabBarInactiveTintColor: "#6B7280",
                    tabBarStyle: styles.tabBar,
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Discover" component={DiscoverScreen} />
                <Tab.Screen name="Favorites" component={FavoritesScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#fff",
        height: 60,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        position: "absolute",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    screen: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default BottomTabs;
