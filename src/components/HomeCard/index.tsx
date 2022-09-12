import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

export function HomeCard() {
    return (
        <View style={styles.dailyProgressCard}>
            <Text style={styles.cardTitle}>
                Progresso Diário
            </Text>
        </View>

    )
}