import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import MediaScreen from '../screens/MediaScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const token = useSelector(state => state.auth.token);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {token ? (
                    <Stack.Screen name="Media" component={MediaScreen} />
                ) : (
                    <>
                        <Stack.Screen name="Register" component={RegisterScreen} />
                        <Stack.Screen name="Login" component={LoginScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
