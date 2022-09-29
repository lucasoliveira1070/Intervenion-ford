import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";
import { Avatar, ProgressBar } from "react-native-paper";
import { styles } from "./styles";

interface Props extends RectButtonProps {
    data: {
        title: string,
        icon: string,
        color: string,
        route: string,
        progress: number
    }
}

export default function CompetitionCard({ data }: Props) {
    const navigation = useNavigation<any>();
    let backgroundColor: string = data.color;
    let route: string = data.route;

    function handleRoute() {
        navigation.navigate(data.route, { teste: [] })
    }

    return (
        <TouchableOpacity style={styles.card} onPress={handleRoute}>
            <Avatar.Icon style={{ backgroundColor: backgroundColor }} size={35} icon={data.icon} />
            <Text style={styles.cardTitle}>{data.title}</Text>
            <Text style={styles.cardSubtitle}>3 Novos</Text>
            <ProgressBar style={styles.progressBar} progress={data.progress} color={data.color} />

        </TouchableOpacity>
    )

}