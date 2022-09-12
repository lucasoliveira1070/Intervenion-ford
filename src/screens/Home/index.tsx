import React from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import { HomeCard } from "../../components/HomeCard";
import { styles } from "./styles";

export function Home() {
    return (
        <View style={styles.mainView}>
            <View style={styles.rowView}>
                <Text style={styles.helloText}>Hello, Lucas</Text>
            </View>
            <View style={styles.rowView}>
                <Pressable >
                    <Text style={styles.navButton}>Overview</Text>
                </Pressable>
                <Pressable >
                    <Text style={styles.navButton}>Achievements</Text>
                </Pressable>
            </View>

            <HomeCard />
        </View>

    )
}