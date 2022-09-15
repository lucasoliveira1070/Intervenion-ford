import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Home } from '../screens/Home'
import { Login } from "../screens/Login";

const Stack = createStackNavigator();

export function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
                <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}