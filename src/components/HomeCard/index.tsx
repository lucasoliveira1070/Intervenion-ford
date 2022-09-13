import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ProgressBar, MD3Colors } from "react-native-paper";

export function HomeCard() {
    return (
        <TouchableOpacity style={styles.dailyProgressCard}>
            <View>
                <Text style={styles.cardTitle}>
                    Progresso Diário
                </Text>
                <Text style={styles.detail}>35%</Text>
                <ProgressBar style={styles.progressBar} progress={0.35} color="#1E90FF" />
            </View>
        </TouchableOpacity>
    )
}