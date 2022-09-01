import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1A1A1A',
    }
});

export function Login() {
    return (
        <ScrollView style={styles.background}>
            <Text>
                Olá
            </Text>
        </ScrollView>
    )
}