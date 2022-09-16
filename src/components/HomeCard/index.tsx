import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export function HomeCard() {
    const navigation = useNavigation<any>();

    function handleAchievement(){
        navigation.navigate('Achievements',{teste :[]})
    }
    return (
        <TouchableOpacity onPress={handleAchievement} style={styles.dailyProgressCard}>
            <View>
                <Text style={styles.cardTitle}>
                    Progresso Diário
                </Text>
                <Text style={styles.cardSubTitle}>
                    Aqui você verá seu progresso diário
                </Text>
                <Text style={styles.detail}>35%</Text>
                <ProgressBar style={styles.progressBar} progress={0.35} color="#1E90FF" />
            </View>
        </TouchableOpacity>
    )
}