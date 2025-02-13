import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';

const App = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged(setUser);
        requestNotificationPermission();
        return unsubscribe;
    }, []);

    const requestNotificationPermission = async () => {
        const authStatus = await messaging().requestPermission();
        if (authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL) {
            const token = await messaging().getToken();
            console.log('FCM Token:', token);
        } else {
            console.log('Notification permission denied');
        }
    };

    const handleSignUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            Alert.alert('User registered successfully');
        } catch (error) {
            Alert.alert('Error signing up:', error.message);
        }
    };

    const handleLogin = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert('Logged in successfully');
        } catch (error) {
            Alert.alert('Error logging in:', error.message);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            setData(response.data.slice(0, 5));
        } catch (error) {
            Alert.alert('Error fetching data:', error.message);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            <Text>Email:</Text>
            <TextInput value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
            <Text>Password:</Text>
            <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
            <Button title="Sign Up" onPress={handleSignUp} />
            <Button title="Login" onPress={handleLogin} />
            {user && <Button title="Fetch Data" onPress={fetchData} />}
            {data && data.map(post => <Text key={post.id}>{post.title}</Text>)}
        </View>
    );
};

export default App;
