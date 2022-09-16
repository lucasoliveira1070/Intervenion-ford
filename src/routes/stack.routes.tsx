import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Home } from '../screens/Home'
import { Login } from "../screens/Login";
import { Achievements } from '../screens/Achievements'
import { Reward } from '../screens/Reward'
import { AchievementDetail } from '../screens/AchievementDetail'

const Stack = createStackNavigator();

export function StackRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name='Home' options={{ headerShown: false }} component={Home} />
                <Stack.Screen name='Login' options={{ headerShown: false }} component={Login} />
                <Stack.Screen name='Achievements' options={{ headerShown: false }} component={Achievements} />
                <Stack.Screen name='Reward' options={{ headerShown: false }} component={Reward} />
                <Stack.Screen name='AchievementDetail' options={{ headerShown: false }} component={AchievementDetail} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}