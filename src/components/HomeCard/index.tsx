import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { ProgressBar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { RectButtonProps } from "react-native-gesture-handler";

interface Props extends RectButtonProps {
    data: {
        progress: number
    }
}
export function HomeCard({ data }: Props) {
    const navigation = useNavigation<any>();

    function handleAchievement() {
        navigation.navigate('Achievements', { teste: [] })
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
                <Text style={styles.detail}>{data.progress*100}%</Text>
                <ProgressBar style={styles.progressBar} progress={data.progress} color="#1E90FF" />
            </View>
        </TouchableOpacity>
    )
}