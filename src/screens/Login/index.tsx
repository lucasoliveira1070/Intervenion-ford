import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1A1A1A',
    }
});

export function Login() {
    return (
        <View style={{
            flexDirection: "column",
            height: 100,
            padding: 20,
            backgroundColor:"#1A1A1A",
            flex: 1
        }}>
            <Text>Hello, Lucas</Text>
            <View style={{ backgroundColor: '#333333', flex: 0.5,borderRadius:15 }} />
            <View style={{ backgroundColor: '#333333', flex: 0.5,borderRadius:15 }} />
        </View>

    )
}