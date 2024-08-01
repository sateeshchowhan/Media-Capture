import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        try {
            await axios.post('http://localhost:5001/api/auth/register', { email, password });
            navigation.navigate('Login');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View>
            <Text>Register</Text>
            <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Register" onPress={register} />
        </View>
    );
};

export default RegisterScreen;
