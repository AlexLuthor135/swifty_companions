import react from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen'
import ProfileScreen from './screens/ProfileScreen';

    const Stack = createNativeStackNavigator();

    export default function AppNavigator() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
            </Stack.Navigator>
        );
    }

