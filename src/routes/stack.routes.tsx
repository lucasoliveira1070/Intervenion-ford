import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Home } from '../screens/Home'
import { Login } from "../screens/Login";
import { Achievements } from '../screens/Achievements'
import { Reward } from '../screens/Reward'
import { AchievementDetail } from '../screens/AchievementDetail'
import { StatusBar } from "react-native";
import { UserContextProvider } from "../contexts/User/UserProvider";

const Stack = createStackNavigator();

export function StackRoutes() {
    return (
        <NavigationContainer>
            <UserContextProvider>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                />
                <Stack.Navigator
                    initialRouteName="Login"
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name='Login' component={Login} />
                    <Stack.Screen name='Home' component={Home} />
                    <Stack.Screen name='Achievements' component={Achievements} />
                    <Stack.Screen name='Reward' component={Reward} />
                    <Stack.Screen name='AchievementDetail' component={AchievementDetail} />
                </Stack.Navigator>
            </UserContextProvider>
        </NavigationContainer>

    )
}