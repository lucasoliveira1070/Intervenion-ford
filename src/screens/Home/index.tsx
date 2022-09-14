import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Image, ScrollView, Pressable } from "react-native";
import CompetitionCard from "../../components/CompetitionsCard";
import { HomeCard } from "../../components/HomeCard";
import { styles } from "./styles";

export function Home() {
    const [loading, setLoading] = useState(true);

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
            <View style={styles.competitionsViewUpper}>
                <Text style={styles.competitionsTitle}>Competitions</Text>
                <View>
                    <CompetitionCard />
                </View>
            </View>
        </View>

    )
}